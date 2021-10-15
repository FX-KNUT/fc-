package main

import (
	"./api"
)

func main() {
	fn_main_init()
}

func fn_main_init() {
	// go db.Init()
	api.Init()
}