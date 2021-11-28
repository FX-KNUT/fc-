package service

import (
	"database/sql"
	"fmt"

	db "github.com/FX-KNUT/fc-/backend/database"
	"github.com/FX-KNUT/fc-/backend/entity"
)

type struct_block_service struct {
	blocks []entity.Block
}

type Block_service interface {
	GetBlock(int) (entity.Block, error)
	GetAllBlocks() ([]entity.Block, error)
	GetLatestBlock() (entity.Block, error)
	GetLatestIndex() (int, error)
	UpdateBlock(entity.Block) error
	SaveBlock(entity.Block) error
}

func New__Block() Block_service {
	return &struct_block_service{}
}

func (s *struct_block_service) GetBlock(Idx int) (entity.Block, error) {

	var block entity.Block

	db := db.Fn_open__db()

	query := fmt.Sprintf("SELECT * FROM BLOCK WHERE Block_index == %d", Idx)

	err := db.QueryRow(query).Scan(&block)

	if err != nil {
		return entity.Block{}, err
	}

	return block, nil
}

func (s *struct_block_service) GetAllBlocks() ([]entity.Block, error) {

	var (
		block entity.Block
		blocks []entity.Block
		db *sql.DB
	)

	query := "SELECT * FROM BLOCK"

	rows, err := db.Query(query)

	if err != nil {
		return blocks, err
	}

	defer rows.Close()

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

func (s *struct_block_service) GetLatestBlock() (entity.Block, error) {
	var block entity.Block

	var db *sql.DB

	query := "SELECT * FROM BLOCK ORDER BY Block_index desc limit 1"

	err := db.QueryRow(query).Scan(&block)

	if err != nil {
		return entity.Block{}, err
	}

	return block, nil
}

func (s *struct_block_service) GetLatestIndex() (int, error) {
	var Idx int

	var db *sql.DB

	query := "SELECT MAX(Block_index) FROM BLOCK"

	err := db.QueryRow(query).Scan(&Idx)

	if err != nil {
		return -1, err
	}

	return Idx, nil
}

func (s *struct_block_service) UpdateBlock(block entity.Block) error {

	var db *sql.DB

	query := fmt.Sprintf("UPDATE BLOCK SET Block_hash = '%s', Block_previous_hash = '%s' Block_tx_ref_ID = %d, Block_owner = '%s', Block_nonce = %d, Block_created_at = '%s', Block_difficulty = %d, Block_reward = %d WHERE Block_index == %d",
		block.Block_hash, block.Block_previous_hash, block.Block_tx_ref_ID, block.Block_owner,
		block.Block_nonce, block.Block_created_at, block.Block_difficulty, block.Block_reward, block.Block_index)

	_, err := db.Query(query)

	return err
}

func (s *struct_block_service) SaveBlock(block entity.Block) error {

	var db *sql.DB

	query := fmt.Sprintf("INSERT INTO BLOCK VALUES (%d, '%s', '%s', %d, '%s', '%d', '%s', '%d', '%d')",
		block.Block_index, block.Block_hash, block.Block_previous_hash, block.Block_tx_ref_ID,
		block.Block_owner, block.Block_nonce, block.Block_created_at, block.Block_difficulty, block.Block_reward)

	_, err := db.Query(query)

	return err
}
