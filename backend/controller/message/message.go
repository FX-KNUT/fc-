package message

import (
	"errors"
	"fmt"
	"net/http"

	"github.com/FX-KNUT/fc-/backend/entity"
	"github.com/FX-KNUT/fc-/backend/service"
	"github.com/gin-gonic/gin"
)

var err_wrong__title error = errors.New("asfadsf")
var err_wrong__content error = errors.New("asdfdasf")

var msg_s_500 string = ""


type struct_message_controller struct {
	service service.Interface_post_service
}

type Interface_message_controller interface {
	ControllerDMLPost(*gin.Context, string) error
}


func (s *struct_message_controller) ControllerDMLPost(c *gin.Context, dml string) error {
	var json entity.Post

	board := c.Param("message_target")
	body,_ := c.Request.GetBody()

	if err := c.ShouldBindJSON(&json); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{ "message": body, "error": err.Error() })
		return err
	}
	
	switch dml {
		case "create":
			if len(json.Post_Title) == 0 {
				c.String(http.StatusBadRequest, "유효하지 않은 정보가 있습니다.")
			}

			if len(json.Message_Content) == 0 {
				c.String(http.StatusBadRequest, "유효하지 않은 정보가 있습니다.")
			}

			err := s.service.CreatePost(json, board)
			if err != nil {
				fmt.Println(err)
			}
		case "update":
			if len(json.Post_Title) == 0 {
				c.String(http.StatusBadRequest, "유효하지 않은 정보가 있습니다.")
			}

			if len(json.Message_Content) == 0 {
				c.String(http.StatusBadRequest, "유효하지 않은 정보가 있습니다.")
			}

			err := s.service.UpdatePost(json)
			if err != nil {
				fmt.Println(err)
			}
		case "delete":
			// if _, exist := json[0]; exist {
			// 	c.String(http.StatusBadRequest, "유효하지 않은 정보가 있습니다.")
			// }

			err := s.service.DeletePost(json)
			if err != nil {
				fmt.Println(err)
			}
	}
	c.String(http.StatusOK, "OK")
	return nil
}


// func (s *struct_message_controller) CreatePost(c *gin.Context) error {
// 	var json entity.Post

// 	body, _ := c.Request.GetBody()

// 	if err := c.ShouldBindJSON(&json); err != nil {
// 		c.JSON(http.StatusBadRequest, gin.H{
// 			"message": body,
// 			"error": err.Error(),
// 		})
// 		return err
// 	}

// 	fmt.Println(json)
// 	err := s.service.CreatePost(json)

// 	if err != nil {
// 		log.Println(err)
// 	}
 
// 	if len(json.Post_Title) == 0 {
// 		c.String(http.StatusBadRequest, "유효하지 않은 정보가 있습니다.")
// 		return err_wrong__title
// 	}
	 
// 	if len(json.Message_Content) == 0 {
// 		c.String(http.StatusBadRequest, "유효하지 않은 정보가 있습니다.")
// 		return err_wrong__content
// 	}

// 	c.String(http.StatusOK, "OK")
// 	return nil
// }

// func (s *struct_message_controller) UpdatePost(c *gin.Context) error {
// 	var json entity.Post

// 	if err := c.ShouldBindJSON(&json); err != nil {
// 		c.JSON(http.StatusBadRequest, gin.H{
// 			"message": "",
// 			"error": err.Error(),
// 		})
// 		return err
// 	}


// }