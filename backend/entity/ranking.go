package entity

type Ranking struct {
	User_Id     string `json:"user_id" binding:"require"`
	Ranking_Idx uint   `json:"ranking_idx"`
}