import Image from "next/image";
import styles from "../../../../styles/main/guide/_guide_type.module.scss";
// import axios from "axios";

// Load dummy images
import img_iu from "../../../../public/dummy_img/dummy_img_iu.jpg";
import img_karina from "../../../../public/dummy_img/dummy_img_karina.jpg";
import img_moonbyul from "../../../../public/dummy_img/dummy_img_moonbyul.jpg";

const tmp_dummy_data = [
  {
    alt: "",
    guide_image: img_iu,
    guide_title:
      "djklajkfldsjkflajsdklfkasldjklajkfldsjkflajsdklfkasldjklajkfldsjkflajsdklfkasldjklajkfldsjkflajsdklfkasl",
    guide_content:
      "따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니",
  },
  {
    alt: "",
    guide_image: img_karina,
    guide_title: "djklajkfldsjkflajsdklfkasl",
    guide_content:
      "따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니",
  },
  {
    alt: "",
    guide_image: img_moonbyul,
    guide_title: "djklajkfldsjkflajsdklfkasl",
    guide_content:
      "따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니",
  },
];

const Guide_type = ({ g_type }) => {
  // const url = `${process.env.NEXT_PUBLIC_IP2}/guide${type}`;
  // const res = await axios.get(url);
  // const { data } = res;
  // console.log(data);

  const on_click__post = (e) => {};

  return tmp_dummy_data.map((guide_data, i) => {
    return (
      <article
        key={`${guide_data.alt}${i}`}
        className={styles.guide_article_wrapper}
      >
        <div className={styles.guide_article_post}>
          <div className={styles.guide_article_image}>
            <Image src={guide_data.guide_image} alt={guide_data.alt} />
          </div>
          <p className={styles.guide_article_title}>{guide_data.guide_title}</p>
        </div>
        <div className={styles.guide_article_content_wrapper}>
          {guide_data.guide_content}
        </div>
      </article>
    );
  });
};

export default Guide_type;
