package ctrl_block

import (
	"errors"

	"github.com/FX-KNUT/fc-/backend/entity"
	"github.com/FX-KNUT/fc-/backend/service"
)

const ERR_GET__BLOCK string = "Error while getting a block by Idx: block.go in controller"
const ERR_GET__ALL_BLOCK string = "Error while getting whole blocks: block.go in controller"
const ERR_GET__LATEST__BLOCK string = "Error while getting the latest block: block.go in controller"
const ERR_GET__LATEST__INDEX string = "Error while getting the latest Idx of block: block.go in controller"
const ERR_UPDATE_BLOCK string = "Error while updating a block: block.go in controller"
const ERR_SAVE_BLOCK string = "Error while saving a block: block.go in controller"
const ERR_DELETE_BLOCK string = "Error while deleting a block: block.go in controller"

type controller struct {
	service service.Block_service
}

type Block_controller interface {
	GetBlock(int) (entity.Block, error)
	GetAllBlocks() ([]entity.Block, error)
	GetLatestBlock() (entity.Block, error)
	GetLatestIndex() (int, error)
	UpdateBlock(entity.Block) error
	SaveBlock(entity.Block) error
}

func New__Block(service service.Block_service) Block_controller {
	return &controller{
		service: service,
	}
}

func (c *controller) GetBlock(idx int) (entity.Block, error) {
	block := entity.Block{}

	block, err := c.service.GetBlock(idx)

	if err != nil {
		return block, errors.New(ERR_GET__BLOCK)
	}

	return block, nil
}

func (c *controller) GetAllBlocks() ([]entity.Block, error) {
	blocks := []entity.Block{}

	blocks, err := c.GetAllBlocks()
	if err != nil {
		return blocks, errors.New(ERR_GET__ALL_BLOCK)
	}

	return blocks, nil
}
func (c *controller) GetLatestBlock() (entity.Block, error) {
	block := entity.Block{}
	block, err := c.GetLatestBlock()
	if err != nil {
		return block, errors.New(ERR_GET__LATEST__BLOCK)
	}

	return block, nil
}

func (c *controller) GetLatestIndex() (int, error) {
	var Idx int
	Idx, err := c.GetLatestIndex()
	if err != nil {
		return -1, errors.New(ERR_GET__LATEST__INDEX)
	}

	return Idx, nil

}

func (c *controller) UpdateBlock(block entity.Block) error {
	err := c.UpdateBlock(block)

	if err != nil {
		return errors.New(ERR_UPDATE_BLOCK)
	}

	return nil
	
}

func (c *controller) SaveBlock(block entity.Block) error {
	err := c.service.SaveBlock(block)

	if err != nil {
		return errors.New(ERR_UPDATE_BLOCK)
	}

	return nil
	
}