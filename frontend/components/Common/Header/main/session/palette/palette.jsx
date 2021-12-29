import { useRecoilState } from "recoil";
import styles from "../../../../../../styles/header/main/session/palette/_header_main_session_palette.module.scss";
import { color } from "../../../../../../recoil/atoms/atoms";

const Palette = () => {
  // global state
  const [curr_color, set_curr_color] = useRecoilState(color);

  // event
  const on_change_color = (e) => {
    set_curr_color(e.target.value);
  };

  return (
    <div className={styles.palette_wrapper}>
      <label htmlFor="colorpicker">
        <i className="fas fa-palette"></i>
      </label>
      <input
        id="colorpicker"
        type="color"
        role="colorpicker"
        aria-roledescription="colorpicker"
        value={curr_color}
        onChange={on_change_color}
      />
    </div>
  );
};

export default Palette;
