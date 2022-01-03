package ctrl_wallet

import (
	"net/http"

	"github.com/FX-KNUT/fc-/backend/entity"
	"github.com/FX-KNUT/fc-/backend/service"
	"github.com/gin-gonic/gin"
)

const err_creating_wallet string = "error occurred while creating wallet"

type Wallet entity.Wallet

type controller struct {
	service service.Wallet_service
}

type Wallet_controller interface {
	CreateWallet(*gin.Context, entity.User, int) error
}

func New__Wallet(service service.Wallet_service) Wallet_controller {
	return &controller {
		service: service,
	}
}

func (c *controller) CreateWallet(ctx *gin.Context, user entity.User, balance int) error {

	err := c.service.CreateWallet(user, balance)

	if err != nil {
		ctx.String(http.StatusBadGateway, err_creating_wallet)
		return err
	}

	return nil
}