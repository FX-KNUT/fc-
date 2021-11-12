package controller

import (
	"errors"
	"fmt"
	"net/http"

	db "../../database"
	entity "../../entity"
	logic "../logic"

	"github.com/gin-gonic/gin"
)

func Fn_sign_up(c *gin.Context) error {
	var user entity.User

	var err_wrong__ID error = errors.New("wrong id comes from client while executing Fn_sign_up")
	var err_wrong__pw error = errors.New("wrong pw comes from client while executing Fn_sign_up")
	var err_wrong__nickname error = errors.New("wrong nickname comes from client while executing Fn_sign_up")
	var err_wrong__email error = errors.New("wrong email comes from client while executing Fn_sign_up")
	
	err := c.ShouldBindJSON(&user)

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"message": "유효하지 않은 정보가 있습니다.",
			"error": err.Error(),
		})
		return err
	}

	if len(user.Id) < 4 || len(user.Id) > 18 {
		c.String(http.StatusBadRequest, "유효하지 않은 정보가 있습니다.")
		return err_wrong__ID
	}

	if len(user.Hashed_pw) != 36 {
		c.String(http.StatusBadGateway, "유효하지 않은 정보가 있습니다.")
		fmt.Println(errors.New("error occured at Fn_sign_up on sign_up"))
		return err_wrong__pw
	}

	if len(user.Nickname) < 2 || len(user.Nickname) > 12 {
		c.String(http.StatusBadRequest, "유효하지 않은 정보가 있습니다.")
		return err_wrong__nickname
	}

	if len(user.Email) > 48 {
		c.String(http.StatusBadRequest, "유효하지 않은 정보가 있습니다.")
		return err_wrong__email
	}

	user.Balance = 10000

	user.Hashed_pw, err = logic.Fn_hashing(user.Hashed_pw)

	if err != nil {
		c.String(http.StatusBadGateway, "Error occurred while hashing on server, sorry.")
		return err
	}

	err = db.Fn_insert_user(user)

	if err != nil {
		c.String(http.StatusBadGateway, "Error occured while inserting user information on server, sorry.",)
		return err
	}
	
	c.String(http.StatusOK, "ok")

	return nil
}

func Fn_check_ID(c *gin.Context) error {

	var err_ID__invalid_size error = errors.New("size of id is invalid at Fn_check_ID on sign_up")
	var err_ID__duplicated error = errors.New("duplicated id at Fn_check_ID on sign_up")

	id := c.Query("id")

	if len(id) < 4 || len(id) > 18 {
		c.String(http.StatusBadRequest, "정보가 잘못 입력되었습니다.")
		return err_ID__invalid_size
	}

	if !db.Fn_select_user_by_ID(id) {
		c.JSON(http.StatusBadRequest, gin.H{
			"message": "중복된 ID입니다",
			"id": id,
		})
		return err_ID__duplicated
	}

	c.JSON(http.StatusOK, gin.H{
		"message": "중복된 ID가 없습니다",
		"id": id,
	})
	return nil
}