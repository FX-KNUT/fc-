import styles from "../../../../../styles/header/main/session/login/_header_main_session_login.module.scss";
import Modal from "../../../../Reusable/t_fx__modal";
import { useState } from "react";
import axios from "axios";
import SignUpSuccess from "./signUpSuccess.tsx";
import SignUpFail from "./signUpFail.tsx";
import fn_hashing from "../../../../Logic/fn_hashing";

const STR_SIGN_UP__TITLE = "회원 가입";
const STR_SIGN_UP__OK = "가입";
const STR_SIGN_UP__NO = "취소";
const STR_SIGN_UP__INIT = "초기화";
const str_LABEL__ID = "아이디";
const str_LABEL__PW = "비밀번호";
const str_LABEL__NICKNAME = "닉네임";
const str_LABEL__EMAIL = "이메일";
const str_PLACEHOLDER__ID = "ID";
const str_PLACEHOLDER__PW = "Password";
const str_PLACEHOLDER__NICKNAME = "Nickname";
const str_PLACEHOLDER__EMAIL = "Email";

const sign_up = ({fn_toggle_sign_up_modal}) => {

    const [state__id, set_state__id] = useState("");
    const [state__pw, set_state__pw] = useState("");
    const [state__nickname, set_state__nickname] = useState("");
    const [state__email, set_state__email] = useState("");
    const [state__is_sign_up_success, set_state__is_sign_up_success] = useState(false);
    const [state__is_sign_up_failed, set_state__is_sign_up_failed] = useState(false);

    const fn_on_change__id = (e) => set_state__id(e.target.value);
    const fn_on_change__pw = (e) => set_state__pw(e.target.value);
    const fn_on_change__nickname = (e) => set_state__nickname(e.target.value);
    const fn_on_change__email = (e) => set_state__email(e.target.value);
    const fn_close_sign_up_result_modal = () => {
        set_state__is_sign_up_success(false);
        set_state__is_sign_up_failed(false);
    }

    const fn_on_OK = async () => {
        const result_account_validation = await fn_validate();
        if(!result_account_validation) return;
        fn_submit();
    };
    const fn_on_cancel = () => fn_toggle_sign_up_modal(false);
    const fn_on_init = () => {
        set_state__id("");
        set_state__pw("");
        set_state__nickname("");
        set_state__email("");
    };

    const fn_validate = async () => {

        const IP = "http://localhost:8096";
        const ENDPOINT = "/checkid";
        const QUERY = `?id=${state__id}`;

        const url = `${IP}${ENDPOINT}${QUERY}`;

        let is_error = false;

            await axios
                .get(url)
                .then(() => {
        
                    const regex_id = /^[a-zA-Z0-9]{4,12}$/;
                    const regex_pw = /^[a-zA-Z0-9]{8,20}$/;
                    const regex_mail =
                    /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[a-z0-9]+[a-z0-9]*[.]{1}[a-z0-9]{1,48}$/;
                    const regex_nickname = /^[A-Za-z0-9가-힣]{2,12}$/;
            
                    let ERRORS = '';
            
                    if(!regex_id.test(state__id)) {
                        ERRORS += "아이디는 영문 대소문자와 숫자만으로, 4자 이상 12자 이내로 입력해주세요.";
                        ERRORS += "\n";
                    }
            
                    if(!regex_pw.test(state__pw)) {
                        ERRORS += "비밀번호는 영문 대소문자와 숫자만으로, 8자 이상 20자 이내로 입력해주세요.";
                        ERRORS += "\n";
                    }
            
                    if(!regex_mail.test(state__email)) {
                        ERRORS += "이메일 형식이 올바르지 않습니다.";
                        ERRORS += "\n";
                    }
            
                    if(!regex_nickname.test(state__nickname)) {
                        ERRORS += "별명은 영문 대소문자와 숫자 및 한글의 조합으로, 2자 이상 12자 이하로 입력해주세요.";
                        ERRORS += "\n";
                    }
            
                    if(ERRORS !== '') {
                        window.alert(ERRORS);
                        is_error = true;
                    }

                })
                .catch(() => {
                    window.alert("중복된 ID가 있습니다.");
                    is_error = true;
                });

        return !is_error
    }

    const fn_submit = async () => {

        window.event.preventDefault();

        const hashed_pw = fn_hashing(state__pw);

        const IP = "http://localhost:8096";
        const ENDPOINT = "/signup";

        try {
            const url = `${IP}${ENDPOINT}`;

            const res = await axios.post(url, {
                id: state__id,
                hashed_pw: window.encodeURIComponent(hashed_pw).slice(0, 60),
                nickname: state__nickname,
                email: state__email,
            });

            const { status } = res;

            if(status === 500 || status === 502)
                set_state__is_sign_up_failed(true);
            if(status === 200)
                set_state__is_sign_up_success(true);

        } catch (err) {
            console.log(`signUp.jsx.fn_submit:\n${err}`);
            set_state__is_sign_up_failed(true);
        }
    }
    
    return (
        <div className={styles.sign_up_wrapper}>
            <div className={styles.sign_up_container}>
                <div id={styles.sign_up_title}>
                    {STR_SIGN_UP__TITLE}
                </div>
                <div id={styles.sign_up_content}>
                    <fieldset>
                        <legend>{str_LABEL__ID}</legend>
                        <input type="text" value={state__id} onChange={fn_on_change__id} placeholder={str_PLACEHOLDER__ID} />
                    </fieldset>
                    <fieldset>
                        <legend>{str_LABEL__PW}</legend>
                        <input type="password" value={state__pw} onChange={fn_on_change__pw} placeholder={str_PLACEHOLDER__PW} />
                    </fieldset>
                    <fieldset>
                        <legend>{str_LABEL__NICKNAME}</legend>
                        <input type="text" value={state__nickname} onChange={fn_on_change__nickname} placeholder={str_PLACEHOLDER__NICKNAME} />
                    </fieldset>
                    <fieldset>
                        <legend>{str_LABEL__EMAIL}</legend>
                        <input type="text" value={state__email} onChange={fn_on_change__email} placeholder={str_PLACEHOLDER__EMAIL} />
                    </fieldset>
                </div>
                <div id={styles.sign_up_btn_container}>
                    <div onClick={fn_on_OK}>{STR_SIGN_UP__OK}</div>
                    <div onClick={fn_on_cancel}>{STR_SIGN_UP__NO}</div>
                    <div onClick={fn_on_init}>{STR_SIGN_UP__INIT}</div>
                </div>
            </div>
            <Modal is_show__modal={state__is_sign_up_success} fn_on_close={fn_close_sign_up_result_modal}>
                <SignUpSuccess fn_on_close={fn_close_sign_up_result_modal}></SignUpSuccess>
            </Modal>
            <Modal is_show__modal={state__is_sign_up_failed} fn_on_close={fn_close_sign_up_result_modal}>
                <SignUpFail fn_on_close={fn_close_sign_up_result_modal}></SignUpFail>
            </Modal>
        </div>
    );
};

export default sign_up;