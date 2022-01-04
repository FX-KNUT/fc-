import Link from "next/link";
import { useState } from "react";
import Modal from "../../../../../Reusable/t_fx__modal";
import styles from "../../../../../../styles/header/main/session/login/_header_main_session_login.module.scss";
import Logo from "../../logo/logo";
import axios from "axios";
import fn_hashing from "../../../../../Logic/fn_hashing";
import Ic_login from "../../../../../../public/ic_login.svg";
import Login_form from "./login_form";

const login_header_components = [
  {
    alt: "logo",
    class_name: styles.login_logo_wrapper,
    component: <Logo />,
  },
];

const Login = () => {
  // state
  const [is_show__modal, set_is_show__modal] = useState(false);

  // event
  const fn_on_close = () => {
    set_is_show__modal(false);
  };

  return (
    <div>
      <div
        className={styles.login_button_wrapper}
        onClick={() => set_is_show__modal(true)}
      >
        <Ic_login />
        <span>LOGIN</span>
      </div>
      <Modal is_show__modal={is_show__modal} fn_on_close={fn_on_close}>
        <Login_form></Login_form>
      </Modal>
    </div>
  );
};

export default Login;
