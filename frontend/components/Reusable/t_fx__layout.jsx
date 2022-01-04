import { useRecoilValue } from "recoil";
import { dark_state } from "../../recoil/atoms/atoms";
import HeadInfo from "../Common/HeadInfo";
import styles from "../../styles/t_fx_comp.module.scss";

const T_fx__layout = ({ children }) => {
  const is_dark = useRecoilValue(dark_state);
  return (
    <>
      <HeadInfo></HeadInfo>
      <div className={styles[is_dark && "on"]}>{children}</div>
    </>
  );
};

export default T_fx__layout;
