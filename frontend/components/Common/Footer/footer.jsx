import styles from "../../../styles/_footer.module.scss";
import Facebook from "../../../public/ic_facebook.svg";
import Kakao from "../../../public/ic_kakao.svg";
import Instagram from "../../../public/ic_instagram.svg";

const footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_wrapper}>
        <div className={styles.contact_wrapper}>
          <div className={styles.contact}>
            <div>Contact us: 0000-0000</div>
            <div>충청북도 충주시 대학로 50 한국교통대학교 중앙정보관</div>
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
          COPYRIGHT 2021 Korea National University of Transpoertation ALL RIGHTS
          RESERVED
        </div>
      </div>
    </footer>
  );
};

export default footer;
