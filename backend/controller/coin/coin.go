package ctrl_coin

import (
	"net/http"

	"github.com/FX-KNUT/fc-/backend/entity"
	"github.com/FX-KNUT/fc-/backend/service"
	"github.com/gin-gonic/gin"
)

const ERR_GETTING_WALLET 		string = "error occurred while getting a coin"
const ERR_GETTING_COIN_DETAIL 	string = "error occurred while getting a detail of coin"
const ERR_UPDATING_COIN_LIKE	string = "error occurred while updating like request of coin"

type Coin entity.Coin

type controller struct {
	service service.Coin_service
}

type Coin_controller interface {
	GetCoin(*gin.Context, string) error
	GetAllCoin(*gin.Context) error
	GetCoinDetail(*gin.Context) error
	LikeCoin(*gin.Context) error
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
		return err
	}

	ctx.JSON(http.StatusOK, gin.H{
		"message": "OK",
		"data": coin,
	})
	
	return nil
}

func (c *controller) GetAllCoin(ctx *gin.Context) error {

	coins, err := c.service.GetAllCoin()

	if err != nil {
		ctx.String(http.StatusBadGateway, ERR_GETTING_WALLET)
		return err
	}

	ctx.JSON(http.StatusOK, gin.H{
		"message": "OK",
		"data": coins,
	})
	
	return nil
}

func (c *controller) GetCoinDetail(ctx *gin.Context) error {

	coin_name := ctx.Query("coin_name")
	user_id := ctx.Query("user_id")

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

func (c *controller) LikeCoin(ctx *gin.Context) error {

	coin_name := ctx.Param("coin_name")
	user_id := ctx.Param("user_id")

	coin_status, err := c.service.LikeCoin(coin_name, user_id)

	if err != nil {
		ctx.String(http.StatusBadGateway, ERR_UPDATING_COIN_LIKE)
	}

	ctx.JSON(http.StatusOK, gin.H{
		"message": "OK",
		"data": coin_status,
	})

	return nil
}