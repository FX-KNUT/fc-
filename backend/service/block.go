package service

import (
	"fmt"

	db "github.com/FX-KNUT/fc-/backend/database"
	"github.com/FX-KNUT/fc-/backend/entity"
)

type Block entity.Block

type struct_block_service struct {
	blocks []entity.Block
}

type Block_service interface {
	GetBlock(Idx int) (Block, error)
	GetAllBlocks() ([]Block, error)
	GetLatestBlock() (Block, error)
	GetLatestIdx() (int, error)
	UpdateBlock(block Block) error
	SaveBlock(block Block) error
}

func (s *struct_block_service) GetBlock(Idx int) (Block, error) {

	var block Block

	db := db.Fn_access_db()

	query := fmt.Sprintf("SELECT * FROM BLOCK WHERE Block_index == %d", Idx)

	err := db.QueryRow(query).Scan(&block)

	if err != nil {
		return Block{}, err
	}

	return block, nil
}

func (s *struct_block_service) GetAllBlocks() ([]Block, error) {

	var block Block
	var blocks []Block

	db := db.Fn_access_db()

	query := "SELECT * FROM BLOCK"

	rows, err := db.Query(query)

	defer rows.Close()

	if err != nil {
		return blocks, err
	}

	for rows.Next() {
		err = rows.Scan(&block.Block_index, &block.Block_hash, &block.Block_previous_hash, &block.Block_tx_ref_ID,
							&block.Block_owner, &block.Block_nonce, &block.Block_created_at, &block.Block_difficulty, &block.Block_reward)
		if err != nil {
			return blocks, err
		}
		blocks = append(blocks, block)
	}

	return blocks, nil
}

func (s *struct_block_service) GetLatestBlock() (Block, error) {
	var block Block

	db := db.Fn_access_db()

	query := fmt.Sprintf("SELECT * FROM BLOCK ORDER BY Block_index desc limit 1")

	err := db.QueryRow(query).Scan(&block)

	if err != nil {
		return Block{}, err
	}

	return block, nil
}

func (s *struct_block_service) GetLatestIdx() (int, error) {
	var Idx int

	db := db.Fn_access_db()

	query := fmt.Sprintf("SELECT MAX(Block_index) FROM BLOCK")

	err := db.QueryRow(query).Scan(&Idx)

	if err != nil {
		return -1, err
	}

	return Idx, nil
}

func (s *struct_block_service) UpdateBlock(block Block) error {

	db := db.Fn_access_db()

	query := fmt.Sprintf("UPDATE BLOCK SET Block_hash = '%s', Block_previous_hash = '%s' Block_tx_ref_ID = %d, Block_owner = '%s', Block_nonce = %d, Block_created_at = '%s', Block_difficulty = %d, Block_reward = %d WHERE Block_index == %d",
		block.Block_hash, block.Block_previous_hash, block.Block_tx_ref_ID, block.Block_owner,
		block.Block_nonce, block.Block_created_at, block.Block_difficulty, block.Block_reward, block.Block_index)

	_, err := db.Query(query)

	return err
}

func (s *struct_block_service) SaveBlock(block Block) error {

	db := db.Fn_access_db()

	query := fmt.Sprintf("INSERT INTO BLOCK VALUES (%d, '%s', '%s', %d, '%s', '%d', '%s', '%d', '%d')",
		block.Block_index, block.Block_hash, block.Block_previous_hash, block.Block_tx_ref_ID,
		block.Block_owner, block.Block_nonce, block.Block_created_at, block.Block_difficulty, block.Block_reward)

	_, err := db.Query(query)

	return err
}