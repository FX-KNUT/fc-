package main

import (
	"fmt"

	"./api"
)

// testing
func main() {
	c_test := make(chan bool)
	go test(c_test)
	is_result_test := <- c_test
	if is_result_test {
		fmt.Println("Good to go!")
	}
	api.Get()
	api.Post()
}

func test(_c_test chan bool) {
	_c_test <- true
}