package controller

import (
	"errors"
	"net/http"

	"github.com/gin-gonic/gin"
)

func Fn_sign_in(c *gin.Context) error {
	
	var err_wrong__ID error = errors.New("wrong id comes from client while executing Fn_sign_up")
	var err_wrong__PW error = errors.New("wrong id comes from client while executing Fn_sign_up")

	id := c.Query("id")
	pw := c.Query("pw")

	if len(id) < 4 || len(id) > 12 {
		c.JSON(http.StatusBadRequest, gin.H{
			"message": "정보가 잘못 입력되었습니다.",
		})
		return err_wrong__ID
	}

	// if len(hashed_pw) != 36 {
	if len(pw) < 8 || len(pw) > 20 {
		c.JSON(http.StatusBadRequest, gin.H{
			"message": "정보가 잘못 입력되었습니다.",
		})
		return err_wrong__PW
	}
	c.JSON(http.StatusOK, gin.H{
		"id": id,
		"nickname": "testtest",
		"email": "testtest@ut.ac.kr",
		"balance": 200,
		"당신의 아이피는 해킹되었다": c.ClientIP(),
	})

	return nil
}

// func Fn_sign_in(id string, hashed_pw string) (entity.User, error) {
// 	database := db.Fn_access_db()
// 	// query := fmt.Sprintf("SELECT ID, NAME, NICKNAME, HASHED_PW, EMAIL FROM USER WHERE (ID = %s) AND (HASHED_PW = %s);", id, hashed_pw)

// 	// query := "SELECT id FROM users"

// 	// var user_info string

// 	// err := db.QueryRow(query).Scan(&user_info)

// 	// if err != nil {
// 	// 	panic(err.Error())
// 	// }

// 	// fmt.Println(user_info)

// 	query := "SELECT id FROM users"

// 	var user string

// 	err := database.QueryRow(query).Scan(&user)
// 	if err != nil {
// 		panic(err.Error())
// 	}

// 	fmt.Println(user)

// 	return entity.User{}, err
// }