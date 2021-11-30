import Card from "../../../Reusable/t_fx__card";
import styles from "../../../../styles/main/_notice.module.scss";

const dummy_update = [
  "ex)2.1.4 version update",
  "ex)2.1.3 version update",
  "ex)2.1.2 version update",
  "ex)2.1.1 version update",
  "ex)2.1.0 version update",
];

const dummy_qna = [
  "ex)2.1.4 version qna",
  "ex)2.1.3 version qna",
  "ex)2.1.2 version qna",
  "ex)2.1.1 version qna",
  "ex)2.1.0 version qna",
];

const dummy_faq = [
  "ex)2.1.4 version faq",
  "ex)2.1.3 version faq",
  "ex)2.1.2 version faq",
  "ex)2.1.1 version faq",
  "ex)2.1.0 version faq",
];

const notice = () => {
  return (
    <div className={styles.notice_wrapper}>
      <Card _str_title="Update 소식">
        <blockquote>
          <ul>
            {dummy_update.map((dummy, idx) => (
              <li key={idx}>{dummy}</li>
            ))}
          </ul>
        </blockquote>
      </Card>
      <Card _str_title="Q&A">
        <blockquote>
          <ul>
            {dummy_qna.map((dummy, idx) => (
              <li key={idx}>{dummy}</li>
            ))}
          </ul>
        </blockquote>
      </Card>
      <Card _str_title="FAQ">
        <blockquote>
          <ul>
            {dummy_faq.map((dummy, idx) => (
              <li key={idx}>{dummy}</li>
            ))}
          </ul>
        </blockquote>
      </Card>
    </div>
  );
};

export default notice;
