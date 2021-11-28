module github.com/FX-KNUT/fc-/backend/controller/block

go 1.17

replace github.com/FX-KNUT/fc-/backend/entity => ../../entity

replace github.com/FX-KNUT/fc-/backend/service => ../../service

require (
	github.com/FX-KNUT/fc-/backend/entity v0.0.0-00010101000000-000000000000
	github.com/FX-KNUT/fc-/backend/service v0.0.0-00010101000000-000000000000
)

require (
	github.com/FX-KNUT/fc-/backend/database v0.0.0-20211126145401-28d087d7aa69 // indirect
	github.com/go-sql-driver/mysql v1.6.0 // indirect
)
