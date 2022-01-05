import styles from "../../styles/t_fx_comp.module.scss";
import { useRecoilValue } from "recoil";
import { dark_state } from "../../recoil/atoms/atoms";

const T_fx__card_pad = ({ _str_color = "#d5d6dc", children }) => {
  const is_dark = useRecoilValue(dark_state);
  return (
    <div
      className={`${styles.card_pad_wrapper} ${styles[is_dark && "on"]}`}
      style={{ border: `1px solid ${_str_color}` }}
    >
      {children}
    </div>
  );
};

export default T_fx__card_pad;
