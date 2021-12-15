package service

import (
	"database/sql"
	"errors"
	"fmt"

	db "github.com/FX-KNUT/fc-/backend/database"
	"github.com/FX-KNUT/fc-/backend/entity"
)

const ERR_TRANSACTION_CANNOT_WITHDRAW 		string = "cannot withdraw the balance of user 'from' as his balance is below the amount of contract"
const ERR_USER_NOT_EXIST					string = "user 'to' doesn't exist in DB"
const ERR_UNABLE_CONTRACTING_TX__WITHDRAW	string = "couldn't contract the transaction successfully while withdraw"
const ERR_UNABLE_CONTRACTING_TX__DEPOSIT	string = "couldn't contract the transaction successfully while deposit"

type struct_tx_service struct {
	Txs []entity.Tx
}

type Tx_service interface {
	isContractAvailable(*sql.DB, entity.User, entity.User, int) error
	ContractTx(entity.User, entity.User, int) error
}

func New__Tx() Tx_service {
	return &struct_tx_service{}
}

func (s *struct_tx_service) isContractAvailable(db *sql.DB, from entity.User, to entity.User, amount int) error {

	// declearation
	var (
		balance int
		user_service User_service
	)

	// validation where user 'from' can withdraw or not...
	query := fmt.Sprintf("SELECT balance FROM wallet WHERE id == %s", from.User_id)

	err := db.QueryRow(query).Scan(&balance)

	if err != nil {
		return err
	}

	if balance < amount {
		return errors.New(ERR_TRANSACTION_CANNOT_WITHDRAW)
	}

	// validation whether user 'to' exists or not...
	err = user_service.CheckDuplicatedId(to.User_id)

	if err != nil {
		return err
	}

	return nil
}

func (s *struct_tx_service) ContractTx(from entity.User, to entity.User, amount int) error {

	db := db.Fn_open__db()

	err := s.isContractAvailable(db, from, to, amount)

	if err != nil {
		return err
	}

	defer func(){
		db.Close()
	}()

	// need to be refactored as transaction logic
	query__withdraw_from := 
		fmt.Sprintf("UPDATE wallet" +
					"SET wallet_balance = wallet_balance - %d" +
					"where wallet_owner == '%s';",
					amount, from.User_id)

	_, err = db.Query(query__withdraw_from)

	if err != nil {
		return errors.New(ERR_UNABLE_CONTRACTING_TX__WITHDRAW)
	}

	// need to be refactored as transaction logic
	query__deposit_to :=
		fmt.Sprintf("UPDATE wallet" +
					"SET wallet_balance = wallet_balance + %d" +
					"where wallet_owner == '%s';",
			amount, to.User_id)

	_, err = db.Query(query__deposit_to)

	if err != nil {
		return errors.New(ERR_UNABLE_CONTRACTING_TX__DEPOSIT) 
	}

	return nil
}