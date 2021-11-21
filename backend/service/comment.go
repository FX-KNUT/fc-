package service

import "github.com/FX-KNUT/fc-/backend/entity"

type Comment_Service interface {
	CreateComment(entity.Comment) error
	GetAllComments() ([]entity.Comment, error)
	UpdateComment(entity.Comment) error
	DeleteComment(entity.Comment) error
}
