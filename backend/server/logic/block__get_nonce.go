package logic_server

const ERR_GETTING_NONCE string = "error occured while getting difficulty value"

func Block_get_difficulty(index int) (int, error) {

	txs, err := block_service.GetTxsOfBlock(index)

	if err != nil {
		return -1, err
	}

	count_txs := len(txs)

	return count_txs, nil
}