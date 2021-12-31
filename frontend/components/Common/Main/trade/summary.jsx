import styles from "../../../../styles/main/trade/_summary.module.scss";

const summary = ({ _obj_coin }) => {
  const { is_favorite, coin_name, price, rate, volume, high_price, low_price } =
    _obj_coin;

  const price_detail_list = [
    { name: "고가", value: high_price },
    { name: "저가", value: low_price },
    { name: "거래대금", value: volume },
  ];

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
      <div className={styles.price_detail_wrapper}>
        {price_detail_list.map((price_detail_item) => (
          <div
            key={price_detail_item.name}
            className={styles.price_detail_item}
          >
            <span className={styles.price_detail_name}>
              {price_detail_item.name}
            </span>
            <span>{price_detail_item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default summary;
