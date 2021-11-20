package db

import (
	"fmt"

	"github.com/FX-KNUT/fc-/backend/entity"
)

// Select

// 모든 유저 정보 한 번에 리턴. 쓸 일이 있을 지..
func Fn_select_users() (entity.Users, error) {

	var user entity.User
	var users entity.Users

	db := Fn_access_db()

	query := "SELECT * from users"

	rows, err := db.Query(query)

	if err != nil {
		return entity.Users{}, err
	}

	defer rows.Close()

	for rows.Next() {
		err = rows.Scan(&user.Id, &user.Nickname, &user.Hashed_pw, &user.Email, &user.Balance)
		if err != nil {
			return entity.Users{}, err
		}
		users = append(users, user)
	}

	return users, nil
}

// 요청 아이디와 일치하는 아이디의 유저 확인 후 존재 유무 불린 리턴(중복이면 true 리턴). 아이디 중복 확인에 사용
func Fn_select_user_by_ID(id string) bool {

	var ret_id string

	db := Fn_access_db()

	query := fmt.Sprintf("SELECT id from users where id = '%s'", id)

	err := db.QueryRow(query).Scan(&ret_id)

	return err != nil
}

// 요청 아이디 및 비밀번호와 일치하는 유저 확인 후 존재 시 유저 정보 리턴. 로그인에 사용
func Fn_select_user_by_ID_and_PW(id string, pw string) (entity.User, error) {

	var user entity.User

	db := Fn_access_db()

	query := fmt.Sprintf("SELECT id from users where id = '%s' and hashed_pw = '%s'", id, pw)

	err := db.QueryRow(query).Scan(&user)

	if err != nil {
		return entity.User{}, err
	}

	return user, nil
}

// Insert

// 유저 정보 데이터베이스 내 users 테이블에 삽입. 회원 가입에 사용
func Fn_insert_user(user entity.User) error {

	db := Fn_access_db()

	query := fmt.Sprintf("INSERT INTO users VALUES('%s', '%s', '%s', '%s', %d)",
		user.Id, user.Nickname, user.Hashed_pw, user.Email, user.Balance)

	_, err := db.Query(query)

	return err
}
