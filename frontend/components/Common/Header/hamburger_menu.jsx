import Link from "next/link";
import { useRecoilValue } from "recoil";
import { curr_language } from "../../../recoil/selectors/selector";
import styles from "../../../styles/header/_hamburger_menu.module.scss";
import Language from "./main/session/language/language";
import Search from "./main/search/search";
import Palette from "./main/session/palette/palette";
import Modal from "../../Reusable/t_fx__modal";
import Login_form from "../Header/main/session/login/login_form";
import { useState } from "react";

const USER_TEXT = "로그인해주세요";

const Hamburger_menu = () => {
  // state
  const [is_show__modal, set_is_show__modal] = useState(false);

  // global state
  const gnb_contents = useRecoilValue(curr_language);

  // event
  const fn_on_close = () => {
    set_is_show__modal(false);
  };

  return (
    <>
      <div className={styles.hamburger_container}>
        <div className={styles.user_wrapper}>
          <div className={styles.user_container}>
            <div onClick={() => set_is_show__modal(true)}>
              <i className="fas fa-user-circle"></i>
            </div>
            <span onClick={() => set_is_show__modal(true)}>{USER_TEXT}</span>
          </div>
        </div>
        <div className={styles.search_wrapper}>
          <div className={styles.search_container}>
            <Search></Search>
          </div>
        </div>
        <div className={styles.gnb_wrapper}>
          <div className={styles.gnb_container}>
            {gnb_contents.map((content) => (
              <Link href={content.href} key={content.span}>
                <a>
                  <span>{content.span}</span>
                </a>
              </Link>
            ))}
          </div>
        </div>
        <div className={styles.setting_wrapper}>
          <div className={styles.setting_container}>
            <Language></Language>
            <Palette></Palette>
          </div>
        </div>
      </div>
      <Modal is_show__modal={is_show__modal} fn_on_close={fn_on_close}>
        <Login_form></Login_form>
      </Modal>
    </>
  );
};

export default Hamburger_menu;
