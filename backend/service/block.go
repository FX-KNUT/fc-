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
	GetBlock(index int) (Block, error)
	GetAllBlocks() ([]Block, error)
	GetLatestBlock() (Block, error)
	GetLatestIndex() (int, error)
	UpdateBlock(block Block) error
	SaveBlock(block Block) error
}

func (s *struct_block_service) GetBlock(index int) (Block, error) {

	var block Block

	db := db.Fn_access_db()

	query := fmt.Sprintf("SELECT * FROM BLOCK WHERE Index == %d", index)

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
		err = rows.Scan(&block.Index, &block.Hash, &block.Previous_hash, &block.Tx_Ref_ID,
			&block.Owner, &block.Nonce, &block.Created_at, &block.Difficulty, &block.Reward)
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

	query := fmt.Sprintf("SELECT * FROM BLOCK ORDER BY Index desc limit 1")

	err := db.QueryRow(query).Scan(&block)

	if err != nil {
		return Block{}, err
	}

	return block, nil
}

func (s *struct_block_service) GetLatestIndex() (int, error) {
	var index int

	db := db.Fn_access_db()

	query := fmt.Sprintf("SELECT MAX(Index) FROM BLOCK")

	err := db.QueryRow(query).Scan(&index)

	if err != nil {
		return -1, err
	}

	return index, nil
}

func (s *struct_block_service) UpdateBlock(block Block) error {

	db := db.Fn_access_db()

	query := fmt.Sprintf("UPDATE BLOCK SET Hash = '%s', Previous_hash = '%s' Tx_Ref_ID = %d, Owner = '%s', Nonce = %d, Created_at = '%s', Difficulty = %d, Reward = %d WHERE INDEX == %d",
		block.Hash, block.Previous_hash, block.Tx_Ref_ID, block.Owner,
		block.Nonce, block.Created_at, block.Difficulty, block.Reward, block.Index)

	_, err := db.Query(query)

	return err
}

func (s *struct_block_service) SaveBlock(block Block) error {

	db := db.Fn_access_db()

	query := fmt.Sprintf("INSERT INTO BLOCK VALUES (%d, '%s', '%s', %d, '%s', '%d', '%s', '%d', '%d')",
		block.Index, block.Hash, block.Previous_hash, block.Tx_Ref_ID,
		block.Owner, block.Nonce, block.Created_at, block.Difficulty, block.Reward)

	_, err := db.Query(query)

	return err
}
