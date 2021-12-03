import Facebook from "../../../public/ic_facebook.svg";
import Kakao from "../../../public/ic_kakao.svg";
import Instagram from "../../../public/ic_instagram.svg";
import styles from "../../../styles/_header.module.scss";

const sns_contents = [
  {
    alt: "Facebook",
    component: <Facebook />,
  },
  {
    alt: "Kakao",
    component: <Kakao />,
  },
  {
    alt: "Instagram",
    component: <Instagram />,
  },
];

// map 함수로. 현재 WET한 느낌이 있음
const sns = () => {
  return (
    <div className={styles.sns_wrapper}>
      {sns_contents.map((content) => (
        <div key={content.alt}>{content.component}</div>
      ))}
    </div>
  );
};

export default sns;
