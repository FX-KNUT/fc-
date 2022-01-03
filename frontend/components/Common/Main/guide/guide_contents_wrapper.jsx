import styles from "../../../../styles/main/guide/_guide_contents_wrapper.module.scss";

const Guide_contents_wrapper = ({ children }) => {
  return <div className={styles.guide_contents_wrapper}>{children}</div>;
};

export default Guide_contents_wrapper;
