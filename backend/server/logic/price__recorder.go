package logic_server

import (
	"fmt"
	"time"

	db "github.com/FX-KNUT/fc-/backend/database"
	"github.com/FX-KNUT/fc-/backend/server/logic/fx_framework"
)

const INTERVAL_RECORD_PRICE__SECOND time.Duration = 10
const INTERVAL_RECORD_PRICE time.Duration = time.Second * INTERVAL_RECORD_PRICE__SECOND

func save_price_history() error {

	var (
		coin_price int
		coin_prices []int
	)

	db := db.Fn_open__db()

	query__get_coins := "SELECT coin_price from coins"

	rows, err := db.Query(query__get_coins)

	if err != nil {
		return err
	}

	defer rows.Close()

	for rows.Next() {
		err = rows.Scan(&coin_price)

		if err != nil {
			return err
		}

		coin_prices = append(coin_prices, coin_price)
	}

	query__record_price := "INSERT INTO price_history VALUES "
	
	query__record_price = query__record_price + "("

	timestamp := fx_framework.Timestamp()

	query__record_price = fmt.Sprintf("%s'%s', ", query__record_price, timestamp)

	for _, price := range coin_prices {
		query__record_price = 
			fmt.Sprintf("%s%d, ", query__record_price, price)
	}

	formatter := []byte(query__record_price)

	formatter = formatter[:len(formatter) - 2 ]

	query__record_price = fmt.Sprintf("%s)", formatter)

	_, err = db.Query(query__record_price)

	return err

}

func record_price() error {

	err := save_price_history()

	return err
}

func Price_recorder(c chan<- bool) {

	fmt.Printf("Start Recording Price History To DB Per %d Seconds...\n", INTERVAL_RECORD_PRICE__SECOND)

	interval := INTERVAL_RECORD_PRICE
	ticker := time.NewTicker(interval)
	clear := make(chan bool)

	go func() {
		for {
			select {
			case <-ticker.C:
				record_price()

			case <-clear:
				ticker.Stop()
				return
			}
		}
	}()

	c <- true
}