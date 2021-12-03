import Link from "next/link";
import styles from "../../../styles/_header.module.scss";

const gnb_contents = [
  {
    href: "#",
    item: "가이드",
  },
  {
    href: "#",
    item: "내 지갑",
  },
  {
    href: "#",
    item: "투자정보",
  },
  {
    href: "#",
    item: "거래소",
  },
  {
    href: "#",
    item: "관심종목",
  },
  {
    href: "#",
    item: "고객센터",
  },
];

const gnb = () => {
  return (
    <div className={styles.gnb_wrapper}>
      {gnb_contents.map((content) => (
        <Link href={content.href} key={content.item}>
          <a>
            <span>{content.item}</span>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default gnb;
