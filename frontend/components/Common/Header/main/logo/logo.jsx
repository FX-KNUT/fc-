import Link from "next/link";
import Image from "next/image"
import Logo_small from "../../../../../public/dummy_img/Logo_small.png"
import Logo_medium from "../../../../../public/dummy_img/Logo_medium.png"
import Logo_large from "../../../../../public/dummy_img/Logo_large.jpg"
import styles from "../../../../../styles/header/main/logo/_header_main_logo.module.scss";

const alt_logo = "Sangpyeongtongbo Logo"

const logo = () => {
  return (
    <Link href="/">
      <a className={styles.logo}>
        <Image src={Logo_small} alt={alt_logo} srcSet={
          `
            ${Logo_small} 480w,
            ${Logo_medium} 768w,
            ${Logo_large} 1280w
          `
        } />
      </a>
    </Link>
  );
};

export default logo;
