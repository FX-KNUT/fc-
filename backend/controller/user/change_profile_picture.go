package controller

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

func (f Form_File) Fn_change_profile_picture(c *gin.Context) error {
	// <form action="/change_profile_picture" method="post" name="change_profile_picture">
	//	~~~~~~~~~~~
	// </form>

	err := c.ShouldBind(&f)

	if err != nil {
		c.String(http.StatusBadRequest, "잘못된 요청입니다.")
		return err
	}

	c.String(http.StatusOK, "업로드 되었습니다.")

	c.SaveUploadedFile(f.file, fmt.Sprintf("/asset/user/profile_picture/%s", f.id))

	return nil
}