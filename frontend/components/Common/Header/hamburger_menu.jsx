import Link from "next/link";
import { useRecoilValue } from "recoil";
import { curr_language } from "../../../recoil/selectors/selector";
import styles from "../../../styles/header/_hamburger_menu.module.scss";
import Language from "./main/session/language/language";
import Search from "./main/search/search";
import Palette from "./main/session/palette/palette";
import { useState } from "react";
import Login from "./main/session/login/login";

const USER_TEXT = "로그인해주세요";

const Hamburger_menu = () => {
  // global state
  const gnb_contents = useRecoilValue(curr_language);

  return (
    <div className={styles.hamburger_container}>
      <div>
        <div>
          <Login></Login>
        </div>
      </div>
      <div className={styles.user_wrapper}>
        <div className={styles.user_container}>
          <div>
            <i className="fas fa-user-circle"></i>
          </div>
          <span>{USER_TEXT}</span>
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
  );
};

export default Hamburger_menu;
