package ctrl_wallet

import (
	"fmt"
	"net/http"

	db "github.com/FX-KNUT/fc-/backend/database"
	"github.com/FX-KNUT/fc-/backend/entity"
	"github.com/FX-KNUT/fc-/backend/service"
	"github.com/gin-gonic/gin"
)

const ERR_CREATING_WALLET string = "error occurred while creating wallet"
const ERR_GETTING_WALLET string = "error occurred while getting A wallet"
const ERR_ID__UNDEFINED string = "error ID undefined"

type Wallet entity.Wallet

type controller struct {
	service service.Wallet_service
}

type Wallet_controller interface {
	GetWallet(*gin.Context, string) error
	GetUserWallet(/* *gin.Context */ string) ([]entity.My_Wallet, error)
	CreateWallet(*gin.Context, entity.User, int) error
}

func New__Wallet(service service.Wallet_service) Wallet_controller {
	return &controller {
		service: service,
	}
}

func (c *controller) GetWallet(ctx *gin.Context, owner string) error {

	wallet, err := c.service.GetWallet(owner)

	if err != nil {
		ctx.String(http.StatusBadGateway, ERR_GETTING_WALLET)
	}

	ctx.JSON(http.StatusOK, gin.H{
		"message": "OK",
		"data": wallet,
	})

	return nil
}

func (c *controller) CreateWallet(ctx *gin.Context, user entity.User, balance int) error {

	err := c.service.CreateWallet(user, balance)

	if err != nil {
		ctx.String(http.StatusBadGateway, ERR_CREATING_WALLET)
		return err
	}

	return nil
}

// 서비스 접근에 버그가 있어 일단 이렇게 ㄱ
func (c *controller) GetUserWallet(/* ctx *gin.Context */ id string) ([]entity.My_Wallet, error) {
	
	var my_wallet []entity.My_Wallet

	// id := ctx.Query("id")
	
	// if len(id) == 0 {
	// 	ctx.String(http.StatusBadRequest, "잘못된 요청입니다.")
	// 	return []entity.My_Wallet{}, errors.New(ERR_ID__UNDEFINED)
	// }

	db := db.Fn_open__db()

	err := func () error {
		query__get_coin_names := "SELECT coin_name, coin_price from coins"

		coin_names, err := db.Query(query__get_coin_names)

		if err != nil {
			return err
		}

		defer coin_names.Close()

		// 행 별로
		for coin_names.Next() {
			var info entity.My_Wallet

			var coin_name string
			var coin_price int
			var coin_stock int
			var coin_txs struct {
				amount int
				quantity int
			}

			// 코인 이름, 코인 가격은 이미 얻었고
			err = coin_names.Scan(&coin_name, &coin_price)

			if err != nil {
				return err
			}

			// 얻은 코인 이름을 기반으로 그 코인을 현재 내가 몇 개 가지고 있나 얻고
			query__get_coin_stock_by_coin_name := fmt.Sprintf("SELECT wallet_%s FROM wallet WHERE wallet_owner = '%s';", coin_name, id)
		
			err := db.QueryRow(query__get_coin_stock_by_coin_name).Scan(&coin_stock)

			// 만약 그 코인을 내가 갖고 있는 수량이 없으면 리턴
			if coin_stock == 0 {
				continue
			}

			if err != nil {
				return err
			}

			// 그 코인을 내가 평균 얼마에 샀는지 계산하기 위해 tx 테이블 접근
			query__get_contracted_txs := fmt.Sprintf("SELECT amount, quantity FROM txs WHERE tx_from = '%s' and coin_name = '%s'", id, "wallet_" + coin_name)

			txs, err := db.Query(query__get_contracted_txs)

			if err != nil {
				return err
			}

			defer txs.Close()

			for txs.Next() {
				var amount int
				var quantity int

				err := txs.Scan(&amount, &quantity)

				if err != nil {
					return err
				}

				coin_txs.amount += amount
				coin_txs.quantity += quantity
			}

			// 코인 이름
			info.Coin_name = coin_name
			// 현재 해당 코인의 주가
			info.Coin_price = coin_price
			// 코인 보유 갯수
			info.Coin_stock = coin_stock
			// 평단가
			info.Coin_average_profit = coin_txs.amount / coin_txs.quantity

			my_wallet = append(my_wallet, info)

		}

		return nil
	}()

	if err != nil {
		fmt.Println("Error while getting wallet of user on GetUserWallet")
		return []entity.My_Wallet{}, err
	}

	// 로그인 시에 리턴하기로 해서, my_wallet과 error를 같이 리턴하기로 함
	// ctx.JSON(http.StatusOK, gin.H{
	// 	"message": "OK",
	// 	"data": my_wallet,
	// })

	return my_wallet, nil
}