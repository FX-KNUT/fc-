package controller_user

import (
	"errors"
	"fmt"
	"net/http"

	logic "github.com/FX-KNUT/fc-/backend/controller/logic"
	db "github.com/FX-KNUT/fc-/backend/database"
	"github.com/gin-gonic/gin"
)

func Fn_sign_in(c *gin.Context) error {

	var err_wrong__ID error = errors.New("wrong id comes from client while executing Fn_sign_up")
	var err_wrong__pw error = errors.New("wrong id comes from client while executing Fn_sign_up")
	var err_wrong__user error = errors.New("wrong user info comes from client while executing Fn_sign_up")
	var err_wrong__hashing error = errors.New("error comes within server while hashing pw on Fn_sign_up")

	id := c.Query("id")
	pw := c.Query("pw")

	if len(id) < 4 || len(id) > 12 {
		c.String(http.StatusBadRequest, "정보가 잘못 입력되었습니다.")
		return err_wrong__ID
	}

	if len(pw) != 36 {
		c.String(http.StatusBadRequest, "클라이언트 단에서 해싱이 잘못 된 것 같습니다. 비밀번호가 36자가 아닙니다.")
		return err_wrong__pw
	}

	pw, err := logic.Fn_hashing(&pw)

	if err != nil {
		c.String(http.StatusBadGateway, "서버 단에서 비밀번호를 해싱하는 중에 문제가 생겼습니다")
		return err_wrong__hashing
	}

	fmt.Println(pw)

	user, err := db.Fn_select_user_by_ID_and_PW(id, pw)

	if err != nil {
		c.String(http.StatusBadRequest, "일치하는 회원 정보가 없습니다.")
		return err_wrong__user
	}

	c.JSON(http.StatusOK, gin.H{
		"user": user,
	})

	return nil
}
