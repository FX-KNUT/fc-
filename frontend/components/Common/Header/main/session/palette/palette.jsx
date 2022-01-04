import { useRecoilState } from "recoil";
import { dark_state } from "../../../../../../recoil/atoms/atoms";
import styles from "../../../../../../styles/header/main/session/palette/_header_main_session_palette.module.scss";

const Palette = () => {
  const [is_dark, set_is_dark] = useRecoilState(dark_state);
  return (
    <div className={`${styles.palette_wrapper} ${styles[is_dark && "on"]}`}>
      {is_dark ? (
        <div onClick={() => set_is_dark(false)}>
          <i className="fas fa-toggle-on"></i>
        </div>
      ) : (
        <div onClick={() => set_is_dark(true)}>
          <i className="fas fa-toggle-off"></i>
        </div>
      )}
    </div>
  );
};

export default Palette;
