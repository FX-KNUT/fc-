package logic_server

import (
	"time"
)

const INTERVAL_GENERATE_BLOCK time.Duration = (time.Minute * 10)

const ERR_GETTING_LATEST_BLOCK string = "Error occured while getting the lastest index of Block"

// func generate_block() {

// 	index, err := service.GetLatestIndex()

// 	if err != nil {
// 		log.Fatalln(ERR_GETTING_LATEST_BLOCK)
// 	}

// 	// var block entity_block.Block = {
		
// 	// }
// }

func Block_generator(c chan<- bool) {
	interval := INTERVAL_GENERATE_BLOCK
	ticker := time.NewTicker(interval)
	clear := make(chan bool)

	go func() {
		for {
			select {
				case <-ticker.C:
					// generate_block()
					
				case <-clear:
					ticker.Stop()
					return
			}
		}
	}()
	
	c <- true
}