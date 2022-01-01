import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { price_state } from "../../../../recoil/atoms/atoms";
import styles from "../../../../styles/main/trade/_selling.module.scss";

const Selling = () => {
  // global
  const glo_price = useRecoilValue(price_state);

  // local
  const [quantity, set_quantity] = useState(1);
  const [price, set_price] = useState(glo_price);

  // useEffect
  useEffect(() => {
    set_price(glo_price);
  }, [glo_price]);

  // global
  const on_change__price = (e) => {
    set_price(e.target.value);
  };

  // local
  const on_change__quantity = (e) => {
    set_quantity(e.target.value);
  };

  const on_submit = (e) => {
    e.preventDefault();
    console.log(price, quantity);
  };
  return (
    <div className={styles.selling_wrapper}>
      <form className={styles.selling_form} onSubmit={on_submit}>
        <div className={styles.selling_form_grid}>
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
              value={price.toLocaleString()}
              onChange={on_change__price}
            />
            <button type="button" onClick={() => set_price(price - 1)}>
              -
            </button>
            <button type="button" onClick={() => set_price(price + 1)}>
              +
            </button>
          </div>
          <span>주문수량</span>
          <div className={styles.selling_quantity_wrapper}>
            <input
              type="number"
              name="quantity"
              value={quantity}
              onChange={on_change__quantity}
            />
            <button type="button" onClick={() => set_quantity(quantity - 1)}>
              -
            </button>
            <button type="button" onClick={() => set_quantity(quantity + 1)}>
              +
            </button>
          </div>
          <span>주문총액</span>
          <div className={styles.total}>
            <span>{(price * quantity).toLocaleString()}</span>
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
