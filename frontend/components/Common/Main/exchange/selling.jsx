import { useState } from "react";
import styles from "../../../../styles/main/exchange/_selling.module.scss";

const Selling = () => {
  const [quantity, set_quantity] = useState(0);
  return (
    <div className={styles.selling_wrapper}>
      <form className={styles.selling_form} method="post">
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
              />
              <label htmlFor="designate">지정가</label>
            </div>
            <div>
              <input type="radio" name="ordering" id="market" value="market" />
              <label htmlFor="market">시장가</label>
            </div>
          </div>
          <span>주문가능</span>
          <div className={styles.order_wrapper}>
            <span>0</span>
            <span>KRW</span>
          </div>
          <span>매수가격</span>
          <div className={styles.buying_price_wrapper}>
            <input type="text" />
            <button type="button">-</button>
            <button type="button">+</button>
          </div>
          <span>주문수량</span>
          <div className={styles.buying_quantity_wrapper}>
            <input type="text" value={quantity} />
            <button type="button" onClick={() => set_quantity(quantity - 1)}>
              -
            </button>
            <button type="button" onClick={() => set_quantity(quantity + 1)}>
              +
            </button>
          </div>
          <span>주문총액</span>
          <div className={styles.total}>
            <span>주문총액</span>
          </div>
        </div>
        <button type="submit" className={styles.buying_btn}>
          매수
        </button>
      </form>
    </div>
  );
};

export default Selling;
