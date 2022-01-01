import styles from "../../../../styles/main/trade/_ask_price.module.scss";
import Card_pad from "../../../Reusable/t_fx__card_pad";

const ask_price = () => {
  return (
    <div className={styles.ask_price_wrapper}>
      <div className={styles.ask_buy_wrapper}>
        <Card_pad _str_color="blue"></Card_pad>
      </div>
      <div className={styles.ask_sell_wrapper}>
        <Card_pad _str_color="red"></Card_pad>
      </div>
    </div>
  );
};

export default ask_price;
