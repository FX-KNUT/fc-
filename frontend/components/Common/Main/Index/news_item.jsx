import Image from "next/image";
import styles from "../../../../styles/main/_news_item.module.scss";

const news_item = ({ _obj_item }) => {
  const { img, title, content } = _obj_item;
  return (
    <div className={styles.news_item_wrapper}>
      <Image
        alt={title}
        src={img}
        width="350px"
        height="300px"
        priority={true}
      ></Image>
      <div className={styles.news_item_content}>
        <div>{title}</div>
        <div>{content}</div>
      </div>
    </div>
  );
};

export default news_item;
