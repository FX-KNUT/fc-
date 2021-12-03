package ctrl_user

import (
	"errors"
	"fmt"
	"net/http"

	logic_hashing "github.com/FX-KNUT/fc-/backend/controller/logic"
	"github.com/FX-KNUT/fc-/backend/entity"
	"github.com/FX-KNUT/fc-/backend/service"
	"github.com/gin-gonic/gin"
)

var err_wrong__ID error = errors.New("wrong id comes from client while executing Fn_sign_up")
var err_wrong__pw error = errors.New("wrong id comes from client while executing Fn_sign_up")
var err_wrong__user error = errors.New("wrong user info comes from client while executing Fn_sign_up")
var err_wrong__hashing error = errors.New("error comes within server while hashing pw on Fn_sign_up")
var err_wrong__nickname error = errors.New("wrong nickname comes from client while executing Fn_sign_up")
var err_wrong__email error = errors.New("wrong email comes from client while executing Fn_sign_up")
var err_ID__invalid_size error = errors.New("size of id is invalid at Fn_check_ID on sign_up")
var err_ID__duplicated error = errors.New("duplicated id at Fn_check_ID on sign_up")
var err_ID__undefined error = errors.New("id is undefined")

type User entity.User
type Users entity.Users

type controller struct {
	service service.User_service
}

type User_controller interface {
	SignIn(*gin.Context, string, string) error
	SignUp(*gin.Context) error
	CheckDuplicatedId(*gin.Context, string) error
}

func New__User(service service.User_service) User_controller {
	return &controller{
		service: service,
	}
}

func (c *controller) SignIn(ctx *gin.Context, id, pw string) error {

	if len(id) < 4 || len(id) > 12 {
		ctx.String(http.StatusBadRequest, "정보가 잘못 입력되었습니다.")
		return err_wrong__ID
	}

	if len(pw) != 36 {
		ctx.String(http.StatusBadRequest, "클라이언트 단에서 해싱이 잘못 된 것 같습니다. 비밀번호가 36자가 아닙니다.")
		return err_wrong__pw
	}

	pw, err := logic_hashing.Fn_hashing(&pw)

	if err != nil {
		ctx.String(http.StatusBadGateway, "서버 단에서 비밀번호를 해싱하는 중에 문제가 생겼습니다")
		return err_wrong__hashing
	}

	////// !!!!!!!!! SERVICE PART !!!!!!!!!!! //////////
	user, err := c.service.SignIn(id, pw)
	////// !!!!!!!!! SERVICE PART !!!!!!!!!!! //////////

	if err != nil {
		ctx.String(http.StatusBadRequest, "일치하는 회원 정보가 없습니다.")
		return err_wrong__user
	}

	ctx.JSON(http.StatusOK, gin.H{
		"user": user,
	})

	return nil
}

func (c *controller) SignUp(ctx *gin.Context) error {
	var user entity.User

	const USER_DEFAULT_BALANCE int = 10000

	err := ctx.ShouldBindJSON(&user)

	if err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{
			"message": "유효하지 않은 정보가 있습니다.",
			"error": err.Error(),
		})
		return err
	}

	if len(user.Id) < 4 || len(user.Id) > 18 {
		ctx.String(http.StatusBadRequest, "유효하지 않은 정보가 있습니다.")
		return err_wrong__ID
	}

	if len(user.Hashed_pw) != 36 {
		ctx.String(http.StatusBadGateway, "유효하지 않은 정보가 있습니다.")
		fmt.Println(errors.New("error occured at Fn_sign_up on sign_up"))
		return err_wrong__pw
	}

	if len(user.Nickname) < 2 || len(user.Nickname) > 12 {
		ctx.String(http.StatusBadRequest, "유효하지 않은 정보가 있습니다.")
		return err_wrong__nickname
	}

	if len(user.Email) > 48 {
		ctx.String(http.StatusBadRequest, "유효하지 않은 정보가 있습니다.")
		return err_wrong__email
	}

	user.Hashed_pw, err = logic_hashing.Fn_hashing(&user.Hashed_pw)

	if err != nil {
		ctx.String(http.StatusBadGateway, "Error occurred while hashing on server, sorry.")
		return err
	}

	////// !!!!!!!!! SERVICE PART !!!!!!!!!!! //////////
	err = c.service.SignUp(user, USER_DEFAULT_BALANCE)
	////// !!!!!!!!! SERVICE PART !!!!!!!!!!! //////////

	if err != nil {
		ctx.String(http.StatusBadGateway, "Error occured while inserting user information on server, sorry.")
		return err
	}

	ctx.String(http.StatusOK, "ok")

	return nil
}

func (c *controller) CheckDuplicatedId(ctx *gin.Context, id string) error {

	// simple filter for validation

	fmt.Println("id is ", id, ", len is ", len(id))

	if len(id) == 0 {
		ctx.String(http.StatusBadRequest, "잘못된 요청입니다.")
		return err_ID__undefined
	}

	////// !!!!!!!!! SERVICE PART !!!!!!!!!!! //////////
	err := c.service.CheckDuplicatedId(id)
	////// !!!!!!!!! SERVICE PART !!!!!!!!!!! //////////

	if err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{
			"message": "중복된 ID입니다",
			"id":      id,
		})
		return err_ID__duplicated
	}

	ctx.JSON(http.StatusOK, gin.H{
		"message": "중복된 ID가 없습니다",
		"id":      id,
	})

	return nil
}

// func (c *controller) ChangeProfilePicture() error {

// }