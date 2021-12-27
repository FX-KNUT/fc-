import { useState } from "react";
import styles from "../../../../styles/main/exchange/_trade.module.scss";
import Buying from "./buying";
import Selling from "./selling";
import Transaction from "./transaction";

const nav_items = [
  {
    idx: 0,
    text: "매수",
  },
  {
    idx: 1,
    text: "매도",
  },
  {
    idx: 2,
    text: "거래내역",
  },
];

const Trade = () => {
  // local state
  const [nav_idx, set_nav_idx] = useState(0);

  // event
  const on_click_nav_item = (e) => {
    switch (e.target.innerText) {
      case "매수":
        set_nav_idx(0);
        break;
      case "매도":
        set_nav_idx(1);
        break;
      case "거래내역":
        set_nav_idx(2);
        break;
      default:
    }
  };
  return (
    <div className={styles.trade_wrapper}>
      <div className={styles.trade_nav_wrapper} onClick={on_click_nav_item}>
        <div className={styles.trade_nav}>
          {nav_items.map((item) => (
            <div
              key={item.idx}
              className={`${styles.nav_item} ${
                nav_idx === item.idx && styles.on
              }`}
            >
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
      <div>
        {nav_idx === 0 ? (
          <Buying></Buying>
        ) : nav_idx === 1 ? (
          <Selling></Selling>
        ) : (
          <Transaction></Transaction>
        )}
      </div>
    </div>
  );
};

export default Trade;
