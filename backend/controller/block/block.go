package ctrl_block

import (
	"errors"
	"net/http"
	"strconv"

	ctrl_user "github.com/FX-KNUT/fc-/backend/controller/user"
	"github.com/FX-KNUT/fc-/backend/entity"
	logic_server "github.com/FX-KNUT/fc-/backend/server/logic"
	"github.com/FX-KNUT/fc-/backend/service"
	"github.com/gin-gonic/gin"
)

const ERR_GET__BLOCK string = "error while getting a block by Idx: block.go in controller"
const ERR_GET__ALL_BLOCK string = "error while getting whole blocks: block.go in controller"
const ERR_GET__LATEST__BLOCK string = "error while getting the latest block: block.go in controller"
const ERR_GET__LATEST__UNMINED_BLOCK string = "error while getting the latest unmined block: block.go in controller"
const ERR_GET__LATEST__INDEX string = "error while getting the latest Idx of block: block.go in controller"
const ERR_UPDATE_BLOCK string = "error while updating a block: block.go in controller"
const ERR_SAVE_BLOCK string = "error while saving a block: block.go in controller"
const ERR_DELETE_BLOCK string = "error while deleting a block: block.go in controller"

type controller struct {
	service service.Block_service
}

type Block_controller interface {
	GetBlock(int) (entity.Block, error)
	GetAllBlocks() ([]entity.Block, error)
	GetLatestBlock() (entity.Block_as_entity, error)
	GetLatestUnminedBlock(*gin.Context) (entity.Block, error)
	GetLatestIndex() (int, error)
	UpdateBlock(entity.Block) error
	SaveBlock(entity.Block) error
	UpdateOwnerAndNonce(*gin.Context) error
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

	blocks, err := c.service.GetAllBlocks()
	if err != nil {
		return blocks, errors.New(ERR_GET__ALL_BLOCK)
	}

	return blocks, nil
}

func (c *controller) GetLatestBlock() (entity.Block_as_entity, error) {
	block := entity.Block_as_entity{}
	block, err := c.service.GetLatestBlock()
	if err != nil {
		return block, errors.New(ERR_GET__LATEST__BLOCK)
	}

	return block, nil
}

func (c *controller) GetLatestUnminedBlock(ctx *gin.Context) (entity.Block, error) {
	block := entity.Block{}
	block, err := c.service.GetLatestUnminedBlock()

	if err != nil {
		ctx.String(http.StatusInternalServerError, "error while getting latest unmined block")
		return block, errors.New(ERR_GET__LATEST__UNMINED_BLOCK)
	}

	ctx.JSON(http.StatusOK, gin.H{
		"message": "OK",
		"data": block,
	})

	return block, nil
}

func (c *controller) GetLatestIndex() (int, error) {
	var Idx int
	Idx, err := c.service.GetLatestIndex()
	if err != nil {
		return -1, errors.New(ERR_GET__LATEST__INDEX)
	}

	return Idx, nil

}

func (c *controller) UpdateBlock(block entity.Block) error {
	err := c.service.UpdateBlock(block)

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

func (c *controller) validateNonce(ctx *gin.Context, owner string, nonce string, index string) error {

	err := ctrl_user.New__User(service.New__User()).CheckDuplicatedId(ctx, owner)

	if err != nil {
		return err
	}

	err = logic_server.Validate_nonce(nonce, index)

	if err != nil {
		return err
	}

	return nil
}

func (c *controller) UpdateOwnerAndNonce(ctx *gin.Context) error {

	nonce := ctx.Query("nonce")
	owner := ctx.Query("owner")
	index := ctx.Query("index")

	err := c.validateNonce(ctx, owner, nonce, index)

	if err != nil {
		ctx.String(http.StatusBadRequest, err.Error())
		return err
	}

	block_index, err := strconv.Atoi(index)

	if err != nil {
		ctx.String(http.StatusBadGateway, err.Error())
		return err
	}

	block, err := c.service.GetBlock(block_index)

	if err != nil {
		ctx.String(http.StatusBadGateway, err.Error())
		return err
	}

	block_nonce, err := strconv.Atoi(nonce)
	
	if err != nil {
		ctx.String(http.StatusBadGateway, err.Error())
		return err
	}

	block.Block_owner = owner
	block.Block_nonce = block_nonce

	err = c.service.UpdateBlock(block)

	if err != nil {
		ctx.String(http.StatusBadGateway, err.Error())
		return err
	}

	return nil
}