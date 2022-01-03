import styles from "../../../../styles/main/guide/_guide_wrapper.module.scss";
import Guide_menu from "./guide_menu";
import Guide_contents_wrapper from "./guide_contents_wrapper";

const Guide_wrapper = ({ children }) => {
  return (
    <main className={styles.guide_wrapper}>
      <Guide_menu></Guide_menu>
      {/* <Guide_contents_wrapper>{children}</Guide_contents_wrapper> */}
      {children}
    </main>
  );
};

export default Guide_wrapper;
