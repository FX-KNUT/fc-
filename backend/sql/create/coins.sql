create table coins (
    coin_name varchar(24),
    coin_price int,
    coin_total_star int,
    coin_continent  varchar(16),
    coin_country    varchar(16),
    material_name   varchar(16),
    primary key(coin_name),
    foreign key(material_name) REFERENCES material (material_name)
);