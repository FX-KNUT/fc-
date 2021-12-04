package entity

type Block struct {
	Block_index         int
	Block_hash          string
	Block_previous_hash string
	Block_txs           []Tx
	Block_owner         string
	Block_nonce         int
	Block_created_at    string
	Block_difficulty    int
	Block_reward        int
}

type Blockchain []Block