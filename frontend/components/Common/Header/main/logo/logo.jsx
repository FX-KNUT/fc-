import Link from "next/link";
import styles from "../../../../../styles/header/main/logo/_header_main_logo.module.scss";

const logo = () => {
  return (
    <Link href="/">
      <a>
        <h1 className={styles.logo}>Logo</h1>
      </a>
    </Link>
  );
};

export default logo;
