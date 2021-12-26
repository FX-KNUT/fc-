import styles from "../../../../styles/main/exchange/_ranking.module.scss";
import Ranking_item from "./ranking_item";

const dummy_coins = [
  {
    coin_name_kr: "비트코인",
    coin_name_en: "BTC",
    price: "59,955,000",
    fluctuation_rate: "+0.49%",
    volume: "37,611백만",
  },
  {
    coin_name_kr: "리플",
    coin_name_en: "XRP",
    price: "1,212",
    fluctuation_rate: "+3.50%",
    volume: "29,111백만",
  },
  {
    coin_name_kr: "이더리움",
    coin_name_en: "ETH",
    price: "4,871,000",
    fluctuation_rate: "-0.20%",
    volume: "27,387백만",
  },
  {
    coin_name_kr: "비트코인",
    coin_name_en: "BTC",
    price: "59,955,000",
    fluctuation_rate: "+0.49%",
    volume: "37,611백만",
  },
  {
    coin_name_kr: "비트코인",
    coin_name_en: "BTC",
    price: "59,955,000",
    fluctuation_rate: "+0.49%",
    volume: "37,611백만",
  },
  {
    coin_name_kr: "비트코인",
    coin_name_en: "BTC",
    price: "59,955,000",
    fluctuation_rate: "+0.49%",
    volume: "37,611백만",
  },
  {
    coin_name_kr: "비트코인",
    coin_name_en: "BTC",
    price: "59,955,000",
    fluctuation_rate: "+0.49%",
    volume: "37,611백만",
  },
  {
    coin_name_kr: "비트코인",
    coin_name_en: "BTC",
    price: "59,955,000",
    fluctuation_rate: "+0.49%",
    volume: "37,611백만",
  },
  {
    coin_name_kr: "비트코인",
    coin_name_en: "BTC",
    price: "59,955,000",
    fluctuation_rate: "+0.49%",
    volume: "37,611백만",
  },
  {
    coin_name_kr: "비트코인",
    coin_name_en: "BTC",
    price: "59,955,000",
    fluctuation_rate: "+0.49%",
    volume: "37,611백만",
  },
];

const ranking_nav = ["원화", "보유", "관심"];

const ranking_item_nav = ["코인이름", "현재가", "전일대비", "거래량"];

const Ranking = () => {
  return (
    <main className={styles.ranking_wrapper}>
      <nav className={styles.ranking_nav}>
        {ranking_nav.map((nav_item) => (
          <div key={nav_item} className={styles.nav_item}>
            {nav_item}
          </div>
        ))}
      </nav>
      <div className={styles.ranking_items}>
        <nav className={styles.item_nav}>
          {ranking_item_nav.map((nav_item) => (
            <span key={nav_item}>{nav_item}</span>
          ))}
        </nav>
        {dummy_coins.map((coin) => (
          <Ranking_item _obj_coin={coin} key={coin.coin_name_en}></Ranking_item>
        ))}
      </div>
    </main>
  );
};

export default Ranking;
