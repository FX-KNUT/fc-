package entity

type Tx struct {
	Block_index int
	From        string
	To          string
	Amount      int
	Quantity    int
	Coin_name   string
}

type Txs struct {
	Txs []Tx
}

type Tx_json struct {
	From      string `json:"tx_from" binding:"require"`
	To        string `json:"tx_to" binding:"require"`
	Amount    int    `json:"tx_amount" binding:"require"`
	Coin_name string `json:"tx_coin_name" binding:"require"`
	Quantity  int    `json:"tx_quantity" binding:"require"`
}