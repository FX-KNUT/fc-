package service

import (
	"fmt"

	db "github.com/FX-KNUT/fc-/backend/database"
	"github.com/FX-KNUT/fc-/backend/entity"
)

type User entity.User
type Users entity.Users

type struct_user_service struct {
	users Users
}

type User_service interface {
	SignIn(string, string) (entity.User, error)
	SignUp(entity.User) error
	CheckDuplicatedId(string) error
	TESTING(string) error
}

func New__User() User_service {
	return &struct_user_service{}
}

func (s *struct_user_service) SignIn(id, pw string) (entity.User, error) {

	var user entity.User

	db := db.Fn_access_db()

	query := fmt.Sprintf("SELECT id from users where id = '%s' and hashed_pw = '%s'", id, pw)

	err := db.QueryRow(query).Scan(&user)

	if err != nil {
		return entity.User{}, err
	}
	
	return user, nil
}

func (s *struct_user_service) SignUp(user entity.User) error {

	db := db.Fn_access_db()

	query := fmt.Sprintf("INSERT INTO users VALUES('%s', '%s', '%s', '%s', %d)",
		user.Id, user.Nickname, user.Hashed_pw, user.Email, user.Balance)

	_, err := db.Query(query)

	return err
}

func (s *struct_user_service) CheckDuplicatedId(id string) error {

	var ret_id string

	db := db.Fn_access_db()

	query := fmt.Sprintf("SELECT id from users where id = '%s'", id)

	row := db.QueryRow(query)

	err := row.Scan(&ret_id)

	return err
}

// func (s *struct_user_service) ChangeProfilePicture(/* some data type */) error {
	
// }

func (s *struct_user_service) TESTING(id string) error {

	var ret_id string

	db := db.Fn_access_db()

	query := fmt.Sprintf("SELECT id from users where id = '%s'", id)

	row := db.QueryRow(query)

	err := row.Scan(&ret_id)

	fmt.Println("look at me, I'am the ret_id : ", ret_id)
	fmt.Println("look at me, I'am the err : ", err)
	fmt.Println("look at me, I'am the db : ", db)
	fmt.Println("id is ", id)
	return nil
}