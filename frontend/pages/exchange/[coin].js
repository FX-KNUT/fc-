import Ranking from "../../components/Common/Main/exchange/Ranking";
import Card_pad from "../../components/Reusable/t_fx__card_pad";
import Summary from "../../components/Common/Main/exchange/summary";
import Trade from "../../components/Common/Main/exchange/trade";
import Chart from "../../components/Common/Main/exchange/chart";
import Ask_price from "../../components/Common/Main/exchange/ask_price";
import styles from "../../styles/main/exchange/_coin.module.scss";
import axios from "axios";

const Coin = () => {
  return (
    <div className={styles.exchange_wrapper}>
      <div className={styles.summary_wrapper}>
        <Card_pad>
          <Summary></Summary>
        </Card_pad>
      </div>
      <div className={styles.chart_wrapper}>
        <Card_pad>
          <Chart></Chart>
        </Card_pad>
      </div>
      <div className={styles.ranking_wrapper}>
        <Card_pad>
          <Ranking></Ranking>
        </Card_pad>
      </div>
      <div className={styles.order_wrapper}>
        <Card_pad>
          <Ask_price></Ask_price>
        </Card_pad>
      </div>
      <div className={styles.trade_wrapper}>
        <Card_pad>
          <Trade></Trade>
        </Card_pad>
      </div>
    </div>
  );
};

// export async function getStaticProps() {
//   try {
//     const res = await axios.get();
//     const data = await res.json();
//   } catch (e) {
//     console.error(e);
//   }

//   return {
//     props: {
//       data,
//     },
//   };
// }

export default Coin;
