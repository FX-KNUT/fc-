package entity

type Coin struct {
	Coin_name           string // varchar
	Coin_price__history []int  // int
	Coin_price__now     int    // int
	Coin_type           string // varchar
	Coin_rank_change    int    // int
	Coin_total_star     int    // int
}