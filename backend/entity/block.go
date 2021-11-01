package entity

type Block struct {
	index         int
	hash          string
	previous_hash string
	txs           []Tx
	owner         string
	nonce         string
	created_date  string
	reward        int
}

type Blockchain struct {
	blocks []Block
}

type Tx struct {
	from   string
	to     string
	amount int
}