package entity

type Tx struct {
	Block_index int
	From        string
	To          string
	Amount      int
}

type Txs struct {
	Txs []Tx
}