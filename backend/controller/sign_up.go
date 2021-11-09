package controller

import (
	"errors"
	"net/http"

	"github.com/gin-gonic/gin"
)

type Obj_REST_POST_user struct {
	Id string `json:"id"`
	Pw string `json:"pw"`
	Nickname string `json:"nickname"`
	Email string `json:"email"`
}

func Fn_sign_up(c *gin.Context) error {
	var user Obj_REST_POST_user

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

	if len(user.Id) < 4 || len(user.Id) > 12 {
		c.JSON(http.StatusBadRequest, gin.H{
			"message": "유효하지 않은 정보가 있습니다.",
		})
		return err_wrong__ID
	}

	// if len(hashed_pw) != 36 {
	if len(user.Pw) < 8 || len(user.Pw) > 20 {
		c.JSON(http.StatusBadRequest, gin.H{
			"message": "유효하지 않은 정보가 있습니다.",
		})
		return err_wrong__pw
	}

	if len(user.Nickname) < 2 || len(user.Nickname) > 12 {
		c.JSON(http.StatusBadRequest, gin.H{
			"message": "유효하지 않은 정보가 있습니다.",
		})
		return err_wrong__nickname
	}

	if len(user.Email) > 48 {
		c.JSON(http.StatusBadRequest, gin.H{
			"message": "유효하지 않은 정보가 있습니다.",
		})
		return err_wrong__email
	}
	
	c.JSON(http.StatusOK, gin.H{
		"message": "ok",
		"user": user,
	})

	return nil
}

func Fn_check_ID(c *gin.Context) error {

	var err_duplicated_ID error = errors.New("duplicated id")

	id := c.Query("id")

	if len(id) < 4 || len(id) > 12 {
		c.JSON(http.StatusBadRequest, gin.H{
			"message": "정보가 잘못 입력되었습니다.",
		})
		return err_duplicated_ID
	}

	c.JSON(http.StatusOK, gin.H{
		"message": "ok",
		"id": id,
	})

	return nil
}

// func Fn_check_ID(id string) (string, error) {
// 	database := db.Fn_access_db()
// 	query := fmt.Sprintf("SELECT ID FROM USER WHERE ID = %s;", id)
// 	get_id, err := database.Query(query)

// 	fmt.Println(get_id)

// 	return "TESTING", err
// }