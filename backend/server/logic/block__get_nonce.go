package logic_server

import "github.com/FX-KNUT/fc-/backend/entity"

const ERR_GETTING_NONCE string = "error occured while getting difficulty value"

func Block_get_difficulty(txs []entity.Tx) (int, error) {

	count_txs := len(txs) + 4

	return count_txs, nil
}