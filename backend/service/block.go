package service

import (
	"fmt"

	db "github.com/FX-KNUT/fc-/backend/database"
	"github.com/FX-KNUT/fc-/backend/entity"
)

type struct_block_service struct {
	Blocks []entity.Block
}

type Block_service interface {
	GetBlock(int) (entity.Block, error)
	GetAllBlocks() ([]entity.Block, error)
	GetLatestBlock() (entity.Block, error)
	GetLatestUnminedBlock() (entity.Block, error)
	GetLatestIndex() (int, error)
	GetFullBlockInfo(entity.Block) (entity.Block, error)
	GetTxsOfBlock(int) ([]entity.Tx, error)
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
	)

	db := db.Fn_open__db()

	query := "SELECT * FROM BLOCK"

	rows, err := db.Query(query)

	if err != nil {
		return blocks, err
	}

	defer rows.Close()

	for rows.Next() {
		err = rows.Scan(&block.Block_index, &block.Block_hash, &block.Block_previous_hash,
			&block.Block_owner, &block.Block_created_at, &block.Block_difficulty)
		if err != nil {
			return blocks, err
		}
		blocks = append(blocks, block)
	}

	return blocks, nil
}

func (s *struct_block_service) GetLatestBlock() (entity.Block, error) {

	var block entity.Block

	db := db.Fn_open__db()

	query := "SELECT * FROM BLOCK ORDER BY Block_index desc limit 1"

	err := db.QueryRow(query).Scan(&block)

	if err != nil {
		return entity.Block{}, err
	}

	return block, nil
}

func (s *struct_block_service) GetLatestUnminedBlock() (entity.Block, error) {
	var block entity.Block

	db := db.Fn_open__db()

	query := "SELECT * FROM block WHERE block_owner LIKE ('% %') ORDER BY Block_index limit 1"

	err := db.QueryRow(query).Scan(&block)

	if err != nil {
		return entity.Block{}, err
	}

	return block, nil
}

func (s *struct_block_service) GetLatestIndex() (int, error) {

	var Idx int

	db := db.Fn_open__db()

	query := "SELECT MAX(Block_index) FROM BLOCK"

	err := db.QueryRow(query).Scan(&Idx)

	if err != nil {
		return -1, err
	}

	return Idx, nil
}

func (s *struct_block_service) GetFullBlockInfo(block entity.Block) (entity.Block, error) {

	// db := db.Fn_open__db()

	txs, err := s.GetTxsOfBlock(block.Block_index)

	if err != nil {
		return entity.Block{}, nil
	}

	block.Block_txs = txs

	return entity.Block{}, nil
}

func (s *struct_block_service) GetTxsOfBlock(index int) ([]entity.Tx, error) {

	var (
		tx entity.Tx
		txs []entity.Tx
	)
	
	db := db.Fn_open__db()

	query := fmt.Sprintf("SELECT * FROM TXS WHERE block_index == %d", index)

	rows, err := db.Query(query)

	if err != nil {
		return txs, err
	}

	defer rows.Close()

	for rows.Next() {
		err = rows.Scan(&tx.Block_index, &tx.From, &tx.To, &tx.Amount)
		if err != nil {
			return txs, err
		}
		txs = append(txs, tx)
	}

	return txs, nil	
}

func (s *struct_block_service) UpdateBlock(block entity.Block) error {

	db := db.Fn_open__db()

	query := fmt.Sprintf("UPDATE BLOCK SET Block_hash = '%s', Block_previous_hash = '%s' Block_owner = '%s', Block_nonce = %d, Block_difficulty = %d, WHERE Block_index == %d",
		block.Block_hash, block.Block_previous_hash, block.Block_owner,
		block.Block_nonce, block.Block_difficulty, block.Block_index)

	_, err := db.Query(query)

	return err
}

func (s *struct_block_service) SaveBlock(block entity.Block) error {

	db := db.Fn_open__db()

	query := fmt.Sprintf("INSERT INTO BLOCK VALUES (%d, '%s', '%s', '%s', '%d',)",
		block.Block_index, block.Block_hash, block.Block_previous_hash, block.Block_owner,
		block.Block_difficulty)

	_, err := db.Query(query)

	return err
}
