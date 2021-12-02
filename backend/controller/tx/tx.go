package ctrl_tx

import (
	"net/http"

	"github.com/FX-KNUT/fc-/backend/entity"
	"github.com/FX-KNUT/fc-/backend/service"
	"github.com/gin-gonic/gin"
)

const ERR_CONTRACTING_TX string = "Contracting Transaction Failed"

type controller struct {
	service service.Tx_service
}

type Tx_controller interface {
	ContractTx(*gin.Context, entity.User, entity.User, int) error
}

func New__Tx(service service.Tx_service) Tx_controller {
	return &controller{
		service: service,
	}
}

func (c *controller) ContractTx(ctx *gin.Context, from entity.User, to entity.User, amount int) error {
	if err := c.service.ContractTx(from, to, amount); err != nil {
		ctx.String(http.StatusBadRequest, ERR_CONTRACTING_TX)
		return err
	}

	return nil
}