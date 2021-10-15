package api

import "github.com/gin-gonic/gin"

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

// core
func Get(c chan<- bool, r *gin.Engine) {
	go r.GET("/", fn_REST_get__root)
	go r.GET("/test", fn_REST_get__test)
	go r.GET("/test/query_string", fn_REST_get__test__query_string)
	go r.GET("/test/multiple_params/:name/:age", fn_REST_get__test__multiple_parameters)
	c <- true
}