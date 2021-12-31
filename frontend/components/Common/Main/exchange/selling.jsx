import { useState } from "react";
import styles from "../../../../styles/main/exchange/_selling.module.scss";

const Selling = ({ _obj_coin }) => {
  const [buy_info, set_buy_info] = useState({
    price: _obj_coin.price,
    quantity: 0,
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
    <div className={styles.selling_wrapper}>
      <form className={styles.selling_form} onSubmit={on_submit}>
        <div className={styles.selling_form_grid}>
          <span>주문구분</span>
          <div className={styles.ordering_wrapper}>
            <div>
              <input
                type="radio"
                name="ordering"
                id="designate"
                value="designate"
                checked
                readOnly
              />
              <label htmlFor="designate">지정가</label>
            </div>
            <div>
              <input
                type="radio"
                name="ordering"
                id="market"
                value="market"
                readOnly
              />
              <label htmlFor="market">시장가</label>
            </div>
          </div>
          <span>주문가능</span>
          <div className={styles.order_wrapper}>
            <span>0</span>
            <span>KRW</span>
          </div>
          <span>매도가격</span>
          <div className={styles.selling_price_wrapper}>
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
          <div className={styles.selling_quantity_wrapper}>
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
            <span>주문총액</span>
          </div>
        </div>
        <button type="submit" className={styles.selling_btn}>
          매도
        </button>
      </form>
    </div>
  );
};

export default Selling;
