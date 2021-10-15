package api

import (
	"io/ioutil"
	"log"

	"github.com/gin-gonic/gin"
)

// with empty payload
func fn_REST_post__test_one(c *gin.Context) {
	c.JSON(200, gin.H{
		"message": "Posted Successfully",
	})
}

// with payload, more practical
func fn_REST_post__test_two(c *gin.Context) {
	body := c.Request.Body
	payload, err := ioutil.ReadAll(body)
	if err != nil {
		log.Fatalf("Error on fn_REST_post__test_two with the error of - %s", err)
	} else {
		c.JSON(200, gin.H{
			"payload": string(payload),
		})
	}
}

// core
func Post(c chan<- bool, r *gin.Engine) {
	go r.POST("/", fn_REST_post__test_one)
	go r.POST("/test/multi_params/:name/:age", fn_REST_post__test_two)
	c <- true
}