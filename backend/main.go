package main

import (
	"log"

	"github.com/FX-KNUT/fc-/backend/api"
	db "github.com/FX-KNUT/fc-/backend/database"
	server "github.com/FX-KNUT/fc-/backend/server"
	"github.com/joho/godotenv"
)

func main() {
	fn_load_env_file()
	fn_main_init()
}

func fn_load_env_file() {
	err := godotenv.Load(".env.dev")
	if err != nil {
		log.Fatal("Error loading .env file")
	}
}

func fn_main_init() {
	go db.Init()
	go server.Init()
	api.Init()
}

// will be used sometime..
// func fn_close_server() {

// 	// close db

// 	close_db := make(chan bool)
// 	db.Fn_close_db(close_db)
// 	db_closed := <-close_db

// 	if !db_closed {
// 		fmt.Println("\n*****************************************************\n!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\n\n" +
// 			"DB is not closed successfully, but still the program will be shutdown after 10 seconds ..." +
// 			"\n\n!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\n*****************************************************")
// 		time.AfterFunc(time.Second * 10, func() {
// 			os.Exit(1)
// 		})
// 	}

// 	// close body

// 	if db_closed {
// 		os.Exit(1)
// 	}
// }
