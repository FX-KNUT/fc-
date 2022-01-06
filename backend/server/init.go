package server

import (
	"fmt"
	"log"

	logic_server "github.com/FX-KNUT/fc-/backend/server/logic"
)

var err_executing_block_generator string = "Failed to execute block generator"
var err_recording_price_history string = "Failed to record price history"

func Init() {
	fmt.Println("Server is initializing")
	c_is_block_generator_ok := make(chan bool)
	// c_is_record_price_history := make(chan bool)
	
	go logic_server.Block_generator(c_is_block_generator_ok)
	// go logic_server.Price_recorder(c_is_record_price_history)

	is_block_generator_ok := <- c_is_block_generator_ok
	// is_record_price_history := <- c_is_record_price_history

	if !is_block_generator_ok {
		log.Fatalln(err_executing_block_generator)
	}
	
	// if !is_record_price_history {
	// 	log.Fatalln(err_recording_price_history)
	// }
}