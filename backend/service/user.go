package service

import (
	"fmt"

	database "github.com/FX-KNUT/fc-/backend/database"
	"github.com/FX-KNUT/fc-/backend/entity"
)

type struct_user_service struct {
	Users []entity.User
}

type User_service interface {
	// private
	addUserToWallet(string, int) error

	// public
	SignIn(string, string) (entity.User, error)
	SignUp(entity.User, int) error
	CheckDuplicatedId(string) error
}

func New__User() User_service {
	return &struct_user_service{}
}

func (s *struct_user_service) addUserToWallet(id string, balance int) error {

	db := database.Fn_open__db()

	query := fmt.Sprintf("INSERT INTO wallet VALUES('%s', '%d')", id, balance)

	_, err := db.Query(query)

	return err
}

func (s *struct_user_service) SignIn(id, pw string) (entity.User, error) {

	var user entity.User

	db := database.Fn_open__db()

	query := fmt.Sprintf("SELECT id from users where id = '%s' and hashed_pw = '%s'", id, pw)

	err := db.QueryRow(query).Scan(&user)

	if err != nil {
		return entity.User{}, err
	}
	
	return user, nil
}

func (s *struct_user_service) SignUp(user entity.User, balance int) error {

	db := database.Fn_open__db()

	query := fmt.Sprintf("INSERT INTO users VALUES('%s', '%s', '%s', '%s')",
		user.Id, user.Nickname, user.Hashed_pw, user.Email)

	_, err := db.Query(query)

	if err != nil {
		return err
	}

	err = s.addUserToWallet(user.Id, balance)

	return err
}

func (s *struct_user_service) CheckDuplicatedId(id string) error {

	var ret_id string

	db := database.Fn_open__db()

	query := fmt.Sprintf("SELECT id from users where id = '%s'", id)

	row := db.QueryRow(query)

	err := row.Scan(&ret_id)

	return err
}

// func (s *struct_user_service) ChangeProfilePicture(/* some data type */) error {
	
// }