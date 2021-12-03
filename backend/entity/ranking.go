package entity

type Ranking struct {
	Ranking_idx     uint   `json:"ranking_idx"`
	Ranking_user_id string `json:"ranking_user_id" binding:"require"`
}