import styles from "../../../../styles/main/wallet/_wallet.module.scss";
import Chart from "react-google-charts";

const dummy_wallet = [
  ["Coin", "Per"],
  ["Wendy", 10],
  ["Winter", 5],
  ["IU", 22],
];

const pie_chart = () => {
  return (
    <div className={styles.wallet_chart_container}>
      <Chart
        width={400}
        height={400}
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
