import { useEffect } from "react";
import styles from "../../../../styles/main/trade/_all.module.scss";
import Ranking_item from "./ranking_item";

const ranking_item_nav = ["코인이름", "현재가", "전일대비", "거래량"];

const dummy_coins = [
  {
    is_favorite: true,
    coin_name: "Cha",
    price: 59955000,
    rate: "+0.49%",
    volume: "37,611백만",
  },
  {
    is_favorite: true,
    coin_name: "BTC",
    price: "1,212",
    rate: "+3.50%",
    volume: "29,111백만",
  },
  {
    is_favorite: true,
    coin_name: "Min",
    price: 4871000,
    rate: "-0.20%",
    volume: "27,387백만",
  },
  {
    is_favorite: false,
    coin_name: "JA",
    price: 59955000,
    rate: "+0.49%",
    volume: "37,611백만",
  },
  {
    is_favorite: false,
    coin_name: "A",
    price: 59955000,
    rate: "+0.49%",
    volume: "37,611백만",
  },
  {
    is_favorite: false,
    coin_name: "SA",
    price: 59955000,
    rate: "+0.49%",
    volume: "37,611백만",
  },
  {
    is_favorite: false,
    coin_name: "BA",
    price: 59955000,
    rate: "+0.49%",
    volume: "37,611백만",
  },
  {
    is_favorite: false,
    coin_name: "MA",
    price: 59955000,
    rate: "+0.49%",
    volume: "37,611백만",
  },
  {
    is_favorite: false,
    coin_name: "RA",
    price: 59955000,
    rate: "+0.49%",
    volume: "37,611백만",
  },
  {
    is_favorite: false,
    coin_name: "DA",
    price: 59955000,
    rate: "+0.49%",
    volume: "37,611백만",
  },
  {
    is_favorite: false,
    coin_name: "NA",
    price: 59955000,
    rate: "+0.49%",
    volume: "37,611백만",
  },
  {
    is_favorite: false,
    coin_name: "GA",
    price: 59955000,
    rate: "+0.49%",
    volume: "37,611백만",
  },
  {
    is_favorite: false,
    coin_name: "KA",
    price: 59955000,
    rate: "+0.49%",
    volume: "37,611백만",
  },
  {
    is_favorite: false,
    coin_name: "TA",
    price: 59955000,
    rate: "+0.49%",
    volume: "37,611백만",
  },
  {
    is_favorite: false,
    coin_name: "PA",
    price: 59955000,
    rate: "+0.49%",
    volume: "37,611백만",
  },
];

const All = () => {
  return (
    <div className={styles.ranking_items}>
      <nav className={styles.item_nav}>
        {ranking_item_nav.map((nav_item) => (
          <span key={nav_item}>{nav_item}</span>
        ))}
      </nav>
      <div className={styles.ranking_item_container}>
        {dummy_coins.map((coin) => (
          <Ranking_item _obj_coin={coin} key={coin.coin_name}></Ranking_item>
        ))}
      </div>
    </div>
  );
};

export default All;
