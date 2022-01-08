package service

import (
	"fmt"
	"log"

	db "github.com/FX-KNUT/fc-/backend/database"
	"github.com/FX-KNUT/fc-/backend/entity"
)

type struct_user_service struct {
	Users []entity.User
}

type User_service interface {
	// private
	addUserToWallet(string, int) error

	// public
	SignIn(string, string) (entity.User_as_response, error)
	SignUp(entity.User, int) error
	CheckDuplicatedId(string) error
	GetRanking100() ([]entity.Ranking, error)
	GetUserWallet(string) (entity.User_wallet, error)
}

func New__User() User_service {
	return &struct_user_service{}
}

func (s *struct_user_service) addUserToWallet(id string, balance int) error {

	db := db.Fn_open__db()

	query := fmt.Sprintf("INSERT INTO wallet(wallet_owner, wallet_balance) VALUES('%s', '%d')", id, balance)

	_, err := db.Query(query)

	return err
}

func (s *struct_user_service) SignIn(id, pw string) (entity.User_as_response, error) {

	var user entity.User_as_response

	db := db.Fn_open__db()

	query := fmt.Sprintf("SELECT user_id, user_nickname, user_email from users where user_id = '%s' and user_hashed_pw = '%s'", id, pw)

	err := db.QueryRow(query).Scan(&user.User_id, &user.User_nickname, &user.User_email)

	fmt.Println(err)

	if err != nil {
		return entity.User_as_response{}, err
	}

	user.User_stars, err = New__Bookmark().GetBookmarks(user.User_id)

	fmt.Println(err)

	if err != nil {
		return entity.User_as_response{}, err
	}
	
	return user, nil
}

func (s *struct_user_service) SignUp(user entity.User, balance int) error {

	db := db.Fn_open__db()

	query := fmt.Sprintf("INSERT INTO users VALUES('%s', '%s', '%s', '%s')",
		user.User_id, user.User_nickname, user.User_hashed_pw, user.User_email)

	_, err := db.Query(query)

	if err != nil {
		return err
	}

	return err
}

func (s *struct_user_service) CheckDuplicatedId(id string) error {

	var ret_id string

	db := db.Fn_open__db()

	query := fmt.Sprintf("SELECT user_id from users where user_id = '%s'", id)

	row := db.QueryRow(query)

	err := row.Scan(&ret_id)

	return err
}

// func (s *struct_user_service) ChangeProfilePicture(/* some data type */) error {
	
// }

func (s *struct_user_service) GetRanking100() (es []entity.Ranking, err error) {
	var e entity.Ranking

	// @이진형 1209
	// 수정 필요
	q := fmt.Sprintf(
		`SELECT * FROM ranking LIMIT %d`,
		100,
	)

	db := db.Fn_open__db()

	rows, err := db.Query(q)
	if err != nil {
		log.Panic(err)
	}
	defer rows.Close()

	for rows.Next() {
		err = rows.Scan(&e.User_Id, &e.Ranking_Idx)
		if err != nil {
			log.Panicln(err)
		}
		es = append(es, e)
	}

	return es, nil
} 

func (s *struct_user_service) GetUserWallet(id string) (entity.User_wallet, error) {
	var wallet entity.User_wallet

	// 1. get name and stock of coins which I have

	// 2. get price of coin and calculate total price with stock

	// 3. get average buy of coins

	// 4. calculate profit

	// 5. summary

	return wallet, nil
} 