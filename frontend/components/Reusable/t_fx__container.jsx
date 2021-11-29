import styles from "../../styles/t_fx_comp.module.css";

const t_fx__container = ({ children }) => {
  return (
    <>
      <div className={styles.comp_container}>{children}</div>
    </>
  );
};

export default t_fx__container;
