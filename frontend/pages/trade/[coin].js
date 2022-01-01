import Ranking from "../../components/Common/Main/trade/Ranking";
import Card_pad from "../../components/Reusable/t_fx__card_pad";
import Summary from "../../components/Common/Main/trade/summary";
import Trade from "../../components/Common/Main/trade/trade";
import Chart from "../../components/Common/Main/trade/chart";
import Ask_price from "../../components/Common/Main/trade/ask_price";
import styles from "../../styles/main/trade/_coin.module.scss";
import { useSetRecoilState } from "recoil";
import { price_state } from "../../recoil/atoms/atoms";
import { useEffect } from "react";

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
};

const { dummy_coin } = dummy_data;

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
    component: <Ranking></Ranking>,
  },
  {
    alt: "order",
    component: <Ask_price _int_price={dummy_coin.price}></Ask_price>,
  },
  {
    alt: "trade",
    component: <Trade></Trade>,
  },
];

const Coin = () => {
  const set_order_price = useSetRecoilState(price_state);
  useEffect(() => {
    set_order_price(dummy_coin.price);
  });
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
