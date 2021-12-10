package message

import (
	"fmt"
	"net/http"

	"github.com/FX-KNUT/fc-/backend/entity"
	"github.com/FX-KNUT/fc-/backend/service"
	"github.com/gin-gonic/gin"
)

type struct_message_controller struct {
	post_service service.Interface_post_service
	comment_service service.Interface_comment_service
	report_service service.Interface_report_service
}

type Interface_message_controller interface {
	ControllerDMLPost(*gin.Context, string) error
	ControllerDMLComment(*gin.Context, string) error
	ControllerDMLReport(*gin.Context, string) error
}

func (s *struct_message_controller) ControllerDMLReport(c *gin.Context, dml string) error {
	var json entity.Report

	message_target := c.Param("message_target")
	body,_ := c.Request.GetBody()

	if err := c.ShouldBindJSON(&json); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{ "message": body, "error": err.Error() })
		return err
	}
	
	switch dml {
		case "C":
			err := s.report_service.CreateReport(json)
			if err != nil {
				fmt.Println(err)
			}
		case "R":
			reports, err := s.report_service.GetReports(message_target)
			if err != nil {
				fmt.Println(err)
			}
			c.JSON(http.StatusOK, reports)
			return nil
	}

	return nil;
}

func (s *struct_message_controller) ControllerDMLComment(c *gin.Context, dml string) error {
	var json entity.Comment

	message_target := c.Param("message_target")
	body,_ := c.Request.GetBody()

	if err := c.ShouldBindJSON(&json); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{ "message": body, "error": err.Error() })
		return err
	}


	if len(json.Message_Target) == 0 {
		c.String(http.StatusBadRequest, "There is no information about the post.")
	}

	switch dml {
		// Create
		case "C":
			if len(json.Message_Content) == 0 {
				c.String(http.StatusBadRequest, "Content is not written.")
			}

			err := s.comment_service.CreateComment(json, message_target)
			if err != nil {
				fmt.Println(err)
			}
		// Read
		case "R":
			comments, err := s.comment_service.GetComments(message_target)
			if err != nil {
				fmt.Println(err)
			}
			c.JSON(http.StatusOK, comments) // 확인 필요
			return nil;
		// Update	
		case "U":
			if json.Message_ID == 0 { // 수정 필요
				c.String(http.StatusBadRequest, "Content is not written.")
			}
			err := s.comment_service.UpdateComment(json)
			if err != nil {
				fmt.Println(err)
			}
		// Delete
		case "D":
			if json.Message_ID == 0 {
				c.String(http.StatusBadRequest, "Content is not written.")
			}

			err := s.comment_service.DeleteComment(json)
			if err != nil {
				fmt.Println(err)
			}
	}

	c.String(http.StatusOK, "OK")
	return nil
}


func (s *struct_message_controller) ControllerDMLPost(c *gin.Context, dml string) error {
	var json entity.Post

	message_target := c.Param("message_target")
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

			err := s.post_service.CreatePost(json, message_target)
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

			err := s.post_service.UpdatePost(json)
			if err != nil {
				fmt.Println(err)
			}
		case "delete":
			// if _, exist := json[0]; exist {
			// 	c.String(http.StatusBadRequest, "유효하지 않은 정보가 있습니다.")
			// }

			err := s.post_service.DeletePost(json)
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