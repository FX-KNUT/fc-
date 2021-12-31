import Ranking from "../../components/Common/Main/trade/Ranking";
import Card_pad from "../../components/Reusable/t_fx__card_pad";
import Summary from "../../components/Common/Main/trade/summary";
import Trade from "../../components/Common/Main/trade/trade";
import Chart from "../../components/Common/Main/trade/chart";
import Ask_price from "../../components/Common/Main/trade/ask_price";
import styles from "../../styles/main/trade/_coin.module.scss";

const dummy_data = {
  dummy_coin: {
    is_favorite: true,
    coin_name: "차",
    price: 59955000,
    rate: "+0.49%",
    volume: "37,611백만",
    high_price: 61000000,
    low_price: 59000000,
  },

  dummy_coins: [
    {
      is_favorite: true,
      coin_name: "차",
      price: 59955000,
      rate: "+0.49%",
      volume: "37,611백만",
    },
    {
      is_favorite: true,
      coin_name: "리플",
      price: "1,212",
      rate: "+3.50%",
      volume: "29,111백만",
    },
    {
      is_favorite: true,
      coin_name: "이더리움",
      price: 4871000,
      rate: "-0.20%",
      volume: "27,387백만",
    },
    {
      is_favorite: false,
      coin_name: "자",
      price: 59955000,
      rate: "+0.49%",
      volume: "37,611백만",
    },
    {
      is_favorite: false,
      coin_name: "아",
      price: 59955000,
      rate: "+0.49%",
      volume: "37,611백만",
    },
    {
      is_favorite: false,
      coin_name: "사",
      price: 59955000,
      rate: "+0.49%",
      volume: "37,611백만",
    },
    {
      is_favorite: false,
      coin_name: "바",
      price: 59955000,
      rate: "+0.49%",
      volume: "37,611백만",
    },
    {
      is_favorite: false,
      coin_name: "마",
      price: 59955000,
      rate: "+0.49%",
      volume: "37,611백만",
    },
    {
      is_favorite: false,
      coin_name: "라",
      price: 59955000,
      rate: "+0.49%",
      volume: "37,611백만",
    },
    {
      is_favorite: false,
      coin_name: "다",
      price: 59955000,
      rate: "+0.49%",
      volume: "37,611백만",
    },
    {
      is_favorite: false,
      coin_name: "나",
      price: 59955000,
      rate: "+0.49%",
      volume: "37,611백만",
    },
    {
      is_favorite: false,
      coin_name: "가",
      price: 59955000,
      rate: "+0.49%",
      volume: "37,611백만",
    },
    {
      is_favorite: false,
      coin_name: "카",
      price: 59955000,
      rate: "+0.49%",
      volume: "37,611백만",
    },
    {
      is_favorite: false,
      coin_name: "타",
      price: 59955000,
      rate: "+0.49%",
      volume: "37,611백만",
    },
    {
      is_favorite: false,
      coin_name: "파",
      price: 59955000,
      rate: "+0.49%",
      volume: "37,611백만",
    },
  ],
};

const { dummy_coin, dummy_coins } = dummy_data;

const exchange_components = [
  {
    alt: "summary",
    component: <Summary _obj_coin={dummy_coin}></Summary>,
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
    component: <Trade _obj_coin={dummy_coin}></Trade>,
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

export default Coin;
