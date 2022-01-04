package ctrl_coin

import (
	"net/http"

	"github.com/FX-KNUT/fc-/backend/entity"
	"github.com/FX-KNUT/fc-/backend/service"
	"github.com/gin-gonic/gin"
)

const ERR_GETTING_WALLET 		string = "error occurred while getting a coin"
const ERR_GETTING_COIN_DETAIL 	string = "error occurred while getting a detail of coin"

type Coin entity.Coin

type controller struct {
	service service.Coin_service
}

type Coin_controller interface {
	GetCoin(*gin.Context, string) error
	GetCoinDetail(*gin.Context, string, string) error
}

func New__Coin(service service.Coin_service) Coin_controller {
	return &controller{
		service: service,
	}
}

func (c *controller) GetCoin(ctx *gin.Context, name string) error {

	coin, err := c.service.GetCoin(name)

	if err != nil {
		ctx.String(http.StatusBadGateway, ERR_GETTING_WALLET)
	}

	ctx.JSON(http.StatusOK, gin.H{
		"message": "OK",
		"data": coin,
	})
	
	return nil
}

func (c *controller) GetCoinDetail(ctx *gin.Context, coin_name string, user_id string) error {

	detail, err := c.service.GetCoinDetail(coin_name, user_id)

	if err != nil {
		ctx.String(http.StatusBadGateway, ERR_GETTING_COIN_DETAIL)
	}

	ctx.JSON(http.StatusOK, gin.H{
		"message": "OK",
		"data": detail,
	})
	
	return nil
}