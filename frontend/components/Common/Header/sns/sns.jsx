import Facebook from "../../../../public/ic_facebook.svg";
import Kakao from "../../../../public/ic_kakao.svg";
import Instagram from "../../../../public/ic_instagram.svg";
import styles from "../../../../styles/header/sns/_header_sns.module.scss";

const sns_components = [
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

const sns = () => {
  return (
    <div className={styles.sns_wrapper}>
      {sns_components.map((component) => (
        <div key={component.alt}>{component.component}</div>
      ))}
    </div>
  );
};

export default sns;
