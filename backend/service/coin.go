package service

import (
	"fmt"

	db "github.com/FX-KNUT/fc-/backend/database"
	"github.com/FX-KNUT/fc-/backend/entity"
)

type struct_coin_service struct {
	Coins []entity.Coin
}

type Coin_service interface {
	GetCoin(string) (entity.Coin, error)
	GetAllCoin() ([]entity.Coin, error)
	GetCoinPrice(string) (int, error)
	GetCoinDetail(string, string) (entity.Coin_Detail, error)
	LikeCoin(string, string) (bool, error)
}

func New__Coin() Coin_service {
	return &struct_coin_service{}
}

func (s *struct_coin_service) GetCoin(name string) (entity.Coin, error) {

	var coin entity.Coin

	db := db.Fn_open__db()

	query := fmt.Sprintf("SELECT * FROM coins WHERE coin_name == '%s';", name)

	err := db.QueryRow(query).Scan(&coin)
	
	if err != nil {
		return coin, err
	}

	return coin, nil
}

func (s *struct_coin_service) GetAllCoin() ([]entity.Coin, error) {

	var coins []entity.Coin

	db := db.Fn_open__db()

	query := "SELECT * FROM coins;"

	rows, err := db.Query(query)
	
	if err != nil {
		return []entity.Coin{}, err
	}

	for rows.Next() {
		var coin entity.Coin
		err := rows.Scan(&coin)
		if err != nil {
			return []entity.Coin{}, err
		}
		coins = append(coins, coin)
	}

	return coins, nil
}

func (s *struct_coin_service) GetCoinPrice(name string) (int, error) {

	var price int

	db := db.Fn_open__db()

	query := fmt.Sprintf("SELECT coin_price FROM coins WHERE coin_name == '%s';", name)

	err := db.QueryRow(query).Scan(&price)
	
	if err != nil {
		return -1, err
	}

	return price, nil

}

func (s *struct_coin_service) GetCoinDetail(coin_name string, user_id string) (entity.Coin_Detail, error) {

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

func (s *struct_coin_service) LikeCoin(coin_name string, user_id string) (bool, error) {

	var bookmark_int int
	var bookmark_status bool

	db := db.Fn_open__db()

	query__bookmark__setter := fmt.Sprintf("UPDATE bookmark SET bookmark_%s = (bookmark_%s + 1) % 2 where user_id = '%s';",
							coin_name, coin_name, user_id)

	err := db.QueryRow(query__bookmark__setter).Scan(&bookmark_status)

	if err != nil {
		return false, err
	}

	query__bookmark__getter := fmt.Sprintf("SELECT bookmark_%s from bookmark where user_id = '%s';",
							coin_name, user_id)

	err = db.QueryRow(query__bookmark__getter).Scan(&bookmark_int)

	if err != nil {
		return false, err
	}

	if bookmark_int == 1 {
		return true, err
	}

	return false, err
	
}