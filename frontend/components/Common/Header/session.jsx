import Login from "../../../public/ic_login.svg";
import Palette from "../../../public/ic_palette.svg";
import Earth from "../../../public/ic_earth.svg";
import styles from "../../../styles/_header.module.scss";
import { useRecoilState } from "recoil";
import { language_state } from "../../../recoil/atoms/atoms.js";
import Modal from "../../Reusable/t_fx__modal";
import { useState } from "react";

const language_list = ["한국어", "English"];

const Session = () => {
  // state
  const [is_show__modal, set_is_show__modal] = useState(false);

  // global state
  const [language, set_language] = useRecoilState(language_state);

  // event
  const fn_on_close = () => {
    set_is_show__modal(false);
  };

  const fn_on_change_language = (e) => {
    set_language(e.target.value);
  };
  // dummy
  const dummy_child = <div>dummy children</div>;

  return (
    <div>
      <div className={styles.session_wrapper}>
        <div onClick={() => set_is_show__modal(true)}>
          <Login />
          <span className={styles.session_text}>LOGIN</span>
        </div>
        <div className={styles.language_wrapper}>
          <Earth />
          <span className={styles.session_text}>{language}</span>
          <select onChange={fn_on_change_language}>
            {language_list.map((lang) => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="colorpicker">
            <Palette />
          </label>
          <input
            id="colorpicker"
            type="color"
            role="colorpicker"
            aria-roledescription="colorpicker"
            className={styles.input_color}
          />
        </div>
      </div>
      <Modal is_show__modal={is_show__modal} fn_on_close={fn_on_close}>
        {dummy_child}
      </Modal>
    </div>
  );
};

export default Session;
