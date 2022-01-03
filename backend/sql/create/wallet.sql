-- 2022 01 04 02:00 AM. wallet after
create table wallet (
    wallet_owner            varchar(15),
    wallet_balance          int,
    wallet_gunwonjungbo     int,
    wallet_haedongtongbo    int,
    wallet_hwalgu           int,
    wallet_bannyangjun      int,
    wallet_myungdojun       int,
    wallet_oban             int,
    wallet_tainhwapye       int,
    wallet_dollar           int,
    primary key(wallet_owner)
);