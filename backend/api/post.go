package api

import (
	"fmt"

	ctrl_user "github.com/FX-KNUT/fc-/backend/controller/user"
	
	"github.com/gin-gonic/gin"
)

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

// core
func Post(c chan<- bool, r *gin.Engine) {
	go r.POST("/signup", fn_REST_post__signup)
	go r.POST("/change_profile_picture", fn_REST_post__profile_picture)
	c <- true
}
