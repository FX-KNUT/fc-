import { useSetRecoilState } from "recoil";
import { price_state } from "../../../../recoil/atoms/atoms";
import styles from "../../../../styles/main/trade/_ask_price_item.module.scss";

const Ask_price_item = ({ _int_price, _int_volume }) => {
  const price = _int_price;
  const set_glo_price = useSetRecoilState(price_state);

  const on_click_price = () => {
    set_glo_price(price);
  };
  return (
    <div className={styles.ask_item_container}>
      <div className={styles.item__price}>
        <span className={styles.price} onClick={on_click_price}>
          {price.toLocaleString()}
        </span>
      </div>
      <div className={styles.item__volume}>
        <span>{_int_volume.toLocaleString()}</span>
      </div>
    </div>
  );
};

export default Ask_price_item;
