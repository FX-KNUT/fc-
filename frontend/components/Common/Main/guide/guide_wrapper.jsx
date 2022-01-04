import styles from "../../../../styles/main/guide/_guide_wrapper.module.scss";
import Guide_menu from "./guide_menu";
import Guide_all_types_wrapper from "./guide_all_types_wrapper";

const Guide_wrapper = ({ children }) => {
  return (
    <main className={styles.guide_wrapper}>
      <Guide_menu></Guide_menu>
      {children}
    </main>
  );
};

export default Guide_wrapper;
