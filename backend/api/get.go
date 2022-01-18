package api

import (
	"fmt"

	ctrl_coin "github.com/FX-KNUT/fc-/backend/controller/coin"
	ctrl_user "github.com/FX-KNUT/fc-/backend/controller/user"
	ctrl_wallet "github.com/FX-KNUT/fc-/backend/controller/wallet"
	"github.com/FX-KNUT/fc-/backend/service"
	"github.com/gin-gonic/gin"
)

/* ************************************* */
// service and controller

// user
var (
	GET_user_service service.User_service = service.New__User()
	GET_user_controller ctrl_user.User_controller = ctrl_user.New__User(GET_user_service)

	GET_coin_service service.Coin_service
	GET_coin_controller ctrl_coin.Coin_controller = ctrl_coin.New__Coin(GET_coin_service)

	GET_wallet_service service.Wallet_service
	GET_wallet_controller ctrl_wallet.Wallet_controller = ctrl_wallet.New__Wallet(GET_wallet_service)
)

// block
var (
	GET_block_service service.Block_service
)

/* ************************************* */

func fn_REST_check_id(c *gin.Context) {

	id := c.Query("id")
	
	err := GET_user_controller.CheckDuplicatedId(c, id)

	if err != nil {
		fmt.Println(err.Error())
	}
}

func fn_REST_get_ranking(c *gin.Context) {
	err := GET_user_controller.GetUserRanking(c)
	if err != nil {
		fmt.Println(err.Error())
	}
}

func fn_REST_get_coins(c *gin.Context) {

	err := GET_coin_controller.GetAllCoin(c)
	
	if err != nil {
		fmt.Println(err.Error())
	}
}

func fn_REST_get_wallet_info(c *gin.Context) {
	
	id := c.Query("id")

	_, err := GET_wallet_controller.GetUserWallet(id)
	if err != nil {
		fmt.Println(err.Error())
	}
}

func fn_REST_get_coin_detail(c *gin.Context) {

	err := GET_coin_controller.GetCoinDetail(c)
	if err != nil {
		fmt.Println(err.Error())
	}
}

func fn_REST_get__block_to_mine(c *gin.Context) {
	_, err := GET_block_controller.GetLatestUnminedBlock(c)
	if err != nil {
		fmt.Println(err.Error())
	}
}

func fn_REST_get_coin_price_history(c *gin.Context) {
	err := GET_coin_controller.GetCoinPriceHistory(c)
	if err != nil {
		fmt.Println(err.Error())
	}
}

// core
func Get(c chan<- bool, r *gin.Engine) {
	go r.GET("/checkid", fn_REST_check_id)
	go r.GET("/ranking", fn_REST_get_ranking)
	go r.GET("/coins", fn_REST_get_coins)
	go r.GET("/wallet", fn_REST_get_wallet_info)
	go r.GET("/trade", fn_REST_get_coin_detail)
	go r.GET("/mineInfo", fn_REST_get__block_to_mine)
	go r.GET("/coin_price_history", fn_REST_get_coin_price_history)

	c <- true
}
