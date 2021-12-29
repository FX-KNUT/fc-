import styles from "../../../../styles/main/exchange/_all.module.scss";
import Ranking_item from "./ranking_item";

const ranking_item_nav = ["코인이름", "현재가", "전일대비", "거래량"];

const all = ({ _arr_all }) => {
  return (
    <div className={styles.ranking_items}>
      <nav className={styles.item_nav}>
        {ranking_item_nav.map((nav_item) => (
          <span key={nav_item}>{nav_item}</span>
        ))}
      </nav>
      {_arr_all.map((coin) => (
        <Ranking_item _obj_coin={coin} key={coin.coin_name_en}></Ranking_item>
      ))}
    </div>
  );
};

export default all;
