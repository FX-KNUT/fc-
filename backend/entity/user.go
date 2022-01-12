package entity

import "mime/multipart"

// @신이종 1210
// 이전에 Entity의 앞에 엔티티명을 붙인다고 했었음.
// 수정 필요 사항
// ======================================================
// 1. User 엔티티 필드들 앞에 'User_'를 붙일 필요가 있음. (통일성을 고려하지 않는다면 1, 3번 과정은 필요 없음.)
// 2. json 명 앞에 'user_'를 붙일 필요가 있음.
// 3. 관련 컨트롤러, 서비스를 수정할 필요가 있음.
// 4. 테이블 필드명 앞에 'user_'를 붙일 필요가 있음.
// 5. 유저 엔티티를 참조하는 엔티티들에 1, 2, 3, 4번 과정을 적용할 필요가 있음.
// ======================================================
// 서비스나 컨트롤러 관련 문제가 있을 수 있으므로 일단 내 쪽에서 바꾸지는 않음.

// public
type User struct {
	User_id        string `json:"id" binding:"required"`
	User_nickname  string `json:"nickname" binding:"required"`
	User_hashed_pw string `json:"hashed_pw" binding:"required"`
	User_email     string `json:"email" binding:"required"`
	User_stars		Bookmark
}

type Users []User

type User_as_entity struct {
	User_id        string
	User_nickname  string
	User_hashed_pw string
	User_email     string
}

type User_as_response struct {
	User_id			string
	User_nickname	string
	User_email		string
	User_stars		Bookmark
}

type User_as_profile struct {
	User
	User_picture *multipart.FileHeader `json:"picture"`
}

type User_as_login_info struct {
	User_id string `json:"id" binding:"required"`
	User_hashed_pw string `json:"pw" binding:"required"`
	User_chk_saved_id bool `json:"chk_saved_id"`
	User_chk_keep_session_login_state bool `json:"chk_keep_session_login_state"`
}

type User_as_request_sign_in struct {
	User_id string `json:"id" binding:"required"`
	User_hashed_pw string `json:"hashed_pw" binding:"required"`
}

// private
type user_wallet_coin struct {
	Wallet_coin_name 			string
	Wallet_coin_price 			int
	Wallet_coin_price_unit 		string
	Wallet_coin_stock 			int
	Wallet_coin_avarage_buy 	int
	Wallet_coin_profit 			int
}