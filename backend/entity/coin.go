package entity

type Coin struct {
	Coin_name           string // varchar(24)
	Coin_price__now     int    // int
	Coin_total_star     int    // int
	Coin_continent      string // varchar(16)
	Coin_country        string // varchar(16)
	Coin_material       string // varchar(16)
	Coin_price__highest int    // int
	Coin_price__lowest  int    // int
	Coin_trade_times    int    // int
	Coin_price__start   int    // int
}

type Coin_price__history []int

type Coin_Detail struct {
	Is_favorite        bool   // bookmark
	Coin_stock         int    // wallet
	Coin_name          string // coin
	Coin_total_star    int    // coin
	Coin_continent     string // coin
	Coin_country       string // coin
	Coin_material      string // coin
	Coin_highest_price int    // coin
	Coin_lowest_price  int    // coin
	Coin_trade_times   int    // coin
	Coin_price_start   int    // coin
	Coin_price_now     int    // coin
}