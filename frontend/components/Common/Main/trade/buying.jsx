import { useState } from "react";
import styles from "../../../../styles/main/trade/_buying.module.scss";

const buying_text = [
  "주문구분",
  "주문가능",
  "매수가격",
  "주문수량",
  "주문총액",
];

const Buying = ({ _obj_coin }) => {
  const [buy_info, set_buy_info] = useState({
    price: _obj_coin.price,
    quantity: 1,
  });
  const { price, quantity } = buy_info;

  const on_change = (e) => {
    set_buy_info({
      ...buy_info,
      [e.target.name]: e.target.value,
    });
  };

  const on_submit = (e) => {
    e.preventDefault();
    console.log(price, quantity);
  };
  return (
    <div className={styles.buying_wrapper}>
      <form className={styles.buying_form} onSubmit={on_submit}>
        <div className={styles.buying_form_grid}>
          <span>주문가능</span>
          <div className={styles.order_wrapper}>
            <span>0</span>
            <span>KRW</span>
          </div>
          <span>매수가격</span>
          <div className={styles.buying_price_wrapper}>
            <input
              type="text"
              name="price"
              value={price}
              onChange={on_change}
            />
            <button type="button">-</button>
            <button type="button">+</button>
          </div>
          <span>주문수량</span>
          <div className={styles.buying_quantity_wrapper}>
            <input
              type="text"
              name="quantity"
              value={quantity}
              onChange={on_change}
            />
            <button
              type="button"
              onClick={() =>
                set_buy_info({ ...buy_info, quantity: quantity - 1 })
              }
            >
              -
            </button>
            <button
              type="button"
              onClick={() =>
                set_buy_info({ ...buy_info, quantity: quantity + 1 })
              }
            >
              +
            </button>
          </div>
          <span>주문총액</span>
          <div className={styles.total}>
            <span>{(price * quantity).toLocaleString()}</span>
          </div>
        </div>
        <button type="submit" className={styles.buying_btn}>
          매수
        </button>
      </form>
    </div>
  );
};

export default Buying;
