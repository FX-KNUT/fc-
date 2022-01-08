package ctrl_bookmark

import (
	"net/http"

	"github.com/FX-KNUT/fc-/backend/service"
	"github.com/gin-gonic/gin"
)

type controller struct {
	service service.Bookmark_service
}

type Bookmark_contrller interface {
	InitBookmark(*gin.Context, string) error
}

func New__Bookmark(service service.Bookmark_service) Bookmark_contrller {
	return &controller{
		service: service,
	}
}

func (c *controller) InitBookmark(ctx *gin.Context, user_id string) error {
	
	err := c.service.InitBookmark(user_id)

	if err != nil {
		ctx.AbortWithStatusJSON(http.StatusBadGateway, gin.H{
			"message": "Aborted",
			"err": err,
		})
		return err
	}

	return nil
}