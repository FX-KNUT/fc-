package entity

type Board struct {
	Index    int
	Message  Message
	Comments []Comment
}

type Comment Message