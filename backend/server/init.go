package server

import (
	"log"

	logic_server "github.com/FX-KNUT/fc-/backend/server/logic"
)

var err_executing_block_generator string = "Failed to execute block generator"

func Init() {
	c_is_block_generator_ok := make(chan bool)
	
	go logic_server.Block_generator(c_is_block_generator_ok)

	is_block_generator_ok := <- c_is_block_generator_ok

	if !is_block_generator_ok {
		log.Fatalln(err_executing_block_generator)
	}
}