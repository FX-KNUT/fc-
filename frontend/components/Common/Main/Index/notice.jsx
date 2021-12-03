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

const notice_contents = [
  { _str_title: "Update 소식", content: dummy_update },
  { _str_title: "Q&A", content: dummy_qna },
  { _str_title: "FAQ", content: dummy_faq },
];

const notice = () => {
  return (
    <div className={styles.notice_wrapper}>
      {notice_contents.map((content) => (
        <Card _str_title={content._str_title} key={content._str_title}>
          <blockquote>
            <ul>
              {content.content.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </blockquote>
        </Card>
      ))}
    </div>
  );
};

export default notice;
