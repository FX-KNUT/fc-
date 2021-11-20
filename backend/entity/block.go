package entity

type Block struct {
	Index         int
	Hash          string
	Previous_hash string
	Tx_Ref_ID     int
	Owner         string
	Nonce         int
	Created_at    string
	Difficulty    int
	Reward        int
}

type Blockchain []Block