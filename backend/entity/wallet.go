package entity

type Wallet struct {
	Wallet_owner         string
	Wallet_balance       int
	Wallet_gunwonjungbo  int
	Wallet_haedongtongbo int
	Wallet_hwalgu        int
	Wallet_bannyangjun   int
	Wallet_myungdojun    int
	Wallet_oban          int
	Wallet_tainhwapye    int
	Wallet_dollar        int
}

type My_Wallet struct {
	Balance             int
	Coin_name           string
	Coin_price          int
	Coin_stock          int
	Coin_average_profit int
}