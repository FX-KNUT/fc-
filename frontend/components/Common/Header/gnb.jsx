import Link from "next/link";
import styles from "../../../styles/_header.module.scss";

const gnb = () => {
  return (
    <div className={styles.gnb_wrapper}>
      <Link href="#">가이드</Link>
      <Link href="#">내 지갑</Link>
      <Link href="#">투자정보</Link>
      <Link href="#">거래소</Link>
      <Link href="#">관심종목</Link>
      <Link href="#">고객센터</Link>
    </div>
  );
};

export default gnb;
