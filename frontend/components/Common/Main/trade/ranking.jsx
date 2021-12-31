import { useState } from "react";
import styles from "../../../../styles/main/trade/_ranking.module.scss";
import All from "./all";
import Own from "./own";
import Favorite from "./favorite";

const nav_items = [
  {
    idx: 0,
    text: "All",
  },
  {
    idx: 1,
    text: "보유",
  },
  {
    idx: 2,
    text: "관심",
  },
];

const ranking_item_nav = ["코인이름", "현재가", "전일대비", "거래량"];

const Ranking = ({ _arr_all }) => {
  // local state
  const [nav_idx, set_nav_idx] = useState(0);

  // event
  const on_click_nav_item = (e) => {
    switch (e.target.innerText) {
      case "All":
        set_nav_idx(0);
        break;
      case "보유":
        set_nav_idx(1);
        break;
      case "관심":
        set_nav_idx(2);
        break;
      default:
    }
  };

  return (
    <div className={styles.ranking_wrapper}>
      <nav className={styles.ranking_nav_wrapper} onClick={on_click_nav_item}>
        <div className={styles.ranking_nav}>
          {nav_items.map((item) => (
            <div
              key={item.idx}
              className={`${styles.nav_item} ${
                nav_idx === item.idx && styles.on
              }`}
            >
              {item.text}
            </div>
          ))}
        </div>
      </nav>
      {nav_idx === 0 ? (
        <All _arr_all={_arr_all}></All>
      ) : nav_idx === 1 ? (
        <Own></Own>
      ) : (
        <Favorite></Favorite>
      )}
    </div>
  );
};

export default Ranking;
