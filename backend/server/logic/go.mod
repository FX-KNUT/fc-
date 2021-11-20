module github.com/FX-KNUT/fc-/backend/server/logic

go 1.17

replace github.com/FX-KNUT/fc-/backend/service => ../../service

replace github.com/FX-KNUT/fc-/backend/entity => ../../entity

require (
	github.com/FX-KNUT/fc-/backend/entity v0.0.0-00010101000000-000000000000
	github.com/FX-KNUT/fc-/backend/service v0.0.0-00010101000000-000000000000
)

require (
	github.com/jinzhu/gorm v1.9.16 // indirect
	github.com/jinzhu/inflection v1.0.0 // indirect
)
