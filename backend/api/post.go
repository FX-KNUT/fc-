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
	POST_user_service service.User_service = service.New__User()
	POST_user_controller ctrl_user.User_controller = ctrl_user.New__User(POST_user_service)
)

// block
var (
	POST_block_service service.Block_service
)

/* ************************************* */

func fn_REST_post__signup(c *gin.Context) {
	err := POST_user_controller.SignUp(c)
	
	if err != nil {
		fmt.Println(err.Error())
	}
}

// func fn_REST_post__profile_picture(c *gin.Context) {
// 	err := ctrl_user.Fn_change_profile_picture(c)
// 	if err != nil {
// 		fmt.Println(err.Error())
// 	}
// }

// core
func Post(c chan<- bool, r *gin.Engine) {
	go r.POST("/signup", fn_REST_post__signup)
	// go r.POST("/change_profile_picture", fn_REST_post__profile_picture)
	c <- true
}
