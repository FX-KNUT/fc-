import Image from "next/image";
import styles from "../../../../styles/main/guide/_guide_type.module.scss";
import axios from "axios";

import { useState, useEffect } from "react";

// Load dummy images
import img_iu from "../../../../public/dummy_img/dummy_img_iu.jpg";
import img_karina from "../../../../public/dummy_img/dummy_img_karina.jpg";
import img_moonbyul from "../../../../public/dummy_img/dummy_img_moonbyul.jpg";

const IP = process.env.NEXT_PUBLIC_IP;
const ENDPOINT = process.env.NEXT_PUBLIC_URL__SIGNIN;

const tmp_dummy_data = [
  {
    alt: "da1",
    guide_image: img_iu,
    guide_title:
      "djklajkfldsjkflajsdklfkasldjklajkfldsjkflajsdklfkasldjklajkfldsjkflajsdklfkasldjklajkfldsjkflajsdklfkasl",
    guide_content:
      "따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니",
  },
  {
    alt: "da2",
    guide_image: img_karina,
    guide_title: "djklajkfldsjkflajsdklfkasl",
    guide_content:
      "따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니",
  },
  {
    alt: "da3",
    guide_image: img_moonbyul,
    guide_title: "djklajkfldsjkflajsdklfkasl",
    guide_content:
      "따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니따우니",
  },
];

const Guide_type = ({ g_type }) => {
  const [state__arr_artices, set_state__arr_articles] = useState([]);
  const [state__is_active__article, set_state__is_active__article] = useState({
    da1: false,
    da2: false,
    da3: false,
  });

  // api
  const fn_GET__guide_articles = () => {
    const url = `${IP}${ENDPOINT}`;
    axios
      .get(url)
      .then((res) => {
        // 필요 데이터: alt, guide_image, guide_title, guide_content
        const { data } = res.data;
        const obj_state__is_active__article = data.reduce(
          (obj, t) => ((obj[t.alt] = false), obj),
          {}
        );
        set_state__arr_articles(res.data);
        set_state__is_active__article(obj_state__is_active__article);
      })
      .catch((err) => {
        console.error(
          `Error: /components/main/guide/guide_type.jsx - fn_GET__guide_articles\n${err}`
        );
      });
  };

  // side effects
  // useEffect(() => {
  //   fn_GET__guide_articles();
  // }, []);

  useEffect(() => {
    console.log(state__is_active__article);
  }, [state__is_active__article]);

  // handler
  const fn_handler__on_click__article = (e) => {
    const e_tg_name = e.currentTarget.getAttribute("name");
    set_state__is_active__article({
      ...state__is_active__article,
      [e_tg_name]: state__is_active__article[e_tg_name] ? false : true,
    });
  };

  return (
    <>
      {tmp_dummy_data.map((guide_data) => {
        return (
          <article
            key={`${guide_data.alt}`}
            name={`${guide_data.alt}`}
            className={styles.guide_article_wrapper}
            onClick={fn_handler__on_click__article}
          >
            <div className={styles.guide_article_post}>
              <div className={styles.guide_article_image}>
                <Image src={guide_data.guide_image} alt={guide_data.alt} />
              </div>
              <p className={styles.guide_article_title}>
                {guide_data.guide_title}
              </p>
            </div>
            <div
              className={`${styles.guide_article_content_wrapper} ${
                state__is_active__article[guide_data.alt] && "s_active"
              }`}
            >
              {guide_data.guide_content}
            </div>
          </article>
        );
      })}
      {state__arr_artices.map((guide_data) => {
        return (
          <article
            key={`${guide_data.alt}`}
            name={`${guide_data.alt}`}
            className={styles.guide_article_wrapper}
            onClick={fn_handler__on_click__article}
          >
            <div className={styles.guide_article_post}>
              <div className={styles.guide_article_image}>
                <Image src={guide_data.guide_image} alt={guide_data.alt} />
              </div>
              <p className={styles.guide_article_title}>
                {guide_data.guide_title}
              </p>
            </div>
            <div
              className={`${styles.guide_article_content_wrapper} ${
                state__is_active__article[guide_data.alt] && "active"
              }`}
            >
              {guide_data.guide_content}
            </div>
          </article>
        );
      })}
    </>
  );
};

export default Guide_type;
