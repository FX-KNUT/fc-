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
	CreateWallet(entity.User, int) error
}

func New__Wallet() Wallet_service {
	return &struct_wallet_service{}
}

func (s *struct_wallet_service) CreateWallet(user entity.User, balance int) error {

	var is_success error

	db := db.Fn_open__db()

	query := fmt.Sprintf("INSERT INTO wallet(wallet_owner, wallet_balance) VALUES ('%s', %d)", user.User_id, balance)

	err := db.QueryRow(query).Scan(&is_success)

	if err != nil {
		return err
	}

	return nil
}