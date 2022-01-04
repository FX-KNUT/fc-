import styles from "../../../../styles/main/guide/_guide_type_wrapper.module.scss";

const Guide_type_wrapper = ({ children, g_type }) => {
  return (
    <section className={styles.guide_type_wrapper}>
      <h2>{g_type}</h2>
      {children}
    </section>
  );
};

export default Guide_type_wrapper;
