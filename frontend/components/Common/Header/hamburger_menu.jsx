import Link from "next/link";
import { useRecoilValue } from "recoil";
import { curr_language } from "../../../recoil/selectors/selector";
import styles from "../../../styles/header/_hamburger_menu.module.scss";
import Language from "./main/session/language/language";
import Login from "./main/session/login/login";
import Palette from "./main/session/palette/palette";
import { color } from "../../../recoil/atoms/atoms";

const Hamburger_menu = () => {
  // global state
  const gnb_contents = useRecoilValue(curr_language);
  const curr_color = useRecoilValue(color);
  return (
    <>
      <div className={styles.header_hamburger_container}>
        <div
          id="hambuger_header"
          className={styles.hamburger_session_container}
        >
          <Login></Login>
          <Language></Language>
          <Palette></Palette>
        </div>
        <nav className={styles.hamburger_gnb_container}>
          <div className={styles.gnb_contents}>
            {gnb_contents.map((content) => (
              <Link href={content.href} key={content.span}>
                <a>
                  <span>{content.span}</span>
                </a>
              </Link>
            ))}
          </div>
        </nav>
      </div>
      <style jsx>{`
        #hambuger_header {
          background-color: ${curr_color};
        }
      `}</style>
    </>
  );
};

export default Hamburger_menu;
