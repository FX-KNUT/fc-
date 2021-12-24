import Link from "next/link";
import { useState } from "react";
import Ic_login from "../../../../../../public/ic_login.svg";
import Modal from "../../../../../Reusable/t_fx__modal";
import styles from "../../../../../../styles/header/main/session/login/_header_main_session_login.module.scss";
import Language from "../language/language";
import Logo from "../../logo/logo";
import fn_REST_GET__signin from "../../../../../Logic/fn_REST_GET__signin";

const login_header_components = [
  {
    alt: "language",
    class_name: styles.login_language_wrapper,
    component: <Language />,
  },
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

  const fn_on_submit = (e) => {
    console.log(e);
    // fn_REST_GET__signin();
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
        {
          <div className={styles.login_modal_children_wrapper}>
            {login_header_components.map((component) => (
              <div key={component.alt} className={component.class_name}>
                {component.component}
              </div>
            ))}

            <form onSubmit={fn_on_submit}>
              <input type="text" name="user_id" placeholder="ID" />
              <br />
              <input type="password" name="user_pw" placeholder="PASSWORD" />
              <br />
              <button type="submit">Login</button>
              <br />
              <label>
                <input type="checkbox" name="" id="" />
                아이디 저장
              </label>
              <label>
                <input type="checkbox" name="" id="" />
                로그인 상태 유지
              </label>
            </form>

            <a href="#" className={styles.another_login_method}>
              다른 방법으로 로그인
            </a>

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

            <p
              style={{
                // display: "none",
                overflow: "clip",
              }}
            >
              COPYRIGHT BY 2021 KNUT DEPARTMENT OF SOFTWARE TEAM FX.ALL LIGHT
              RESERVED
            </p>
          </div>
        }
      </Modal>
    </div>
  );
};

export default Login;
