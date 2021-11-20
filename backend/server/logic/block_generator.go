package logic_server

import (
	service "../../service/block"
	entity_block "../../entity/block.go"
)

const INTERVAL_GENERATE_BLOCK int = time.Minute * 10

var ERR_GETTING_LATEST_BLOCK error = "Error occured while getting the lastest index of Block"

func generate_block() {

	index, err := service.GetLatestIndex()

	if err != nil {
		log.Fatalln(ERR_GETTING_LATEST_BLOCK)
	}

	// var block entity_block.Block = {
		
	// }
}

func Block_generator(c chan<- bool) {
	interval := INTERVAL_GENERATE_BLOCK
	ticker := time.NewTicker(interval)
	clear := make(chan bool)

	go func() {
		for {
			select {
				case <-ticker.C:
					generate_block()
					
				case <-clear:
					ticker.Stop()
					return
			}
		}
	}
	
	c <- true
}