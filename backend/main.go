package main

import (
	"log"

	"github.com/FX-KNUT/fc-/backend/api"
	"github.com/FX-KNUT/fc-/backend/server"
	"github.com/joho/godotenv"
)

// CTRL    : Logic without DB
// SERVICE : Business logic
// ENTITY  : Models
// SQL     : SQL
// DATABASE: Pool, Connection or Access

func main() {
	fn_load_env_file()
	fn_initialize_main()
}

func fn_load_env_file() {
	err := godotenv.Load("tmp.env")
	if err != nil {
		log.Fatal("Error loading .env file")
	}
}

func fn_initialize_main() {
	go server.Init() // not yet
	api.Init()
}

// will be used sometime..
// func fn_close_server() {
// 		os.Exit(1)
// }
