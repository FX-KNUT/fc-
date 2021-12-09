import Ic_palette from "../../../../../../public/ic_palette.svg";
import styles from "../../../../../../styles/header/main/session/palette/_header_main_session_palette.module.scss";

const palette = () => {
  return (
    <div className={styles.palette_wrapper}>
      <label htmlFor="colorpicker">
        <Ic_palette />
      </label>
      <input
        id="colorpicker"
        type="color"
        role="colorpicker"
        aria-roledescription="colorpicker"
      />
    </div>
  );
};

export default palette;
