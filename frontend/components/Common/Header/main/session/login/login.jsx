import { useState } from "react";
import Modal from "../../../../../Reusable/t_fx__modal";
import styles from "../../../../../../styles/header/main/session/login/_header_main_session_login.module.scss";
import Login_form from "./login_form";
import { useRecoilState, useRecoilValue } from "recoil";
import { dark_state, user_state } from "../../../../../../recoil/atoms/atoms";

const Login = () => {
  // state
  const [is_show__modal, set_is_show__modal] = useState(false);

  // global state
  const is_dark = useRecoilValue(dark_state);
  const [user, set_user] = useRecoilState(user_state);
  console.log(user);

  // event
  const fn_on_close = () => {
    set_is_show__modal(false);
  };

  const login_logout_text = () => {
    return user === undefined ? (
      <span onClick={() => set_is_show__modal(true)}>LOGIN</span>
    ) : (
      <span
        onClick={() => {
          sessionStorage.removeItem("user-fc");
          set_user(undefined);
        }}
      >
        LOGOUT
      </span>
    );
  };

  return (
    <div>
      <div
        className={`${styles.login_button_wrapper} ${styles[is_dark && "on"]}`}
      >
        <i className="fas fa-user-circle"></i>
        {login_logout_text()}
      </div>
      <Modal is_show__modal={is_show__modal} fn_on_close={fn_on_close}>
        <Login_form></Login_form>
      </Modal>
    </div>
  );
};

export default Login;
