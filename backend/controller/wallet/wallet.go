package ctrl_wallet

import (
	"errors"
	"fmt"
	"net/http"

	"github.com/FX-KNUT/fc-/backend/entity"
	"github.com/FX-KNUT/fc-/backend/service"
	"github.com/gin-gonic/gin"
)

const ERR_CREATING_WALLET string = "error occurred while creating wallet"
const ERR_GETTING_WALLET string = "error occurred while getting A wallet"
const ERR_ID__UNDEFINED string = "error ID undefined"

type Wallet entity.Wallet

type controller struct {
	service service.Wallet_service
}

type Wallet_controller interface {
	GetWallet(*gin.Context, string) error
	GetUserWallet(*gin.Context) error
	CreateWallet(*gin.Context, entity.User, int) error
}

func New__Wallet(service service.Wallet_service) Wallet_controller {
	return &controller {
		service: service,
	}
}

func (c *controller) GetWallet(ctx *gin.Context, owner string) error {

	wallet, err := c.service.GetWallet(owner)

	if err != nil {
		ctx.String(http.StatusBadGateway, ERR_GETTING_WALLET)
	}

	ctx.JSON(http.StatusOK, gin.H{
		"message": "OK",
		"data": wallet,
	})

	return nil
}

func (c *controller) CreateWallet(ctx *gin.Context, user entity.User, balance int) error {

	err := c.service.CreateWallet(user, balance)

	if err != nil {
		ctx.String(http.StatusBadGateway, ERR_CREATING_WALLET)
		return err
	}

	return nil
}

func (c *controller) GetUserWallet(ctx *gin.Context) error {
	
	id := ctx.Query("id")
	
	if len(id) == 0 {
		ctx.String(http.StatusBadRequest, "잘못된 요청입니다.")
		return errors.New(ERR_ID__UNDEFINED)
	}

	fmt.Println("에러 점검 1")
	
	/* data, */ err := c.service.GetUserWallet(id)

	fmt.Println("에러 점검 4")	

	if err != nil {
		ctx.String(http.StatusInternalServerError, "서버 에러입니다.")
	}

	ctx.JSON(http.StatusOK, gin.H{
		"message": "OK",
		// "data": data,
	})
	return nil
}