module github.com/FX-KNUT/fc-/backend/controller/block

go 1.17

replace github.com/FX-KNUT/fc-/backend/entity => ../../entity

require (
	github.com/FX-KNUT/fc-/backend/entity v0.0.0-00010101000000-000000000000
	github.com/FX-KNUT/fc-/backend/service v0.0.0-20211124055800-4f94789939d3
)

require (
	github.com/FX-KNUT/fc-/backend/database v0.0.0-20211124055800-4f94789939d3 // indirect
	github.com/go-sql-driver/mysql v1.6.0 // indirect
)
