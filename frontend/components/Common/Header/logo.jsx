import styles from "../../../styles/_header.module.scss";
import Search from "../../../public/ic_search.svg";
import Login from "../../../public/ic_login.svg";
import Palette from "../../../public/ic_palette.svg";
import Earth from "../../../public/ic_earth.svg";

const logo = () => {
  return (
    <div className={styles.logo_wrapper}>
      <div className={styles.search_wrapper}>
        <input type="text" placeholder="search" autoComplete="false" />
        <div className={styles.ic_search}>
          <Search />
        </div>
      </div>
      <h1 className={styles.logo}>Logo</h1>
      <div className={styles.session_wrapper}>
        <div>
          <Login />
          <span className={styles.session_text}>LOGIN</span>
        </div>
        <div>
          <Earth />
          <span className={styles.session_text}>LANGUAGE</span>
        </div>
        <div>
          <Palette />
        </div>
      </div>
    </div>
  );
};

export default logo;
