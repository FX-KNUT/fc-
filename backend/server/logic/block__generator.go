package logic_server

import (
	"fmt"
	"log"
	"time"

	"github.com/FX-KNUT/fc-/backend/entity"
	"github.com/FX-KNUT/fc-/backend/service"
)

const INTERVAL_GENERATE_BLOCK time.Duration = (time.Minute * 10)

const ERR_GETTING_BLOCK__LATEST_BLOCK string = "Error occured while getting the latest blcok"
const ERR_SAVING_BLOCK string = "Error occured while saving a block"

const LOGGER_BLOCK_BEING_GENERATED string = "block is being generated!"

var block_service service.Block_service = service.New__Block()

// func get_tx_id() (string, error) {
// }

// not to be used yet since there's no tx_id yet in our logic flow
func initialize_block() (entity.Block, error) {

	var (
		new_block entity.Block
		prev_block entity.Block
	)

	prev_block, err := block_service.GetLatestBlock()
	
	if err != nil {
		return entity.Block{}, err
	}

	block__index := prev_block.Block_index + 1

	block__prev_hash := prev_block.Block_hash

	block__timestamp := time.Now().String()

	block__hash := Block_get_hash(block__index, block__prev_hash, block__timestamp, "test")

	// block__tx_id := get_tx_id()

	// -1 means undefined yet but gonna be updated as soon as block is on stage...
	new_block = entity.Block{
		/* int */ 			Block_index: block__index,
		/* varchar(256) */ 	Block_hash: block__hash,
		/* varchar(256) */	Block_previous_hash: block__prev_hash,
		/* int */			Block_tx_ref_ID: 19951025 /* block__tx_id */,
		/* varchar(18) */	Block_owner: "", // gonna be inserted as the block get mined
		/* int unsigned	*/	Block_nonce: -1,
		/* varchar(16) */	Block_created_at: block__timestamp,
		/* int */			Block_difficulty: -1,
		/* int */ 			Block_reward: -1,
	}

	return new_block, nil
}

func generate_block() error {

	fmt.Println(LOGGER_BLOCK_BEING_GENERATED)

	block, err := initialize_block()

	if err != nil {
		log.Fatalln(ERR_GETTING_BLOCK__LATEST_BLOCK)
		return err
	}

	err = block_service.SaveBlock(block)

	if err != nil {
		log.Fatalln(ERR_SAVING_BLOCK)
		return err
	}

	fmt.Printf("Block is successfully saved.\b Index\t\t%d\nHash\t\t%s\nCreated at\t%s\n",
				block.Block_index, block.Block_hash, block.Block_created_at)

	return nil
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
	}()
	
	c <- true
}