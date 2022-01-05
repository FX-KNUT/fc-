import { useState } from "react";
import styles from "../../../../../styles/header/main/session/login/_header_main_session_login.module.scss";

const str_TEXT_EMAIL = "이메일";
const str_PLACEHOLDER_EMAIL = "Email";
const STR_BTN__OK = "확인";
const STR_BTN__CANCEL = "취소";

const find_id: React.FC = () => {
  const [state__email, set_state__email] = useState("");

  const fn_on_ok = () => {
    window.alert("기능 구현 중입니다.");
  };

  const fn_on_cancel = () => {
    window.alert("기능 구현 중입니다.");
  };

  return (
    <>
      <div className={styles.find_id_container}>
        <span>회원가입 시 입력한 이메일을 입력해주세요.</span>
        <fieldset>
          <legend>{str_TEXT_EMAIL}</legend>
          <input
            type="text"
            value={state__email}
            onChange={(e) => set_state__email(e.target.value)}
            placeholder={str_PLACEHOLDER_EMAIL}
          />
        </fieldset>
        <div className={styles.find_pw_container_btn_container}>
          <div onClick={fn_on_ok}>{STR_BTN__OK}</div>
          <div onClick={fn_on_cancel}>{STR_BTN__CANCEL}</div>
        </div>
      </div>
    </>
  );
};

export default find_id;
