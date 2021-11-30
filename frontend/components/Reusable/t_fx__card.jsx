import styles from "../../styles/t_fx_comp.module.css";

const t_fx__card = ({ _str_title, children }) => {
  return (
    <div className={styles.comp_card}>
      <div>{_str_title}</div>
      <div>{children}</div>
    </div>
  );
};

export default t_fx__card;
