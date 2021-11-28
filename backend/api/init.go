package api

import (
	"log"
	"os"

	"github.com/gin-gonic/gin"
)

// /* Declaration
// CONSTANTS
// var CONST_INT_SERVER_PORT int = 8096

// VARIABLES
var err_opening_api string = "Failed to open REST API"
// var CONST_STR_SERVER_PORT string = fmt.Sprintf(":%d", CONST_INT_SERVER_PORT)

// /* Logic
func Init() {
	c_is_ready_GET := make(chan bool)
	c_is_ready_POST := make(chan bool)

	r := gin.Default() // router

	go Get(c_is_ready_GET, r)
	go Post(c_is_ready_POST, r)

	is_ready_GET := <-c_is_ready_GET
	is_ready_POST := <-c_is_ready_POST

	if is_ready_GET && is_ready_POST {
		// r.Run(CONST_STR_SERVER_PORT)
		r.Run(os.Getenv(":PORT"))
	} else {
		log.Fatalln(err_opening_api)
	}
}
