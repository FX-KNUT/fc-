import styles from "../../../../styles/main/exchange/_ranking_item.module.scss";
import Ic_star from "../../../../public/ic_star.svg";

const ranking_item = ({ _obj_coin }) => {
  const { coin_name_kr, coin_name_en, price, fluctuation_rate, volume } =
    _obj_coin;
  return (
    <div className={styles.ranking_item}>
      <Ic_star></Ic_star>
      <div className={styles.item_name}>
        <div className={styles.coin_name_kr}>{coin_name_kr}</div>
        <div className={styles.coin_name_en}>{coin_name_en}</div>
      </div>
      <div className={styles.item_price}>{price}</div>
      <div className={styles.item_rate}>{fluctuation_rate}</div>
      <div className={styles.item_volume}>{volume}</div>
    </div>
  );
};

export default ranking_item;
