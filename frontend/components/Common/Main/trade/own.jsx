import axios from "axios";
import { useEffect, useState } from "react";
import styles from "../../../../styles/main/trade/_own.module.scss";
import Ranking_item from "./ranking_item";

const dummy_own = [
  {
    is_favorite: true,
    coin_name: "차",
    price: 59955000,
    rate: "+0.49%",
    volume: "37,611백만",
  },
  {
    is_favorite: true,
    coin_name: "리플",
    price: "1,212",
    rate: "+3.50%",
    volume: "29,111백만",
  },
  {
    is_favorite: false,
    coin_name: "이더리움",
    price: 4871000,
    rate: "-0.20%",
    volume: "27,387백만",
  },
  {
    is_favorite: false,
    coin_name: "자",
    price: 59955000,
    rate: "+0.49%",
    volume: "37,611백만",
  },
];

const ranking_item_nav = ["코인이름", "현재가", "전일대비", "거래량"];

const Own = () => {
  // local state
  const [own_coin, set_own_coin] = useState(null);

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
    <div className={styles.own_wrapper}>
      <nav className={styles.item_nav}>
        {ranking_item_nav.map((nav_item) => (
          <span key={nav_item}>{nav_item}</span>
        ))}
      </nav>
      {dummy_own.map((coin) => (
        <Ranking_item _obj_coin={coin} key={coin.coin_name}></Ranking_item>
      ))}
    </div>
  );
};

export default Own;
