import Link from "next/link";
import styles from "../../../styles/_announce.module.scss";
import Container from "../../Reusable/t_fx__container";

const announce = () => {
  return (
    <div className={styles.announce_wrapper}>
      <div className={styles.title_wrapper}>
        <h3>공지사항</h3>
        <Link href="#">
          <a>More</a>
        </Link>
      </div>
      <div className={styles.content_wrapper}>
        <div className={styles.container}>
          <div className={styles.sub_title}>Update 소식</div>
          <blockquote>
            <ul>
              <li>1.asdasdasdasdasdasdsadas</li>
              <li>2.asvdfvdfbfgb</li>
              <li>3.vsbrerge</li>
              <li>4.텍스트가 들어갈 자리입니다!!!!!!</li>
            </ul>
          </blockquote>
        </div>
        <div className={styles.container}>
          <div className={styles.sub_title}>Update 소식</div>
          <blockquote>
            <ul>
              <li>1.asdasdasdasdasdasdsadas</li>
              <li>2.asvdfvdfbfgb</li>
              <li>3.vsbrerge</li>
              <li>4.텍스트가 들어갈 자리입니다!!!!!!</li>
            </ul>
          </blockquote>
        </div>
        <div className={styles.container}>
          <div className={styles.sub_title}>Update 소식</div>
          <blockquote>
            <ul>
              <li>1.asdasdasdasdasdasdsadas</li>
              <li>2.asvdfvdfbfgb</li>
              <li>3.vsbrerge</li>
              <li>4.텍스트가 들어갈 자리입니다!!!!!!</li>
            </ul>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default announce;
