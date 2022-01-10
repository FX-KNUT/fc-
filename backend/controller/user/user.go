package ctrl_user

import (
	"errors"
	"fmt"
	"net/http"

	logic_hashing "github.com/FX-KNUT/fc-/backend/controller/logic"
	ctrl_wallet "github.com/FX-KNUT/fc-/backend/controller/wallet"
	"github.com/FX-KNUT/fc-/backend/entity"
	"github.com/FX-KNUT/fc-/backend/service"
	"github.com/gin-gonic/gin"
)

var err_wrong__ID error = errors.New("wrong id comes from client")
var err_wrong__pw error = errors.New("wrong pw comes from client")
var err_wrong__user error = errors.New("wrong user info comes from client")
var err_wrong__hashing error = errors.New("error comes within server")
var err_wrong__nickname error = errors.New("wrong nickname comes from client while executing Fn_sign_up")
var err_wrong__email error = errors.New("wrong email comes from client")
var err_ID__duplicated error = errors.New("duplicated id at Fn_check_ID on sign_up")
var err_ID__undefined error = errors.New("id is undefined")
// var err_unescaping_pw error = errors.New("error while unescaping pw query")
var err_binding_user_info error = errors.New("error while binding id and password on server > ctrller > SignIn(API)")
// var err_parsing_query_string error = errors.New("error while parsing the whole query string")
// var err_parsing_query error = errors.New("error while parsing the query into an array")

// Structs
type User entity.User
type Users entity.Users
type S_user_as_login_info entity.User_as_login_info

type controller struct {
	service service.User_service
}

type User_controller interface {
	SignIn(*gin.Context) error
	SignUp(*gin.Context) error
	CheckDuplicatedId(*gin.Context, string) error
	GetUserRanking(*gin.Context) error
}

func New__User(service service.User_service) User_controller {
	return &controller{
		service: service,
	}
}

func (c *controller) SignIn(ctx *gin.Context) error {

	// var f Form_File

	// var user_info struct {
	// 	Id  string `json:"id" binding:"required"`
	// 	Pw  string `json:"pw" binding:"required"`
	// }

	var user_info entity.User_as_request_sign_in

	ctx.ShouldBindJSON(&user_info)

	id := user_info.User_id
	pw := user_info.User_hashed_pw
	// chk1 := user_info.User_chk_saved_id
	// chk2 := user_info.User_chk_keep_session_login_state

	if len(id) < 4 || len(id) > 12 {
		ctx.String(http.StatusBadRequest, "정보가 잘못 입력되었습니다.")
		return err_wrong__ID
	}

	fmt.Println(user_info)

	fmt.Println(pw)
	
	if len(pw) != 60 {
		ctx.String(http.StatusBadRequest, "클라이언트 단에서 해싱이 잘못 된 것 같습니다. 비밀번호가 60자가 아닙니다.")
		return err_wrong__pw
	}

	pw, err := logic_hashing.Fn_hashing(pw)

	if err != nil {
		ctx.String(http.StatusBadGateway, "서버 단에서 비밀번호를 해싱하는 중에 문제가 생겼습니다")
		return err_wrong__hashing
	}

	user, err := c.service.SignIn(id, pw)

	if err != nil {
		ctx.String(http.StatusBadRequest, "일치하는 회원 정보가 없습니다.")
		return err_wrong__user
	}

	ctx.JSON(http.StatusOK, gin.H{
		"user": user,
	})

	// path :=  fmt.Sprintf("/asset/user/profile_picture/%s", f.id)

	// img,_ := os.Open(path)
	// img_data, _ := ioutil.ReadAll(img)

	// ctx.Data(http.StatusOK, "image/png", img_data)

	return nil
}

func validateSignUp(ctx *gin.Context, user entity.User) error {

	if len(user.User_id) < 4 || len(user.User_id) > 18 {
		ctx.String(http.StatusBadRequest, "유효하지 않은 정보가 있습니다.")
		return err_wrong__ID
	}

	if len(user.User_hashed_pw) != 60 {
		ctx.String(http.StatusBadGateway, "유효하지 않은 정보가 있습니다.")
		fmt.Println(errors.New("error occured at Fn_sign_up on sign_up"))
		return err_wrong__pw
	}

	if len(user.User_nickname) < 2 || len(user.User_nickname) > 12 {
		ctx.String(http.StatusBadRequest, "유효하지 않은 정보가 있습니다.")
		return err_wrong__nickname
	}

	if len(user.User_email) > 48 {
		ctx.String(http.StatusBadRequest, "유효하지 않은 정보가 있습니다.")
		return err_wrong__email
	}

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

	err = validateSignUp(ctx, user)

	if err != nil {
		return err
	}

	fmt.Println("signup, password got " + user.User_hashed_pw)

	user.User_hashed_pw, err = logic_hashing.Fn_hashing(user.User_hashed_pw)

	if err != nil {
		ctx.String(http.StatusBadGateway, "Error occurred while hashing on server, sorry.")
		return err
	}

	err = c.service.SignUp(user, USER_DEFAULT_BALANCE)

	if err != nil {
		ctx.String(http.StatusBadGateway, "Error occured while inserting user information on server, sorry.")
		return err
	}

	err = ctrl_wallet.New__Wallet(service.New__Wallet()).CreateWallet(ctx, user, USER_DEFAULT_BALANCE)

	if err != nil {
		ctx.String(http.StatusBadGateway, "Error occured while creating your wallet.")
		return err
	}

	err = service.New__Bookmark().InitBookmark(user.User_id)

	if err != nil {
		ctx.String(http.StatusBadGateway, "Error occured while initialize your bookmark information.")
		return err
	}

	ctx.String(http.StatusOK, "ok")

	return nil
}

func (c *controller) CheckDuplicatedId(ctx *gin.Context, id string) error {

	// simple filter for validation

	if len(id) == 0 {
		ctx.String(http.StatusBadRequest, "잘못된 요청입니다.")
		return err_ID__undefined
	}

	err := c.service.CheckDuplicatedId(id)

	if err == nil {
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

func (c *controller) GetUserRanking(ctx *gin.Context) error {
	es, err := c.service.GetRanking100()
	if err != nil {
		ctx.String(http.StatusBadRequest, "Content is not written.")
	}
	ctx.JSON(http.StatusOK, es)
	return nil
}