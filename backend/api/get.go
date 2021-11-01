package api

import (
	"../controller"
	"github.com/gin-gonic/gin"
)

// main server
func fn_REST_get__root(c *gin.Context) {
	c.JSON(200, gin.H{
		"message": "Main Server Is Responding.",
	})
}

func fn_REST_get__test(c *gin.Context) {
	c.JSON(200, gin.H{
		"message": "hello, there ?",
	})
}

func fn_REST_get__test__query_string(c *gin.Context) {
	name := c.Query("name")
	age := c.Query("age")
	c.JSON(200, gin.H{
		"name": name,
		"age": age,
	})
}

func fn_REST_get__test__multiple_parameters(c *gin.Context) {
	name := c.Param("name")
	age := c.Param("age")
	c.JSON(200, gin.H{
		"name": name,
		"age": age,
	})
}

func fn_REST_sign_in(c *gin.Context) {
	id := c.Param("id")
	hashed_pw := c.Param("hashed_pw")

	if len(id) < 6 || len(id) > 15 {
		c.JSON(400, gin.H{
			"message": "id is invalid",
		})
		return
	}

	if len(hashed_pw) != 36 {
		c.JSON(400, gin.H{
			"message": "hashed_pw is invalid",
		})
		return
	}

	user, err := controller.Fn_sign_in(id, hashed_pw)
	if err != nil {
		c.JSON(200, gin.H{
			"message": user,
		})
	}
}

// core
func Get(c chan<- bool, r *gin.Engine) {
	go r.GET("/", fn_REST_get__root)
	go r.GET("/test", fn_REST_get__test)
	go r.GET("/test/query_string", fn_REST_get__test__query_string)
	go r.GET("/test/multiple_params/:name/:age", fn_REST_get__test__multiple_parameters)
	go r.GET("/login/:id/:hashed_pw", fn_REST_sign_in)
	c <- true
}