package main

import (
	"./api"
	db "./database"
)

func main() {
	fn_main_init()
}

func fn_main_init() {
	go db.Init()
	api.Init()
}