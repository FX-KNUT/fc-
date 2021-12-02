import styles from "../../../styles/_header.module.scss";
import Search from "../../../public/ic_search.svg";
import Login from "../../../public/ic_login.svg";
import Palette from "../../../public/ic_palette.svg";
import Earth from "../../../public/ic_earth.svg";
import Link from "next/link";
import { useRef, useState } from "react";
import Modal from "../../Reusable/t_fx__modal";

const Logo = () => {
  // state
  const [is_show, set_is_show] = useState(false);

  // ref
  const palette = useRef(null);

  // event
  const fn_on_close = () => {
    set_is_show(false);
  };

  // dummy
  const dummy_child = <div>dummy children</div>;
  return (
    <div className={styles.logo_wrapper}>
      <div className={styles.search_wrapper}>
        <input type="text" placeholder="search" autoComplete="false" />
        <div className={styles.ic_search}>
          <Search />
        </div>
      </div>
      <Link href="/">
        <a>
          <h1 className={styles.logo}>Logo</h1>
        </a>
      </Link>
      <div className={styles.session_wrapper}>
        <div onClick={() => set_is_show(true)}>
          <Login />
          <span className={styles.session_text}>LOGIN</span>
        </div>
        <div>
          <Earth />
          <span className={styles.session_text}>LANGUAGE</span>
        </div>
        <div>
          <Palette onClick={() => palette.current.click()} />
          <input ref={palette} type="color" role="colorpicker" aria-roledescription="colorpicker" className={styles.input_color} />
        </div>
      </div>
      <Modal is_show={is_show} fn_on_close={fn_on_close}>
        {dummy_child}
      </Modal>
    </div>
  );
};

export default Logo;
