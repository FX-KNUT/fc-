import styles from "../../../../styles/main/guide/_guide_menu.module.scss";
import Link from "next/link";

const obj_guide__types = [
  {
    alt: "all",
    url: "/guide",
    name: "전체",
  },
  {
    alt: "buying",
    url: "/guide/buying",
    name: "매수",
  },
  {
    alt: "selling",
    url: "/guide/selling",
    name: "매도",
  },
  {
    alt: "information",
    url: "/guide/coin_info",
    name: "코인정보",
  },
];

const Guide_menu = () => {
  return (
    <div className={styles.guide_menu_wrapper}>
      {obj_guide__types.map((link) => {
        return (
          <Link key={link.alt} href={link.url}>
            <a>{link.name}</a>
          </Link>
        );
      })}
    </div>
  );
};

export default Guide_menu;
