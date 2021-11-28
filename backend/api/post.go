package api

import (
	"fmt"

	ctrl_message "github.com/FX-KNUT/fc-/backend/controller/message"
	ctrl_user "github.com/FX-KNUT/fc-/backend/controller/user"
	"github.com/FX-KNUT/fc-/backend/service"

	"github.com/gin-gonic/gin"
)

// core
func Post(c chan<- bool, r *gin.Engine) {
	go r.POST("/signup", fn_REST_post__signup)
	go r.POST("/change_profile_picture", fn_REST_post__profile_picture)

	post := r.Group(("/post"))
	{
		post.POST("/:target/create", fn_REST_post__create_post)
		// post.POST("/:target/get")
		// post.POST("/:target/update")
		// post.POST("/:target/delete")
	}

	c <- true
}



// DML: UPDATE
func fn_REST_post__update_post(c *gin.Context) {

}

// DML: DELETE
func fn_REST_post__delete_post(c *gin.Context) {

}

// DML: SELECT
func fn_REST_post__get_posts(c *gin.Context) {

}



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

// message
var (
	POST_message_controller ctrl_message.Interface_message_controller
	POST_post_service service.Interface_post_service
)

/* ************************************* */

// DML: INSERT
func fn_REST_post__create_post(c *gin.Context) {
	err := POST_message_controller.CreatePost(c)
	if err != nil {
		fmt.Println(err.Error())
	}
}

func fn_REST_post__signup(c *gin.Context) {
	err := POST_user_controller.SignUp(c)
	
	if err != nil {
		fmt.Println(err.Error())
	}
}

func fn_REST_post__profile_picture(c *gin.Context) {
	err := ctrl_user.Fn_change_profile_picture(c)
	if err != nil {
		fmt.Println(err.Error())
	}
}

// func fn_REST_post__create_post(c *gin.Context) {
// 	err := service.CreatePost(c)
// 	if err != nil {
// 		log.Panic(err)
// 	}
// }
