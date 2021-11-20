package service

import (
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
	DeleteBlock(block Block) error
	CalculateHash() (string, error)
}

// func (s *struct_block_service) GetBlock(index int) (Block, error) {

// }

// func (s *struct_block_service) GetAllBlocks() ([]Block, error) {

// }

// func (s *struct_block_service) GetLatestBlock() (Block, error) {

// }

// func (s *struct_block_service) GetLatestIndex() (int, error) {

// }

// func (s *struct_block_service) UpdateBlock(block Block) error {

// }

// func (s *struct_block_service) SaveBlock(block Block) error {
// 	// query := fmt.Sprintf("INSERT INTO BLOCK VALUES (%d, '%s', '%s', %d, '%s', '%d', '%s', '%d', '%d')",
// 	// 	block.Index, block.Hash, block.Previous_hash, block.Tx_Ref_ID,
// 	// 	block.Owner, block.Nonce, block.Created_at, block.Difficulty, block.Reward)
// }

// func (s *struct_block_service) DeleteBlock(block Block) error {

// }