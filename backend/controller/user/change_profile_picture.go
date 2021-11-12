package controller_user

import (
	"fmt"
	"mime/multipart"
	"net/http"

	"github.com/gin-gonic/gin"
)

type Form_File struct {
	id string `form:"id" binding:"required"`
	file *multipart.FileHeader `form:"file" binding:"required"`
}

func Fn_change_profile_picture(c *gin.Context) error {

	var f Form_File

	err := c.ShouldBind(&f)

	var str_bad_request string = "잘못된 요청입니다."
	var str_uploaded string = "업로드 되었습니다."

	// If an error occurs, Don't store it on server and return the function with the error
	if err != nil {
		c.String(http.StatusBadRequest, str_bad_request)
		return err
	}

	c.String(http.StatusOK, str_uploaded)

	path :=  fmt.Sprintf("/asset/user/profile_picture/%s", f.id)

	c.SaveUploadedFile(f.file, path)

	return nil
}