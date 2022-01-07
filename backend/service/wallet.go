package service

import (
	"fmt"

	db "github.com/FX-KNUT/fc-/backend/database"
	"github.com/FX-KNUT/fc-/backend/entity"
)

type struct_wallet_service struct {
	Wallets []entity.Wallet
}

type Wallet_service interface {
	GetWallet(string) (entity.Wallet, error)
	CreateWallet(entity.User, int) error
}

func New__Wallet() Wallet_service {
	return &struct_wallet_service{}
}

func (s *struct_wallet_service) GetWallet(owner string) (entity.Wallet, error) {

	var wallet entity.Wallet

	db := db.Fn_open__db()

	query := fmt.Sprintf("SELECT * FROM wallet WHERE wallet_owner = '%s';", owner)

	err := db.QueryRow(query).Scan(&wallet)

	if err != nil {
		return wallet, err
	}

	return wallet, nil

}

func (s *struct_wallet_service) CreateWallet(user entity.User, balance int) error {

	db := db.Fn_open__db()

	query := fmt.Sprintf("INSERT INTO wallet(wallet_owner, wallet_balance) VALUES ('%s', %d)", user.User_id, balance)

	_, err := db.Query(query)

	return err
}