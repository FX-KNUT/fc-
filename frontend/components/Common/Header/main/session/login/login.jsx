import Link from "next/link";
import { useState } from "react";
import Modal from "../../../../../Reusable/t_fx__modal";
import styles from "../../../../../../styles/header/main/session/login/_header_main_session_login.module.scss";
import Logo from "../../logo/logo";
import axios from "axios";
import fn_hashing from "../../../../../Logic/fn_hashing";
import Ic_login from "../../../../../../public/ic_login.svg";

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
  const [obj_user_info, set_obj_user_info] = useState({
    user_id: "",
    user_pw: "",
    chk_saved_id: false,
    chk_keep_session_login_state: false,
  });
  const { user_id, user_pw, chk_saved_id, chk_keep_session_login_state } =
    obj_user_info;

  // event
  const fn_on_close = () => {
    set_is_show__modal(false);
  };

  const fn_on_submit = async (e) => {
    e.preventDefault();
    try {
      const url = `${process.env.NEXT_PUBLIC_IP}${process.env.NEXT_PUBLIC_URL__SIGNIN}`;
      const res = await axios.get(url, {
        params: {
          user_id: user_id,
          user_pw: fn_hashing(user_pw),
        },
      });
      console.log(user_id, fn_hashing(user_pw));
      const { data } = res;
      console.log(data);
    } catch (err) {
      console.error(`login.jsx.fn_on_submit:\n${err}`);
    }
  };

  const fn_on_change = (e) => {
    set_obj_user_info({
      ...obj_user_info,
      [e.target.name]: e.target.value,
    });
  };

  const fn_on_change_chk = (e) => {
    set_obj_user_info({
      ...obj_user_info,
      [e.target.name]: e.target.checked,
    });
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
        {
          <div className={styles.login_modal_children_wrapper}>
            {login_header_components.map((component) => (
              <div key={component.alt} className={component.class_name}>
                {component.component}
              </div>
            ))}

            <form onSubmit={fn_on_submit} noValidate>
              <input
                type="text"
                name="user_id"
                placeholder="ID"
                value={user_id}
                onChange={fn_on_change}
              />
              <br />
              <input
                type="password"
                name="user_pw"
                placeholder="PASSWORD"
                value={user_pw}
                onChange={fn_on_change}
              />
              <br />
              <button type="submit">Login</button>
              <br />
              <div className={styles.div_user_login_state}>
                <input
                  type="checkbox"
                  name="chk_saved_id"
                  id="chk_saved_id"
                  checked={chk_saved_id}
                  onChange={fn_on_change_chk}
                />
                <label htmlFor="chk_saved_id">아이디 저장</label>

                <input
                  type="checkbox"
                  name="chk_keep_session_login_state"
                  id="chk_keep_session_login_state"
                  checked={chk_keep_session_login_state}
                  onChange={fn_on_change_chk}
                />
                <label htmlFor="chk_keep_session_login_state">
                  로그인 상태 유지
                </label>
              </div>
            </form>

            <div className={styles.or}>or</div>

            <div className={styles.another_login_method}>
              <Link href="#">
                <a>
                  <i className="fab fa-google"></i>
                </a>
              </Link>
              <Link href="#">
                <a>
                  <i className="fab fa-facebook-f"></i>
                </a>
              </Link>
            </div>

            <ul className={styles.login_function}>
              <li>
                <Link href="#">
                  <a>회원가입</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>아이디 찾기</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>비밀번호 찾기</a>
                </Link>
              </li>
            </ul>
          </div>
        }
      </Modal>
    </div>
  );
};

export default Login;
