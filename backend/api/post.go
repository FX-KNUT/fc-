package api

import (
	"fmt"

	ctrl "../controller"
	"github.com/gin-gonic/gin"
)

func fn_REST_post__signup(c *gin.Context) {
	err := ctrl.Fn_sign_up(c)
	if err != nil {
		fmt.Println(err.Error())
	}
}

// core
func Post(c chan<- bool, r *gin.Engine) {
	go r.POST("/signup", fn_REST_post__signup)
	c <- true
}