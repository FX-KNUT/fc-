package logic_server

import (
	"fmt"
	"time"
)

var CURRENT_SERVER_BLOCK_INDEX = 0
const INTERVAL_INCREMENT_BLOCK_INDEX time.Duration = (time.Minute * 15)

func Increment_block_index() error {

	curr_index, err := block_service.GetLatestIndex()

	if err != nil {
		fmt.Println("error on block_index_incrementer.go - 1")
		return err
	}

	CURRENT_SERVER_BLOCK_INDEX = curr_index + 1

	return nil
}

func Index_incrementer(c chan<- bool) {
	interval := INTERVAL_INCREMENT_BLOCK_INDEX
	ticker := time.NewTicker(interval)
	clear := make(chan bool)

	go func() {
		for {
			select {
			case <-ticker.C:
				Increment_block_index()

			case <-clear:
				ticker.Stop()
				return
			}
		}
	}()

	c <- true
}