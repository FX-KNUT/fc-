package entity

type Coin struct {
	Coin_name           string // varchar(24)
	Coin_price__history []int  // int
	Coin_price__now     int    // int
	Coin_total_star     int    // int
	Coin_continent      string // varchar(16)
	Coin_country        string // varchar(16)
	Coin_material       string // varchar(16)
}