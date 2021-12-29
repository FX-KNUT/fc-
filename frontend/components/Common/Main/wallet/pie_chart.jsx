import styles from "../../../../styles/main/wallet/_wallet.module.scss";
import Chart from "react-google-charts";

const dummy_wallet = [
  ["Coin", "Per"],
  ["상평통보", 154.4],
  ["경호뚱땡보", 85.2],
  ["하민울보", 1663.2],
];

const pie_chart = () => {
  return (
    <div className={styles.wallet_chart_container}>
      <Chart
        width={300}
        height={300}
        chartType="PieChart"
        loader={<div>Loading Your Wallet</div>}
        data={dummy_wallet}
        options={{
          title: "Your Wallet",
        }}
        rootProps={{ "data-testid": "1" }}
      />
    </div>
  );
};

export default pie_chart;
