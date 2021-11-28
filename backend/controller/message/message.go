package message

import (
	"errors"
	"fmt"
	"log"
	"net/http"

	"github.com/FX-KNUT/fc-/backend/entity"
	"github.com/FX-KNUT/fc-/backend/service"
	"github.com/gin-gonic/gin"
)


var err_wrong__title error = errors.New("asfadsf")
var err_wrong__content error = errors.New("asdfdasf")



type struct_message_controller struct {
	service service.Interface_post_service
}

type Interface_message_controller interface {
	CreatePost(*gin.Context) error
	UpdatePost(*gin.Context)
	DeletePost(*gin.Context)
}

func (s *struct_message_controller) CreatePost(c *gin.Context) error {
	var post entity.Post
	if err := c.ShouldBindJSON(&post); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"message": "게시물 생성 오류",
			"error": err.Error(),
		})
		return err
	}
	fmt.Println(post)
	err := s.service.CreatePost(post)

	if err != nil {
		log.Println(err)
	}
 
	if len(post.Post_Title) == 0 {
		c.String(http.StatusBadRequest, "유효하지 않은 정보가 있습니다.")
		return err_wrong__title
	}
	 
	if len(post.Message_Content) == 0 {
		c.String(http.StatusBadRequest, "유효하지 않은 정보가 있습니다.")
		return err_wrong__content
	}

	c.String(http.StatusOK, "OK")
	return nil
}