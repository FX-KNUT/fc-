package entity

type Post struct {
	Message
	Index    int ``
	Comments []Comment
}

type Comment Message
