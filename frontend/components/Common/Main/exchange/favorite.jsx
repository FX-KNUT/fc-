import axios from "axios";
import { useState, useEffect } from "react";
import Ranking_item from "./ranking_item";
import styles from "../../../../styles/main/exchange/_favorite.module.scss";

const dummy_favorite = [
  {
    is_favorite: true,
    coin_name_kr: "비트코인",
    coin_name_en: "BTC0",
    price: "59,955,000",
    rate: "+0.49%",
    volume: "37,611백만",
  },
  {
    is_favorite: true,
    coin_name_kr: "리플",
    coin_name_en: "XRP",
    price: "1,212",
    rate: "+3.50%",
    volume: "29,111백만",
  },
];

const ranking_item_nav = ["코인이름", "현재가", "전일대비", "거래량"];

const Favorite = () => {
  // local state
  const [favorite_coin, set_favorite_coin] = useState(null);

  // useEffect
  /* 
  useEffect(() => {
    try {
      const res = axios.get(``);
    } catch (e) {
      console.error(e);
    }
    set_own_coin(res.data);
  }, []);
  */
  return (
    <div className={styles.favorite_wrapper}>
      <nav className={styles.item_nav}>
        {ranking_item_nav.map((nav_item) => (
          <span key={nav_item}>{nav_item}</span>
        ))}
      </nav>
      {dummy_favorite.map((coin) => (
        <Ranking_item _obj_coin={coin} key={coin.coin_name_en}></Ranking_item>
      ))}
    </div>
  );
};

export default Favorite;
