import Image from "next/image";
import styles from "../../../../styles/main/guide/_guide_buying.module.scss";

// Load dummy images
import img_iu from "../../../../public/dummy_img/dummy_img_iu.jpg";
import img_karina from "../../../../public/dummy_img/dummy_img_karina.jpg";
import img_moonbyul from "../../../../public/dummy_img/dummy_img_moonbyul.jpg";

const tmp_dummy_data = [
  {
    alt: "",
    guide_image: img_iu,
    guide_title: "djklajkfldsjkflajsdklfkasl",
    guide_content: "따우니따우니따우니따우니따우니따우니",
  },
  {
    alt: "",
    guide_image: img_karina,
    guide_title: "djklajkfldsjkflajsdklfkasl",
    guide_content: "따우니따우니따우니따우니따우니따우니",
  },
  {
    alt: "",
    guide_image: img_moonbyul,
    guide_title: "djklajkfldsjkflajsdklfkasl",
    guide_content: "따우니따우니따우니따우니따우니따우니",
  },
];

const Guide_buying = () => {
  return tmp_dummy_data.map((guide_data) => {
    return (
      <article key={guide_data.alt} className={`${styles.guide_article}`}>
        <div className={styles.guide_article_image}>
          <Image src={guide_data.guide_image} alt={guide_data.alt} />
        </div>
        <p className={styles.guide_article_title}>{guide_data.guide_title}</p>
      </article>
    );
  });
};

export default Guide_buying;
