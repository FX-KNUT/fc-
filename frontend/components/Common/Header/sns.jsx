import Facebook from "../../../public/ic_facebook.svg";
import Kakao from "../../../public/ic_kakao.svg";
import Instagram from "../../../public/ic_instagram.svg";
import styles from "../../../styles/_header.module.scss";

// map 함수로. 현재 WET한 느낌이 있음
const sns = () => {
  return (
    <div className={styles.sns_wrapper}>
      <div>
        <Facebook />
      </div>
      <div>
        <Kakao />
      </div>
      <div>
        <Instagram />
      </div>
    </div>
  );
};

export default sns;
