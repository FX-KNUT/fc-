package ctrl_block

import "github.com/FX-KNUT/fc-/backend/entity"

type Block entity.Block

type Block_Controller interface {
	CreateBlock() (Block, error)
	GetBlock(index Block.Index) (Block, error)
	GetAllBlocks() ([]Block, error)
	GetLatestBlock() (Block, error)
	GetLatestIndex() (Block.Index, error)
	UpdateBlock(block Block) error
	SaveBlock(block Block) error
	DeleteBlock(block Block) error
}

func GenerateBlock() Block_Controller {
	return Block_Controller{
		service: Block_Service,
	}
}

func (b *Block_Controller) CreateBlock() (Block, error) {

}

func (b *Block_Controller) GetBlock(index Block.Index) (Block, error) {

}

func (b *Block_Controller) GetAllBlocks() ([]Block, error) {

}

func (b *Block_Controller) GetLatestBlock() (Block, error) {

}

func (b *Block_Controller) GetLatestIndex() (Block.Index, error) {

}

func (b *Block_Controller) UpdateBlock(block Block) error {

}

func (b *Block_Controller) SaveBlock(block Block) error {
	return service.SaveBlock(block)
}

func (b *Block_Controller) DeleteBlock(block BLock) error {

}
