package service

import (
	"errors"
	"fmt"

	db "github.com/FX-KNUT/fc-/backend/database"
	"github.com/FX-KNUT/fc-/backend/entity"
)

const ERR_TRANSACTION_CANNOT_WITHDRAW 		string = "cannot withdraw the balance of user 'from' as his balance is below the amount of contract"
const ERR_USER_NOT_EXIST					string = "user 'to' doesn't exist in DB"
const ERR_UNABLE_CONTRACTING_TX__WITHDRAW	string = "couldn't contract the transaction successfully while withdraw"
const ERR_UNABLE_CONTRACTING_TX__DEPOSIT	string = "couldn't contract the transaction successfully while deposit"
const ERR_UNABLE_CONTRACTING_TX__GIVE_COIN	string = "couldn't contract the transaction successfully due to an issue of giving coin"
const ERR_UNABLE_CONTRACTING_TX__TAKE_COIN	string = "couldn't contract the transaction successfully due to an issue of taking coin"
const ERR_GETTING_COIN_PRICES				string = "couldn't get informations of coin prices"
const ERR_UPDATING_COIN_HIGHEST_PRICES		string = "couldn't update coin_highest_price"
const ERR_UPDATING_COIN_LOWEST_PRICES		string = "couldn't update coin_lowest_price"
const ERR_RECORDING_TRADE_TIMES				string = "couldn't record coin_trade_times"
const ERR_RECORDING_TX						string = "couldn't record tx"

type struct_tx_service struct {
	Txs []entity.Tx
}

type Tx_service interface {
	isContractAvailable(entity.Tx_json) error
	ContractTx(entity.Tx_json) error
}

func New__Tx() Tx_service {
	return &struct_tx_service{}
}

func (s *struct_tx_service) isContractAvailable(tx_info entity.Tx_json) error {

	// declearation
	var (
		balance int
		user_service User_service
	)

	db := db.Fn_open__db()

	// validation where user 'from' can withdraw or not...
	query := fmt.Sprintf("SELECT balance FROM wallet WHERE wallet_owner == '%s'", tx_info.From)

	err := db.QueryRow(query).Scan(&balance)

	if err != nil {
		return err
	}

	if balance < tx_info.Amount {
		return errors.New(ERR_TRANSACTION_CANNOT_WITHDRAW)
	}

	// validation whether user 'to' exists or not...
	err = user_service.CheckDuplicatedId(tx_info.To)

	if err != nil {
		return err
	}

	return nil
}

func (s *struct_tx_service) ContractTx(tx_info entity.Tx_json) error {

	db := db.Fn_open__db()

	err := s.isContractAvailable(tx_info)

	if err != nil {
		return err
	}

	defer func(){
		db.Close()
	}()

	// 1. set balance
	// need to be refactored as transaction logic
	query__withdraw_from := 
		fmt.Sprintf("UPDATE wallet " +
					"SET wallet_balance = wallet_balance - %d " +
					"where wallet_owner = '%s';",
					tx_info.Amount, tx_info.From)

	_, err = db.Query(query__withdraw_from)

	if err != nil {
		return errors.New(ERR_UNABLE_CONTRACTING_TX__WITHDRAW)
	}

	// need to be refactored as transaction logic
	query__deposit_to :=
		fmt.Sprintf("UPDATE wallet" +
					"SET wallet_balance = wallet_balance + %d" +
					"where wallet_owner = '%s';",
					tx_info.Amount, tx_info.To)

	_, err = db.Query(query__deposit_to)

	if err != nil {
		return errors.New(ERR_UNABLE_CONTRACTING_TX__DEPOSIT) 
	}

	// 2. set coins
	query__give_coin :=
		fmt.Sprintf("UPDATE wallet " +
					"SET %s = %s + %d" +
					"where wallet_owner = '%s';",
					tx_info.Coin_name, tx_info.Coin_name, tx_info.Quantity, tx_info.To)

	_, err = db.Query(query__give_coin)

	if err != nil {
		return errors.New(ERR_UNABLE_CONTRACTING_TX__GIVE_COIN)
	}

	query__take_coin :=
		fmt.Sprintf("UPDATE wallet " +
					"SET %s = %s - %d" +
					"where wallet_owner = '%s';",
					tx_info.Coin_name, tx_info.Coin_name, tx_info.Quantity, tx_info.From)

	_, err = db.Query(query__take_coin)

	if err != nil {
		return errors.New(ERR_UNABLE_CONTRACTING_TX__TAKE_COIN)
	}

	// 3. record coin price

	var price struct {
		coin_price_highest int
		coin_price_lowest int
	}

	var done string

	query__get_coin_price := 
		fmt.Sprintf("SELECT coin_price_highest, coin_price_lowest FROM wallet WHERE coin_name = '%s';", tx_info.Coin_name)

	err = db.QueryRow(query__get_coin_price).Scan(&price)

	if err != nil {
		return errors.New(ERR_GETTING_COIN_PRICES)
	}

	if tx_info.Amount / tx_info.Quantity > price.coin_price_highest {
		query := fmt.Sprintf("UPDATE wallet SET coin_price_highest = %d where coin_name = '%s';",
						tx_info.Amount / tx_info.Quantity, tx_info.Coin_name)

		err := db.QueryRow(query).Scan(&done)

		if err != nil {
			return errors.New(ERR_UPDATING_COIN_HIGHEST_PRICES)
		}
	}

	if tx_info.Amount / tx_info.Quantity < price.coin_price_lowest {
		query := fmt.Sprintf("UPDATE wallet SET coin_price_lowest = %d where coin_name = '%s';",
						tx_info.Amount / tx_info.Quantity, tx_info.Coin_name)

		err := db.QueryRow(query).Scan(&done)

		if err != nil {
			return errors.New(ERR_UPDATING_COIN_LOWEST_PRICES)
		}
	}

	// 4. record coin trade times

	query__record_trade := fmt.Sprintf("UPDATE wallet SET coin_trade_times = coin_trade_times + 1 where coin_name = '%s';",
											tx_info.Coin_name)

	err = db.QueryRow(query__record_trade).Scan(&done)

	if err != nil {
		return errors.New(ERR_RECORDING_TRADE_TIMES)
	}

	// 5. record tx

	// curr_index := logic_server.CURRENT_SERVER_BLOCK_INDEX

	// query__record_tx := fmt.Sprintf("INSERT INTO txs VALUES(%d, '%s', '%s', %d);",
	// 							curr_index, tx_info.From, tx_info.To, tx_info.Amount)

	// _, err = db.Query(query__record_tx)

	// if err != nil {
	// 	return errors.New(ERR_RECORDING_TX)
	// }

	return nil
}