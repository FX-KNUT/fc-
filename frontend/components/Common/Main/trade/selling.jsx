import { useRecoilState } from "recoil";
import { order_state } from "../../../../recoil/atoms/atoms";
import styles from "../../../../styles/main/trade/_selling.module.scss";

const Selling = () => {
  const [order, set_order] = useRecoilState(order_state);
  const { price, quantity } = order;

  const on_change = (e) => {
    set_order({
      ...order,
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
              onChange={on_change}
            />
            <button
              type="button"
              onClick={() => set_order({ ...order, price: price - 1 })}
            >
              -
            </button>
            <button
              type="button"
              onClick={() => set_order({ ...order, price: price + 1 })}
            >
              +
            </button>
          </div>
          <span>주문수량</span>
          <div className={styles.selling_quantity_wrapper}>
            <input
              type="number"
              name="quantity"
              value={quantity}
              onChange={on_change}
            />
            <button
              type="button"
              onClick={() => set_order({ ...order, quantity: quantity - 1 })}
            >
              -
            </button>
            <button
              type="button"
              onClick={() => set_order({ ...order, quantity: quantity + 1 })}
            >
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
