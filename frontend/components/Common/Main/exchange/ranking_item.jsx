import styles from "../../../../styles/main/exchange/_ranking_item.module.scss";

const Ranking_item = ({ _obj_coin }) => {
  const { is_favorite, coin_name_kr, coin_name_en, price, rate, volume } =
    _obj_coin;

  const condition = rate.substring(0, 1) === "+" ? "plus" : "minus";

  return (
    <div className={styles.ranking_item}>
      <div>
        {is_favorite ? (
          <i className="fas fa-star"></i>
        ) : (
          <i className="far fa-star"></i>
        )}
      </div>
      <div className={styles.item_name}>
        <div className={styles.coin_name_kr}>{coin_name_kr}</div>
        <div className={styles.coin_name_en}>{coin_name_en}</div>
      </div>
      <div className={`${styles.item_price} ${styles[condition]}`}>{price}</div>
      <div className={`${styles.item_rate} ${styles[condition]}`}>{rate}</div>
      <div className={styles.item_volume}>{volume}</div>
    </div>
  );
};

export default Ranking_item;
