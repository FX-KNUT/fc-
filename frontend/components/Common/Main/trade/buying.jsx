import { useRecoilState } from "recoil";
import { order_state } from "../../../../recoil/atoms/atoms";
import styles from "../../../../styles/main/trade/_buying.module.scss";

const text_head = ["주문가능", "매수가격", "주문수량", "주문총액"];

const Buying = () => {
  const [order, set_order] = useRecoilState(order_state);
  const { price, quantity } = order;

  // input tag(price와 quantity)의 값을 변경할 경우 event
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
    <div className={styles.buying_wrapper}>
      <form className={styles.buying_form} onSubmit={on_submit}>
        <div className={styles.buying_form_grid}>
          <span>{text_head[0]}</span>
          <div className={styles.order_wrapper}>
            <span>0</span>
            <span>KRW</span>
          </div>
          <span>{text_head[1]}</span>
          <div className={styles.buying_price_wrapper}>
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
          <span>{text_head[2]}</span>
          <div className={styles.buying_quantity_wrapper}>
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
          <span>{text_head[3]}</span>
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
