package api

import (
	"log"

	"github.com/gin-gonic/gin"
)

var err_opening_api string = "Failed to open REST API"

func Init() {
	c_is_ready_GET := make(chan bool)
	c_is_ready_POST := make(chan bool)

	r := gin.Default()

	go Get(c_is_ready_GET, r)
	go Post(c_is_ready_POST, r)

	is_ready_GET := <-c_is_ready_GET
	is_ready_POST := <-c_is_ready_POST

	if is_ready_GET && is_ready_POST {
		r.Run()
	} else {
		log.Fatalln(err_opening_api)
	}
}