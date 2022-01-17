import axios from "axios";
import { useEffect, useState } from "react";
import styles from "../../../../styles/main/trade/_all.module.scss";
import Ranking_item from "./ranking_item";

const ranking_item_nav = ["코인이름", "현재가", "전일대비", "거래량"];

const IP = process.env.NEXT_PUBLIC_IP;
const ENDPOINT = "/coins";
const URL = `${IP}${ENDPOINT}`;

const All = () => {
  // state
  const [coin_list, set_coin_list] = useState([]);

  const fetch = async () => {
    try {
      const res = await axios.get(URL);
      set_coin_list(res.data.data);
      console.log(res.data.data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div className={styles.ranking_items}>
      <nav className={styles.item_nav}>
        {ranking_item_nav.map((nav_item) => (
          <span key={nav_item}>{nav_item}</span>
        ))}
      </nav>
      <div className={styles.ranking_item_container}>
        {coin_list.map((coin) => (
          <Ranking_item _obj_coin={coin} key={coin.Coin_name}></Ranking_item>
        ))}
      </div>
    </div>
  );
};

export default All;
