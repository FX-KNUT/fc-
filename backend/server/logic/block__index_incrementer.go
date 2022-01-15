package logic_server

import (
	"fmt"
	"os"
	"time"

	server_value "github.com/FX-KNUT/fc-/backend/server/on_memory_storage"
	"github.com/FX-KNUT/fc-/backend/service"
)
const INTERVAL_INCREMENT_BLOCK_INDEX time.Duration = (time.Minute * 15)

func init_block_index() error {

	curr_index, err := service.New__Block().GetLatestIndex()

	if err != nil {
		return err
	}

	server_value.CURRENT_SERVER_BLOCK_INDEX = curr_index

	return nil
}

func Increment_block_index() error {

	server_value.CURRENT_SERVER_BLOCK_INDEX++

	return nil
}

func Index_incrementer(c chan<- bool)  {
	interval := INTERVAL_INCREMENT_BLOCK_INDEX
	ticker := time.NewTicker(interval)
	clear := make(chan bool)
	err := init_block_index()

	if err != nil {
		fmt.Println("Error occured while incrementing block_index indicator value on Index_incrementer of block__index_incrementer.go on /server/logic")
		os.Exit(1)
	}

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