import styles from "../../../styles/_header.module.scss";
import Search from "../../../public/ic_search.svg";
import Link from "next/link";
import Session from "./session";

const Logo = () => {
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
      <Session></Session>
    </div>
  );
};

export default Logo;
