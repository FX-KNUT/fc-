package service

import "github.com/FX-KNUT/fc-/backend/entity"

type Board_Service interface {
	GetBoardPosts() ([]entity.Post, error)
}
