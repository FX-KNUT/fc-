package entity

type Stock struct {
	name             string
	tx_price_now     int
	tx_price_history []int
}