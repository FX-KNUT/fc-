package ctrl_blcok

type Block_Controller interface {
	CreateBlock() Block, error
	GetBlock(index Block.Index) Block, error
	GetAllBlocks() []Block, error
	UpdateBlock(block Block) error
	SaveBlock(block Block) error
	DeleteBlock(block Block) error
}

func (b Block_Controller) CreateBlock() (Block, error) {

}

func (b Block_Controller) GetBlock(index Block.Index) (Block, error) {
	
}

func (b Block_Controller) GetAllBlocks() ([]Block, error) {

}

func (b Block_Controller) UpdateBlock(block Block) error {
	
}

func (b Block_Controller) SaveBlock(block Block) error {
	
}

func (b Block_Controller) DeleteBlock(block BLock) error {
	
}