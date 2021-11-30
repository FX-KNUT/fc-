import iu from "../../../../public/dummy_img/dummy_img_iu.jpg";
import wendy from "../../../../public/dummy_img/dummy_img_wendy.jpg";
import winter from "../../../../public/dummy_img/dummy_img_winter.jpg";
import moonbyul from "../../../../public/dummy_img/dummy_img_moonbyul.jpg";
import News_item from "./news_item";
import styles from "../../../../styles/main/_news.module.scss";

const dummy_news = [
  {
    img: iu,
    title: "아이유",
    content: "눈나 나 죽어~",
  },
  {
    img: wendy,
    title: "웬디",
    content: "눈나 나 죽어~",
  },
  {
    img: winter,
    title: "윈터",
    content: "눈나 나 죽어~",
  },
  {
    img: moonbyul,
    title: "문별",
    content: "눈나 나 죽어~",
  },
];

const news = () => {
  return (
    <div className={styles.news_wrapper}>
      {dummy_news.map((dummy, idx) => (
        <News_item _obj_item={dummy} key={idx}></News_item>
      ))}
    </div>
  );
};

export default news;
