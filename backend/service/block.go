package service

type Block_Service interface {
	CreateBlock() Block, error
	GetBlock(index Block.Index) Block, error
	GetAllBlocks() []Block, error
	GetLatestBlock() Block, error
	GetLatestIndex() Block.Index, error
	UpdateBlock(block Block) error
	SaveBlock(block Block) error
	DeleteBlock(block Block) error
}

func (b *Block_Controller) CreateBlock() (Block, error) {

}

func (b *Block_Controller) GetBlock(index Block.Index) (Block, error) {
	
}

func (b *Block_Controller) GetAllBlocks() ([]Block, error) {

}

func (b *Block_Controller) GetLatestBlock() (Block, error) {

}

func (b *Block_Controller) GetLatestIndex() (Block.Index, error) {

}

func (b *Block_Controller) UpdateBlock(block Block) error {
	
}

func (b *Block_Controller) SaveBlock(block Block) error {
	query := fmt.Sprintf("INSERT INTO BLOCK VALUES (%d, '%s', '%s', %d, '%s', '%d', '%s', '%d', '%d')",
							block.Index, block.Hash, block.Previous_hash, block.Tx_Ref_ID,
							block.Owner, block.Nonce, block.Created_at, block.Difficulty, block.Reward)
}

func (b *Block_Controller) DeleteBlock(block BLock) error {
	
}