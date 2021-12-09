import styles from "../../../../../../styles/header/main/session/language/_header_main_session_language.module.scss";
import Ic_earth from "../../../../../../public/ic_earth.svg";
import { language_state } from "../../../../../../recoil/atoms/atoms.js";
import { useRecoilState, useSetRecoilState } from "recoil";

const language_list = ["한국어", "English"];

const Language = () => {
  // global state
  const set_language = useSetRecoilState(language_state);

  // event
  const fn_on_change_language = (e) => {
    set_language(e.target.value);
  };
  return (
    <div className={styles.language_wrapper}>
      <Ic_earth />
      <select onChange={fn_on_change_language}>
        {language_list.map((lang) => (
          <option key={lang} value={lang}>
            {lang}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Language;
