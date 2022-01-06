package logic_server

import (
	"fmt"
	"log"
	"time"

	"github.com/FX-KNUT/fc-/backend/entity"
	"github.com/FX-KNUT/fc-/backend/server/logic/fx_framework"
	"github.com/FX-KNUT/fc-/backend/service"
)

const INTERVAL_GENERATE_BLOCK time.Duration = (time.Minute * 10)

const ERR_GETTING_BLOCK__LATEST_BLOCK string = "Error occured while getting the latest block"
const ERR_SAVING_BLOCK string = "Error occured while saving a block"

const LOGGER_BLOCK_BEING_GENERATED string = "block is being generated!"

var block_service service.Block_service = service.New__Block()

// not to be used yet since there's no tx_id yet in our logic flow
func initialize_block() (entity.Block, error) {

	var (
		new_block entity.Block
		prev_block entity.Block
	)

	prev_block, err := block_service.GetLatestBlock()
	
	if err != nil {
		fmt.Println("error here: 1")
		return entity.Block{}, err
	}

	block_index := prev_block.Block_index + 1

	block_prev_hash := prev_block.Block_hash

	block_timestamp := fx_framework.Timestamp()
	
	block_txs, err := block_service.GetTxsOfBlock(block_index)
	
	if err != nil {
		fmt.Println("error here: 2")
		return entity.Block{}, err
	}

	block_txs__marshaled, err := fx_framework.Stringify(block_txs)

	if err != nil {
		fmt.Println("error here: 3")
		return entity.Block{}, err
	}

	block_hash := Block_get_hash(block_index, block_prev_hash, block_timestamp, block_txs__marshaled)

	Block_difficulty, err := Block_get_difficulty(block_index)

	if err != nil {
		fmt.Println("error here: 4")
		return entity.Block{}, err
	}

	new_block = entity.Block{
		/* int */ 			Block_index: block_index,
		/* varchar(256) */ 	Block_hash: block_hash,
		/* varchar(256) */	Block_previous_hash: block_prev_hash,
		/* varchar(18) */	Block_owner: "", // gonna be inserted as the block get mined
		/* int unsigned	*/	Block_difficulty: Block_difficulty,
		/* varchar(36) */	Block_created_at: block_timestamp,
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