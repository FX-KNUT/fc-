import styles from "../../../../styles/main/trade/_ask_price.module.scss";
import Card_pad from "../../../Reusable/t_fx__card_pad";
import Ask_price_item from "./ask_price_item";

const Ask_price = ({ _int_price }) => {
  const price = _int_price;

  const ask__buy = (price) => {
    let arr_buy_item = [];
    for (let i = 0; i < 6; i++) {
      let minus_num = 1000 * i;
      arr_buy_item.push(
        <Ask_price_item
          _int_price={price - minus_num}
          _int_volume={2}
          key={price - minus_num}
        ></Ask_price_item>
      );
    }
    return arr_buy_item;
  };
  const ask__sell = (price) => {
    let arr_buy_item = [];
    for (let i = 0; i < 6; i++) {
      let minus_num = 1000 * i;
      arr_buy_item.push(
        <Ask_price_item
          _int_price={price + minus_num}
          _int_volume={2}
          key={price + minus_num}
        ></Ask_price_item>
      );
    }
    return arr_buy_item;
  };
  return (
    <div className={styles.ask_price_wrapper}>
      <div className={styles.ask_buy_wrapper}>
        <Card_pad _str_color="blue">{ask__buy(price)}</Card_pad>
      </div>
      <div className={styles.ask_sell_wrapper}>
        <Card_pad _str_color="red">{ask__sell(price)}</Card_pad>
      </div>
    </div>
  );
};

export default Ask_price;
