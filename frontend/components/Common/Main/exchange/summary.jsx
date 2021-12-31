import styles from "../../../../styles/main/exchange/_summary.module.scss";

const summary = ({ _obj_coin }) => {
  const { is_favorite, coin_name, price, rate, volume, high_price, low_price } =
    _obj_coin;

  const condition = rate.substring(0, 1) === "+" ? "plus" : "minus";

  return (
    <div className={styles.summary_wrapper}>
      <div className={styles.coin_name_wrapper}>
        {is_favorite ? (
          <i className="fas fa-star"></i>
        ) : (
          <i className="far fa-star"></i>
        )}
        <span>{coin_name}</span>
      </div>
      <div className={`${styles.price_rate_wrapper} ${styles[condition]}`}>
        <span className={styles.price}>{price.toLocaleString()}</span>
        <span className={styles.rate}>{rate}</span>
      </div>
      <div>
        <span>{volume}</span>
        <span>고가{high_price}</span>
        <span>저가{low_price}</span>
      </div>
    </div>
  );
};

export default summary;
