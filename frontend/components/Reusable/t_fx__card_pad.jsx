import styles from "../../styles/t_fx_comp.module.scss";

const t_fx__card_pad = ({ children }) => {
  return <div className={styles.card_pad_wrapper}>{children}</div>;
};

export default t_fx__card_pad;
