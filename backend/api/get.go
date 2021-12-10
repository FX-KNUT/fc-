package api

import (
	"fmt"

	ctrl_user "github.com/FX-KNUT/fc-/backend/controller/user"
	"github.com/FX-KNUT/fc-/backend/service"
	"github.com/gin-gonic/gin"
)

/* ************************************* */
// service and controller

// user
var (
	GET_user_service service.User_service = service.New__User()
	GET_user_controller ctrl_user.User_controller = ctrl_user.New__User(GET_user_service)
)

// block
var (
	GET_block_service service.Block_service
)

/* ************************************* */

func fn_REST_sign_in(c *gin.Context) {

	id := c.Query("id")
	pw := c.Query("pw")

	err := GET_user_controller.SignIn(c, id, pw)

	if err != nil {
		fmt.Println(err.Error())
	}
}

func fn_REST_check_id(c *gin.Context) {

	id := c.Query("id")
	
	err := GET_user_controller.CheckDuplicatedId(c, id)

	if err != nil {
		fmt.Println(err.Error())
	}
}

func fn_REST_get_ranking(c *gin.Context) {
	err := GET_user_controller.GetUserRanking(c)
	if err != nil {
		fmt.Println(err.Error())
	}
}

// core
func Get(c chan<- bool, r *gin.Engine) {
	go r.GET("/signin", fn_REST_sign_in)
	go r.GET("/checkid", fn_REST_check_id)
	go r.GET("/ranking", fn_REST_get_ranking)
	c <- true
}
