package logic_server

import (
	"errors"
	"strconv"

	"github.com/FX-KNUT/fc-/backend/service"
)

func Validate_nonce(_nonce string, index string) error {

	block_service := service.New__Block()

	block_index, err := strconv.Atoi(index)

	if err != nil {
		return err
	}

	block, err := block_service.GetBlock(block_index)

	if err != nil {
		return err
	}

	full_block, err := block_service.GetFullBlockInfo(block)

	if err != nil {
		return err
	}

	hash := full_block.Block_hash

	difficulty := len(full_block.Block_txs)

	nonce, err := strconv.Atoi(_nonce)

	if err != nil {
		return err
	}

	if Block_compare_hash(hash, nonce, difficulty) {
		return nil
	}

	return errors.New("hash unmatched on block__nonce_validater")
}