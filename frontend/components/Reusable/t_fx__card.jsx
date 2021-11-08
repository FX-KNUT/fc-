import styles from "../../styles/t_fx_comp.module.css";

const t_fx__card = ({ children }) => {
  return (
    <>
      <div className={styles.comp_card}>{children}</div>
    </>
  );
};

export default t_fx__card;
