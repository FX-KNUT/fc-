import styles from "../../../../styles/main/guide/_guide_type_wrapper.module.scss";

const Guide_type_wrapper = ({ children }) => {
  return <section className={styles.guide_type_wrapper}>{children}</section>;
};

export default Guide_type_wrapper;
