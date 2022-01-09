package ctrl_user

import (
	"fmt"
	"net/http"

	"github.com/FX-KNUT/fc-/backend/entity"
	"github.com/gin-gonic/gin"
)

// Temp
// type Form_File struct {
// 	id   string                `form:"id" binding:"required"`
// 	file *multipart.FileHeader `form:"file" binding:"required"`
// }

// Constants
const STR_PATH__PROFILE_PICTURE = "/asset/user/profile_picture"
const STR_MESSAGE__BAD_REQUEST = "잘못된 요청입니다."
const STR_MESSAGE__UPLOAD__SUCCESS = "파일이 성공적으로 업로드되었습니다."
const STR_MESSAGE__UPLOAD__FAIL = "파일이 업로드되지 못했습니다."

// Structs
type S_user entity.User_as_profile
// type S_form_file Form_File


// func fn_file_exists(path string) bool {
// 	if _, err := os.Stat(path); os.IsNotExist(err) {
// 		return false;
// 	}
// 	return true;
// }

// 원래 코드를 보존하는 취지에서 함수명 다르게 하고 함수 남겨둠.
// func Fn_change_profile_picture(c *gin.Context) error {
// 	var f S_form_file

// 	err := c.ShouldBind(&f)

// 	var str_bad_request string = "잘못된 요청입니다."
// 	var str_uploaded string = "업로드 되었습니다."

// 	// If an error occurs, Don't store it on server and return the function with the error
// 	if err != nil {
// 		c.String(http.StatusBadRequest, str_bad_request)
// 		return err
// 	}

// 	c.String(http.StatusOK, str_uploaded)

// 	path :=  fmt.Sprintf("/asset/user/profile_picture/%s", f.id)

// 	if fn_file_exists(path) {
// 		os.Remove(path);
// 	}

// 	c.SaveUploadedFile(f.file, path)

// 	return nil
// }

func Fn_upload_profile_picture_file(c *gin.Context) error {
	var user S_user

	if err := c.ShouldBind(&user); err != nil {
		c.String(http.StatusBadRequest, STR_MESSAGE__UPLOAD__SUCCESS)
		fmt.Printf("Error: controller/user/change_profile_picture.go - Fn_upload_profile_picture_file (c.ShouldBind):\n%s", err)
	}

	if err := c.SaveUploadedFile(user.User_picture, fmt.Sprintf("%s/%s", STR_PATH__PROFILE_PICTURE ,user.User_picture.Filename)); err != nil {
		c.String(http.StatusConflict, STR_MESSAGE__UPLOAD__FAIL)
		fmt.Printf("Error: controller/user/change_profile_picture.go - Fn_upload_profile_picture_file (c.SaveUploadedFile):\n%s", err)
	}
	c.String(http.StatusOK, STR_MESSAGE__UPLOAD__SUCCESS)

	c.JSON(http.StatusOK, gin.H{
		"data": user,
	})

	// file, _, err := c.Request.FormFile("file")
	// if err != nil {
	// 	fmt.Printf("controller/user/change_profile_picture.go - Fn_upload_profile_picture_file (c.FormFile):\n%s", err)
	// }

	// c.SaveUploadedFile(file, STR_PATH__PROFILE_PICTURE)
	// c.String(http.StatusOK, fmt.Sprintf("'%s' uploaded!", file.Filename))

	// x, _, err := image.Decode(file)
	// if err != nil {
	// 	fmt.Printf("controller/user/change_profile_picture.go - Fn_upload_profile_picture_file (c.Decode):\n%s", err)
	// }

	// str_file_name := c.Request.GetBody;

	// out, err := os.Create(fmt.Sprintf("%s/%s", STR_PATH__PROFILE_PICTURE, ))
	// if err != nil {
	// 	fmt.Printf("controller/user/change_profile_picture.go - Fn_upload_profile_picture_file (os.Create):\n%s", err)
	// }

	return nil;
}