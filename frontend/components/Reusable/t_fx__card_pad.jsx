import styles from "../../styles/t_fx_comp.module.scss";

const t_fx__card_pad = ({ _str_color = "#d5d6dc", children }) => {
  return (
    <div
      className={styles.card_pad_wrapper}
      style={{ border: `1px solid ${_str_color}` }}
    >
      {children}
    </div>
  );
};

export default t_fx__card_pad;
