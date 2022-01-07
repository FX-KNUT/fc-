import styles from "../../../../../../styles/header/main/session/login/_header_main_session_login.module.scss";
import { useState } from "react";
import Link from "next/link";
import fn_hashing from "../../../../../Logic/fn_hashing";
import axios from "axios";
import Logo from "../../logo/logo";
import Modal from "../../../../../Reusable/t_fx__modal";
import SignUp from "../signUp";
import FindId from "../findId.tsx";
import FindPw from "../findPw.tsx";

const login_header_components = [
  {
    alt: "logo",
    class_name: styles.login_logo_wrapper,
    component: <Logo />,
  },
];

const Login_form = () => {
  const [obj_user_info, set_obj_user_info] = useState({
    user_id: "",
    user_pw: "",
    chk_saved_id: false,
    chk_keep_session_login_state: false,
  });
  const { user_id, user_pw, chk_saved_id, chk_keep_session_login_state } =
    obj_user_info;

  const [is_show__sign_up, set_is_show__sign_up] = useState(false);
  const [is_show__find_id, set_is_show__find_id] = useState(false);
  const [is_show__find_pw, set_is_show__find_pw] = useState(false);

  // event
  const fn_on_submit = async () => {

    window.event.preventDefault();

    const hashed_pw = fn_hashing(obj_user_info.user_pw);

    const IP = "http://localhost:8096";
    const ENDPOINT = "/signin";
    const QUERY_ID = `id=${user_id}`;
    const QUERY_PW = `pw=${window.encodeURIComponent(hashed_pw).slice(0, 60)}`;

    console.log(QUERY_PW.length);
    console.log(QUERY_PW);

    try {
      const url = `${IP}${ENDPOINT}?${QUERY_ID}&${QUERY_PW}`;
      
      const res = await axios.get(url);

      // status => statusCode
      const { status } = res;

      // 200번 status가 아니거나 하는 등, Response 확인 원할 시
      // 개발자 도구(브라우저) > Network > Name에서 선택 > Response 혹은 Preview에서 확인 가능

      // 502, 400 등 임시로 작성한 코드이므로 당연히 커스텀하여도 됨. 그냥 써도 OK

      // 백엔드에서 비밀번호 해싱이 잘 안 돼서 생긴 문제
      if(status === 502) {
        const text = "서버 문제가 발생하였습니다."
        return window.alert(text);
      }

      // 일치하는 회원 정보가 없음
      if(status === 400) {
        const text = "일치하는 회원 정보가 없습니다."
                    + "\n"
                    + "다시 시도해주세요.";

        return window.alert(text);
      }

      // 정상
      if(status === 200) {
        /* some logic here */

        return;
      }

      /* 여기서 부턴 예기치 못한 status에 대한 로직 */
      return window.alert("알 수 없는 에러가 발생하였습니다.");

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

  const fn_toggle_sign_up_modal = () => set_is_show__sign_up(!is_show__sign_up);
  const fn_toggle_find_id_modal = () => set_is_show__find_id(!is_show__find_id);
  const fn_toggle_find_pw_modal = () => set_is_show__find_pw(!is_show__find_pw);

  
  return (
    <>
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
            <label htmlFor="chk_keep_session_login_state">로그인 상태 유지</label>
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
            <span onClick={fn_toggle_sign_up_modal}>회원가입</span>
          </li>
          <li>
            <span onClick={fn_toggle_find_id_modal}>아이디 찾기</span>
          </li>
          <li>
            <span onClick={fn_toggle_find_pw_modal}>비밀번호 찾기</span>
          </li>
        </ul>
      </div>
      <Modal is_show__modal={is_show__sign_up} fn_on_close={fn_toggle_sign_up_modal}>
        <SignUp fn_on_close={fn_toggle_sign_up_modal}></SignUp>
      </Modal>
      <Modal is_show__modal={is_show__find_id} fn_on_close={fn_toggle_find_id_modal}>
        <FindId fn_on_close={fn_toggle_find_id_modal}></FindId>
      </Modal>
      <Modal is_show__modal={is_show__find_pw} fn_on_close={fn_toggle_find_pw_modal}>
        <FindPw fn_on_close={fn_toggle_find_pw_modal}></FindPw>
      </Modal>
    </>
  );
};

export default Login_form;
