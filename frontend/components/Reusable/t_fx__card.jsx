import styles from "../../styles/t_fx_comp.module.scss";

const t_fx__card = ({ _str_title, children }) => {
  return (
    <div className={styles.comp_card}>
      <div>
        <span>{_str_title}</span>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default t_fx__card;
