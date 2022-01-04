import styles from "../../../../../../styles/header/main/session/language/_header_main_session_language.module.scss";
import { language_state } from "../../../../../../recoil/atoms/atoms.js";
import { useState, useRef } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

const language_list = ["한국어", "English"];

const Language = () => {
  // Local state
  const [is_focus, set_is_focus] = useState(false);

  // Global state
  const [curr_lang, set_curr_lang] = useRecoilState(language_state);

  // Local ref
  const ref_lang = useRef();

  // Events
  const fn_on_change_language = (e) => {
    set_curr_lang(e.target.value);
    set_is_focus(false);
    ref_lang.current.blur();
  };

  const fn_on_focus_language = () => set_is_focus(true);
  const fn_on_blur_language = () => set_is_focus(false);

  return (
    <div
      className={`${styles.language_wrapper} ${
        is_focus && styles.active_arrow
      }`}
    >
      <i className="fas fa-globe"></i>
      <select
        onChange={fn_on_change_language}
        onFocus={fn_on_focus_language}
        onBlur={fn_on_blur_language}
        ref={ref_lang}
        defaultValue={curr_lang}
      >
        {language_list.map((lang) => {
          return (
            <option key={lang} value={lang}>
              {lang}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Language;
