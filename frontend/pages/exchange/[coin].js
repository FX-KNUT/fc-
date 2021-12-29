import Ranking from "../../components/Common/Main/exchange/Ranking";
import Card_pad from "../../components/Reusable/t_fx__card_pad";
import Summary from "../../components/Common/Main/exchange/summary";
import Trade from "../../components/Common/Main/exchange/trade";
import Chart from "../../components/Common/Main/exchange/chart";
import Ask_price from "../../components/Common/Main/exchange/ask_price";
import styles from "../../styles/main/exchange/_coin.module.scss";
import axios from "axios";
import { useRouter } from "next/router";

// Summary dummy data
const dummy_summary = {
  coin_name_kr: "비트코인",
  coin_name_en: "BTC",
  price: "59,955,000",
  rate: "+0.49%",
  volume: "37,611백만",
};

// Ranking dummy data
const dummy_coins = [
  {
    is_favorite: true,
    coin_name_kr: "비트코인",
    coin_name_en: "BTC0",
    price: "59,955,000",
    rate: "+0.49%",
    volume: "37,611백만",
  },
  {
    is_favorite: true,
    coin_name_kr: "리플",
    coin_name_en: "XRP",
    price: "1,212",
    rate: "+3.50%",
    volume: "29,111백만",
  },
  {
    is_favorite: false,
    coin_name_kr: "이더리움",
    coin_name_en: "ETH",
    price: "4,871,000",
    rate: "-0.20%",
    volume: "27,387백만",
  },
  {
    is_favorite: false,
    coin_name_kr: "비트코인",
    coin_name_en: "BTC1",
    price: "59,955,000",
    rate: "+0.49%",
    volume: "37,611백만",
  },
  {
    is_favorite: false,
    coin_name_kr: "비트코인",
    coin_name_en: "BTC2",
    price: "59,955,000",
    rate: "+0.49%",
    volume: "37,611백만",
  },
  {
    is_favorite: false,
    coin_name_kr: "비트코인",
    coin_name_en: "BTC3",
    price: "59,955,000",
    rate: "+0.49%",
    volume: "37,611백만",
  },
  {
    is_favorite: false,
    coin_name_kr: "비트코인",
    coin_name_en: "BTC4",
    price: "59,955,000",
    rate: "+0.49%",
    volume: "37,611백만",
  },
  {
    is_favorite: false,
    coin_name_kr: "비트코인",
    coin_name_en: "BTC5",
    price: "59,955,000",
    rate: "+0.49%",
    volume: "37,611백만",
  },
  {
    is_favorite: false,
    coin_name_kr: "비트코인",
    coin_name_en: "BTC6",
    price: "59,955,000",
    rate: "+0.49%",
    volume: "37,611백만",
  },
  {
    is_favorite: false,
    coin_name_kr: "비트코인",
    coin_name_en: "BTC7",
    price: "59,955,000",
    rate: "+0.49%",
    volume: "37,611백만",
  },
  {
    is_favorite: false,
    coin_name_kr: "비트코인",
    coin_name_en: "BTC8",
    price: "59,955,000",
    rate: "+0.49%",
    volume: "37,611백만",
  },
  {
    is_favorite: false,
    coin_name_kr: "비트코인",
    coin_name_en: "BTC9",
    price: "59,955,000",
    rate: "+0.49%",
    volume: "37,611백만",
  },
];

const exchange_components = [
  {
    alt: "summary",
    component: <Summary _obj_summary={dummy_summary}></Summary>,
  },
  {
    alt: "chart",
    component: <Chart></Chart>,
  },
  {
    alt: "ranking",
    component: <Ranking _arr_all={dummy_coins}></Ranking>,
  },
  {
    alt: "order",
    component: <Ask_price></Ask_price>,
  },
  {
    alt: "trade",
    component: <Trade></Trade>,
  },
];

const Coin = () => {
  return (
    <main className={styles.exchange_wrapper}>
      {exchange_components.map((component) => {
        const cn = component.alt + "_wrapper";
        return (
          <div key={component.alt} className={styles[cn]}>
            <Card_pad>{component.component}</Card_pad>
          </div>
        );
      })}
    </main>
  );
};

// export async function getServerSideProps({ query }) {
//   console.log(query.coin);

//   return;
// }

export default Coin;
