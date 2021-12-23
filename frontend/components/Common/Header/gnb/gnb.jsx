import Link from "next/link";
import { useRecoilValue } from "recoil";
import { curr_language } from "../../../../recoil/selectors/selector";
import Ic_list from "../../../../public/ic_list.svg";
import styles from "../../../../styles/header/gnb/_header_gnb.module.scss";
import { useState } from "react";

const Gnb = () => {
  // local state
  const [is_show_list, set_is_show_list] = useState(false);

  // global state
  const gnb_contents = useRecoilValue(curr_language);

  // event
  const on_show_gnb = () => {
    set_is_show_list(!is_show_list);
  };
  return (
    <nav className={styles.gnb_wrapper}>
      <div className={styles.gnb_hamburger} onClick={on_show_gnb}>
        <Ic_list></Ic_list>
      </div>
      <div
        className={`${styles.gnb_contents} ${
          is_show_list && styles.active_gnb
        }`}
      >
        {gnb_contents.map((content) => (
          <Link href={content.href} key={content.span}>
            <a>
              <span>{content.span}</span>
            </a>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Gnb;
