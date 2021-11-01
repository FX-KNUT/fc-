package controller

import (
	"fmt"

	db "../database"
	entity "../entity"
)

func Fn_sign_in(id string, hashed_pw string) (entity.User, error) {
	database := db.Fn_access_db()
	// query := fmt.Sprintf("SELECT ID, NAME, NICKNAME, HASHED_PW, EMAIL FROM USER WHERE (ID = %s) AND (HASHED_PW = %s);", id, hashed_pw)

	// query := "SELECT id FROM users"

	// var user_info string

	// err := db.QueryRow(query).Scan(&user_info)

	// if err != nil {
	// 	panic(err.Error())
	// }

	// fmt.Println(user_info)

	query := "SELECT id FROM users"

	var user string

	err := database.QueryRow(query).Scan(&user)
	if err != nil {
		panic(err.Error())
	}

	fmt.Println(user)

	return entity.User{}, err
}