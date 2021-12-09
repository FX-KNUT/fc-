import { useState } from "react";
import Ic_login from "../../../../../../public/ic_login.svg";
import Modal from "../../../../../Reusable/t_fx__modal";
import styles from "../../../../../../styles/header/main/session/login/_header_main_session_login.module.scss";

// dummy
const dummy_child = <div>dummy children</div>;

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
        className={styles.login_wrapper}
        onClick={() => set_is_show__modal(true)}
      >
        <Ic_login />
        <span>LOGIN</span>
      </div>
      <Modal is_show__modal={is_show__modal} fn_on_close={fn_on_close}>
        {dummy_child}
      </Modal>
    </div>
  );
};

export default Login;
