import Ranking from "../../components/Common/Main/exchange/Ranking";
import Card_pad from "../../components/Reusable/t_fx__card_pad";
import Summary from "../../components/Common/Main/exchange/summary";
import Trade from "../../components/Common/Main/exchange/trade";
import Chart from "../../components/Common/Main/exchange/chart";
import Ask_price from "../../components/Common/Main/exchange/ask_price";
import styles from "../../styles/main/exchange/_coin.module.scss";
import axios from "axios";
import { useRouter } from "next/router";

const dummy_summary = {
  coin_name_kr: "비트코인",
  coin_name_en: "BTC",
  price: "59,955,000",
  fluctuation_rate: "+0.49%",
  volume: "37,611백만",
};

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
    component: <Ranking></Ranking>,
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
    <div className={styles.exchange_wrapper}>
      {exchange_components.map((component) => {
        const cn = component.alt + "_wrapper";
        return (
          <div key={component.alt} className={styles[cn]}>
            <Card_pad>{component.component}</Card_pad>
          </div>
        );
      })}
    </div>
  );
};

// export async function getServerSideProps({ query }) {
//   console.log(query.coin);

//   return;
// }

export default Coin;
