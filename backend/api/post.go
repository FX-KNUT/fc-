package api

import (
	"fmt"
	"log"

	ctrl_user "github.com/FX-KNUT/fc-/backend/controller/user"
	"github.com/FX-KNUT/fc-/backend/service"

	"github.com/gin-gonic/gin"
)

// core
func Post(c chan<- bool, r *gin.Engine) {
	go r.POST("/signup", fn_REST_post__signup)
	go r.POST("/change_profile_picture", fn_REST_post__profile_picture)

	board := r.Group("/board")
	{	
	}

	post := r.Group(("/post"))
	{
		post.POST("/create")
		post.POST("/get")
		post.POST("/update")
		post.POST("/delete")
	}

	c <- true
}

func fn_REST_post__signup(c *gin.Context) {
	err := ctrl_user.Fn_sign_up(c)
	if err != nil {
		fmt.Println(err.Error())
	}
}

func fn_REST_post__profile_picture(c *gin.Context) {
	err := ctrl_user.Fn_change_profile_picture(c)
	if err != nil {
		fmt.Print(err.Error())
	}
}

func fn_REST_post__create_post(c *gin.Context) {
	err := service.CreatePost(c)
	if err != nil {
		log.Panic(err)
	}
}