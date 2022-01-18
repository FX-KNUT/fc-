package ctrl_coin

import (
	"fmt"
	"net/http"

	db "github.com/FX-KNUT/fc-/backend/database"
	"github.com/FX-KNUT/fc-/backend/entity"
	"github.com/FX-KNUT/fc-/backend/service"
	"github.com/gin-gonic/gin"
)

const ERR_GETTING_WALLET 		string = "error occurred while getting a coin"
const ERR_GETTING_COIN_DETAIL 	string = "error occurred while getting a detail of coin"
const ERR_UPDATING_COIN_LIKE	string = "error occurred while updating like request of coin"
const ERR_GETTING_COIN_PRICE_HISTORY string = "error occured while getting coin price history"

type Coin entity.Coin

type controller struct {
	service service.Coin_service
}

type Coin_controller interface {
	GetCoin(*gin.Context, string) error
	GetAllCoin(*gin.Context) error
	GetCoinDetail(*gin.Context) error
	GetCoinPriceHistory(*gin.Context) error
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

// 임시 사용
func getAllCoin() ([]entity.Coin, error) {

	var coins []entity.Coin

	db := db.Fn_open__db()

	query := "SELECT * FROM coins;"

	rows, err := db.Query(query)
	
	if err != nil {
		return []entity.Coin{}, err
	}

	defer rows.Close()

	for rows.Next() {
		var coin entity.Coin
		err := rows.Scan(&coin.Coin_name, &coin.Coin_price__now, &coin.Coin_total_star, &coin.Coin_continent, &coin.Coin_country, &coin.Coin_material, &coin.Coin_price__highest, &coin.Coin_price__lowest, &coin.Coin_trade_times, &coin.Coin_price__start)
		if err != nil {
			return []entity.Coin{}, err
		}
		coins = append(coins, coin)
	}

	return coins, nil
}

func (c *controller) GetAllCoin(ctx *gin.Context) error {

	coins, err := getAllCoin()

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

// 임시 사용
func getCoinDetail(coin_name string, user_id string) (entity.Coin_Detail, error) {

	var detail entity.Coin_Detail

	db := db.Fn_open__db()

	// bookmark

	if user_id == "guest" {
		detail.Is_favorite = false
	} else {

		query__bookmark := fmt.Sprintf("SELECT bookmark_%s FROM bookmark where user_id = '%s';", coin_name, user_id)
	
		err := db.QueryRow(query__bookmark).Scan(&detail.Is_favorite)

		if err != nil {
			return detail, err
		}
	}

	// wallet
	if user_id == "guest" {
		detail.Coin_stock = -1
	} else {

		query__wallet := fmt.Sprintf("SELECT wallet_%s FROM wallet where wallet_owner = '%s';", coin_name, user_id)
	
		err := db.QueryRow(query__wallet).Scan(&detail.Coin_stock)
	
		if err != nil {
			return detail, err
		}
	}

	// coin

	detail.Coin_name = coin_name

	var coin entity.Coin

	query__coin := fmt.Sprintf("SELECT * FROM coins WHERE coin_name = '%s';", coin_name)

	err := db.QueryRow(query__coin).Scan(&coin)

	if err != nil {
		return detail, err
	}

	detail.Coin_total_star = coin.Coin_total_star
	detail.Coin_continent = coin.Coin_continent
	detail.Coin_country = coin.Coin_country
	detail.Coin_material = coin.Coin_material
	detail.Coin_highest_price = coin.Coin_price__highest
	detail.Coin_lowest_price = coin.Coin_price__lowest
	detail.Coin_trade_times = coin.Coin_trade_times
	detail.Coin_price_start = coin.Coin_price__start
	detail.Coin_price_now = coin.Coin_price__now

	return detail, nil
}

func (c *controller) GetCoinDetail(ctx *gin.Context) error {

	coin_name := ctx.Query("coin_name")
	user_id := ctx.Query("user_id")

	detail, err := getCoinDetail(coin_name, user_id)

	if err != nil {
		ctx.String(http.StatusBadGateway, ERR_GETTING_COIN_DETAIL)
	}

	ctx.JSON(http.StatusOK, gin.H{
		"message": "OK",
		"data": detail,
	})
	
	return nil
}

// Disconnected. Check out the controller
func getCoinPriceHistories(coin_name string) (entity.Coin_price__histories, error) {

	var coin_price_histories entity.Coin_price__histories // = []entity.Coin_price__history

	db := db.Fn_open__db()

	query := fmt.Sprintf("SELECT history_time, price_%s FROM price_history", coin_name)

	result, err := db.Query(query)

	if err != nil {
		fmt.Println("error occured while getting coin price history on service of coin.go")
		return entity.Coin_price__histories{}, err
	}

	for result.Next() {
		var timestamp 	string
		var price		int
		var coin_price_history entity.Coin_price_history

		err := result.Scan(&timestamp, &price)

		if err != nil {
			fmt.Println("error occured while getting coin price history on service of coin.go")
			return entity.Coin_price__histories{}, err
		}

		coin_price_history.Timestamp = timestamp
		coin_price_history.Price = price

		coin_price_histories = append(coin_price_histories, coin_price_history)
	}

	return coin_price_histories, nil
}

func (c *controller) GetCoinPriceHistory(ctx *gin.Context) error {

	coin_name := ctx.Query("coin_name")

	coin_price_histories, err := getCoinPriceHistories(coin_name)

	if err != nil {
		ctx.String(http.StatusBadGateway, ERR_GETTING_COIN_PRICE_HISTORY)
	}

	ctx.JSON(http.StatusOK, gin.H{
		"message": "OK",
		"data": coin_price_histories,
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