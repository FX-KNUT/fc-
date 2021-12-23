import styles from "../../../styles/_footer.module.scss";
import Facebook from "../../../public/ic_facebook.svg";
import Kakao from "../../../public/ic_kakao.svg";
import Instagram from "../../../public/ic_instagram.svg";
import { useRecoilValue } from "recoil";
import { color } from "../../../recoil/atoms/atoms";

const TEXT__CONTACT = "Contact us: 0000-0000";
const TEXT__ADDRESS = "충청북도 충주시 대학로 50 한국교통대학교 중앙정보관";
const TEXT__COPYRIGHT =
  "COPYRIGHT 2021 Korea National University of Transportation ALL RIGHTS RESERVED";

const Footer = () => {
  // global state
  const curr_color = useRecoilValue(color);

  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footer_wrapper}>
          <div className={styles.contact_wrapper}>
            <div className={styles.contact}>
              <div>
                <span>{TEXT__CONTACT}</span>
              </div>
              <div>
                <span>{TEXT__ADDRESS}</span>
              </div>
            </div>
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
          </div>
          <hr />
          <div className={styles.copyright}>
            <span>{TEXT__COPYRIGHT}</span>
          </div>
        </div>
      </footer>
      <style jsx>{`
        footer {
          background-color: ${curr_color};
        }
      `}</style>
    </>
  );
};

export default Footer;
