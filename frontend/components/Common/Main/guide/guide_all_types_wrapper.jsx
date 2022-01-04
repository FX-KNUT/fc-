import styles from "../../../../styles/main/guide/_guide_all_types_wrapper.module.scss";

const Guide_all_types_wrapper = ({ children }) => {
  return <div className={styles.guide_contents_wrapper}>{children}</div>;
};

export default Guide_all_types_wrapper;
