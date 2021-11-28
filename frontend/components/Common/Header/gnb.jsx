import Link from "next/link";
import styles from "../../../styles/_header.module.scss";

const gnb = () => {
  return (
    <div className={styles.gnb_wrapper}>
      <Link href="#">
        <a>가이드</a>
      </Link>
      <Link href="#">
        <a>내 지갑</a>
      </Link>
      <Link href="#">
        <a>투자정보</a>
      </Link>
      <Link href="#">
        <a>거래소</a>
      </Link>
      <Link href="#">
        <a>관심종목</a>
      </Link>
      <Link href="#">
        <a>고객센터</a>
      </Link>
    </div>
  );
};

export default gnb;
