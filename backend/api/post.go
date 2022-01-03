package api

import (
	"fmt"

	ctrl_block "github.com/FX-KNUT/fc-/backend/controller/block"
	ctrl_message "github.com/FX-KNUT/fc-/backend/controller/message"
	ctrl_user "github.com/FX-KNUT/fc-/backend/controller/user"
	"github.com/FX-KNUT/fc-/backend/service"

	"github.com/gin-gonic/gin"
)

// Controller and Service
var (
	// -- User
	POST_user_service service.User_service = service.New__User()
	POST_user_controller ctrl_user.User_controller = ctrl_user.New__User(POST_user_service)

	// -- Block
	POST_block_service service.Block_service
	GET_block_controller ctrl_block.Block_controller = ctrl_block.New__Block(GET_block_service)

	// -- Message
	// -- -- Post
	// -- -- Comment
	// -- -- Report
	POST_message_controller ctrl_message.Interface_message_controller
)


// Core: Router
func Post(c chan<- bool, r *gin.Engine) {
	go r.POST("/signup", fn_REST_post__signup)
	go r.POST("/change_profile_picture", fn_REST_post__profile_picture)
	go r.POST("/contract_transaction", fn_REST_post__contract_transaction)

	post := r.Group("/post")
	{
		post.POST("/:message_target/create", fn_REST_post__create_post)
		post.POST("/:message_target/update", fn_REST_post__update_post)
		post.POST("/:message_target/delete", fn_REST_post__delete_post)
		post.POST("/:message_target/get", fn_REST_post__get_posts)
	}

	comment := r.Group("/comment")
	{
		comment.POST("/:message_target/create", fn_REST_post__create_comment)
		comment.POST("/:message_target/update", fn_REST_post__update_comment)
		comment.POST("/:message_target/delete", fn_REST_post__delete_comment)
		comment.POST("/:message_target/get", fn_REST_post__get_comments)
	}

	report := r.Group("/report")
	{
		report.POST("/:message_target/create", fn_REST_post__create_report)
		report.POST("/:message_target/get", fn_REST_post__get_reports)
	}

	mine := r.Group("/mine")
	{
		mine.GET("/mineInfo", fn_REST_get__block_to_mine)
		mine.PATCH("/", )
	}

	c <- true
}


// DML: INSERT
func fn_REST_post__create_post(c *gin.Context) {
	err := POST_message_controller.ControllerDMLPost(c, "C")
	if err != nil {
		fmt.Println(err.Error())
	}
}

func fn_REST_post__create_comment(c *gin.Context) {
	err := POST_message_controller.ControllerDMLPost(c, "C")
	if err != nil {
		fmt.Println(err.Error())
	}
}

func fn_REST_post__create_report(c *gin.Context) {
	err := POST_message_controller.ControllerDMLReport(c, "C")
	if err != nil {
		fmt.Println(err.Error())
	}
}

// DML: UPDATE
func fn_REST_post__update_post(c *gin.Context) {
	err := POST_message_controller.ControllerDMLPost(c, "U")
	if err != nil {
		fmt.Println(err.Error())
	}
}

func fn_REST_post__update_comment(c *gin.Context) {
	err := POST_message_controller.ControllerDMLComment(c, "U")
	if err != nil {
		fmt.Println(err.Error())
	}
}

func fn_REST_post__nonce(c *gin.Context) {

	nonce := c.Query("nonce")
	owner := c.Query("owner")
	index := c.Query("index")

	err := GET_block_controller.New__Block(service.Block_service).UpdateOwnerAndNonce(c, owner, nonce, index)

	if err != nil {
		fmt.Println(err.Error())
	}
}

// DML: DELETE
func fn_REST_post__delete_post(c *gin.Context) {
	err := POST_message_controller.ControllerDMLPost(c, "D")
	if err != nil {
		fmt.Println(err.Error())
	}
}

func fn_REST_post__delete_comment(c *gin.Context) {
	err := POST_message_controller.ControllerDMLComment(c, "D")
	if err != nil {
		fmt.Println(err.Error())
	}
}

// DML: SELECT
func fn_REST_post__get_posts(c *gin.Context) {
	err := POST_message_controller.ControllerDMLPost(c, "R")
	if err != nil {
		fmt.Println(err.Error())
	}
}

func fn_REST_post__get_comments(c *gin.Context) {
	err := POST_message_controller.ControllerDMLComment(c, "R")
	if err != nil {
		fmt.Println(err.Error())
	}
}

func fn_REST_post__get_reports(c *gin.Context) {
	err := POST_message_controller.ControllerDMLReport(c, "R")
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

func fn_REST_post__contract_transaction(c *gin.Context) {
	// err := ctrl_tx.Fn_ContractTx(c, from, to, amount)
	// if err != nil {
	// 	fmt.Println(err.Error())
	// }
}

func fn_REST_get__block_to_mine(c *gin.Context) {
	_, err := GET_block_controller.GetLatestUnminedBlock()
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
