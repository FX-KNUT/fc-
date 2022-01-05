import { useState } from "react";
import styles from "../../../../../styles/header/main/session/login/_header_main_session_login.module.scss";

const str_TEXT_ID = "아이디";
const str_TEXT_EMAIL = "이메일";
const str_PLACEHOLDER_ID = "ID";
const str_PLACEHOLDER_EMAIL = "Email";
const STR_BTN__OK = "확인";
const STR_BTN__CANCEL = "취소";

const find_pw: React.FC = () => {
  const [state__id, set_state__id] = useState("");
  const [state__email, set_state__email] = useState("");

  const fn_on_ok = () => {
    window.alert("기능 구현 중입니다.");
  };

  const fn_on_cancel = () => {
    window.alert("기능 구현 중입니다.");
  };

  return (
    <>
      <div className={styles.find_pw_container}>
        <span>아이디를 입력해주세요.</span>
        <fieldset>
          <legend>{str_TEXT_ID}</legend>
          <input
            type="text"
            value={state__id}
            onChange={(e) => set_state__id(e.target.value)}
            placeholder={str_PLACEHOLDER_ID}
          />
        </fieldset>
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

export default find_pw;
