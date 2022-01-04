package ctrl_tx

import (
	"net/http"

	"github.com/FX-KNUT/fc-/backend/entity"
	"github.com/FX-KNUT/fc-/backend/service"
	"github.com/gin-gonic/gin"
)

const ERR_CONTRACTING_TX string = "Contracting Transaction Failed"
const ERR_BINDING_JSON string = "JSON Binding Failed on Tx.go on Controller"

type controller struct {
	service service.Tx_service
}

type Tx_controller interface {
	ContractTx(*gin.Context) error
}

func New__Tx(service service.Tx_service) Tx_controller {
	return &controller{
		service: service,
	}
}

func (c *controller) ContractTx(ctx *gin.Context) error {
	var tx_info entity.Tx_json

	err := ctx.ShouldBindJSON(&tx_info)

	if err != nil {
		ctx.String(http.StatusBadRequest, ERR_BINDING_JSON)
		return err
	}

	err = c.service.ContractTx(tx_info)

	if err != nil {
		ctx.String(http.StatusBadRequest, ERR_CONTRACTING_TX)
		return err
	}

	return nil
}