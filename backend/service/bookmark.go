package service

import (
	"fmt"

	db "github.com/FX-KNUT/fc-/backend/database"
	"github.com/FX-KNUT/fc-/backend/entity"
)

type struct_bookmark_service struct {
	Bookmarks []string // entity.User.User_stars
}

type Bookmark_service interface {
	InitBookmark(string) error
	GetBookmarks(string) (entity.Bookmark, error)
}

func New__Bookmark() Bookmark_service {
	return &struct_bookmark_service{}
}

func (s *struct_bookmark_service) InitBookmark(user_id string) error {

	db := db.Fn_open__db()

	query := fmt.Sprintf("INSERT INTO bookmark(user_id) VALUES('%s');", user_id)

	_, err := db.Query(query)

	return err
}

func (s *struct_bookmark_service) GetBookmarks(user_id string) (entity.Bookmark, error) {

	var bookmarks entity.Bookmark

	db := db.Fn_open__db()

	query := fmt.Sprintf("SELECT * FROM bookmark WHERE user_id = '%s';", user_id)

	err := db.QueryRow(query).Scan(&bookmarks.User_id, &bookmarks.Bookmark_gunwonjungbo, &bookmarks.Bookmark_haedongtongbo, &bookmarks.Bookmark_hwalgu, &bookmarks.Bookmark_bannyangjun, &bookmarks.Bookmark_myungdojun, &bookmarks.Bookmark_oban, &bookmarks.Bookmark_tainhwapye, &bookmarks.Bookmark_dollar)

	return bookmarks, err
}