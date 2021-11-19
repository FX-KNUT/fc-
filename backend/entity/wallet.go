package entity

type Wallet []Owned_coin

type Owned_coin struct {
	Company string
	Balance float64
}