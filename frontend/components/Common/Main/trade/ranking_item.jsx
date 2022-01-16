import Link from "next/link";
import styles from "../../../../styles/main/trade/_ranking_item.module.scss";

const Ranking_item = ({ _obj_coin }) => {
  const { Coin_name, Coin_price__now, Coin_price__start, Coin_trade_times } =
    _obj_coin;

  const condition = Coin_price__start - Coin_price__now < 0 ? "plus" : "minus";

  return (
    <div className={styles.ranking_item}>
      <div className={styles.item_name}>
        <Link href={`/trade/${Coin_name}`}>
          <a>
            <div className={styles.Coin_name}>{Coin_name}</div>
          </a>
        </Link>
      </div>
      <div className={`${styles.item_price} ${styles[condition]}`}>
        {Coin_price__now}
      </div>
      <div className={`${styles.item_rate} ${styles[condition]}`}>
        {Coin_price__now / (Coin_price__start + 1)}%
      </div>
      <div className={styles.item_volume}>{Coin_trade_times}</div>
    </div>
  );
};

export default Ranking_item;
