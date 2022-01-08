package entity

import "mime/multipart"

type Form_File struct {
	id   string                `form:"id" binding:"required"`
	file *multipart.FileHeader `form:"file" binding:"required"`
}