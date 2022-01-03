-- 2022 01 04 02:00 AM. wallet after
create table wallet (
    wallet_owner            varchar(15),
    wallet_balance          int,
    wallet_gunwonjungbo     int default 0,
    wallet_haedongtongbo    int default 0,
    wallet_hwalgu           int default 0,
    wallet_bannyangjun      int default 0,
    wallet_myungdojun       int default 0,
    wallet_oban             int default 0,
    wallet_tainhwapye       int default 0,
    wallet_dollar           int default 0,
    primary key(wallet_owner)
);