import Card from "../../../Reusable/t_fx__card";
import styles from "../../../../styles/main/_coin_info.module.scss";
import Image from "next/image";
import iu from "../../../../public/dummy_img/dummy_img_iu.jpg";
import wendy from "../../../../public/dummy_img/dummy_img_wendy.jpg";
import winter from "../../../../public/dummy_img/dummy_img_winter.jpg";
import moonbyul from "../../../../public/dummy_img/dummy_img_moonbyul.jpg";
import Ic_arrow_left from "../../../../public/ic_arrow_left.svg";
import Ic_arrow_right from "../../../../public/ic_arrow_right.svg";

const dummy_behind = [
  {
    img: iu,
    title: "아이유",
  },
  {
    img: wendy,
    title: "웬디",
  },
  {
    img: winter,
    title: "윈터",
  },
  // {
  //   img: moonbyul,
  //   title: "문별",
  // },
];

const dummy_community = [
  "ex)지은이 누나 나 죽어~~~",
  "ex)지은이 누나 나 죽어~~~",
  "ex)지은이 누나 나 죽어~~~",
  "ex)지은이 누나 나 죽어~~~",
  "ex)지은이 누나 나 죽어~~~",
];

const coin_info = () => {
  return (
    <div className={styles.coin_info_wrapper}>
      <Card _str_title="Coin Behind Story">
        <div className={styles.coin_behind}>
          <Ic_arrow_left></Ic_arrow_left>
          {dummy_behind.map((dummy, idx) => (
            <div key={idx}>
              <Image
                src={dummy.img}
                alt={dummy.title}
                width="200px"
                height="200px"
                priority={true}
              ></Image>
              <div className={styles.coin_behind_title}>{dummy.title}</div>
            </div>
          ))}
          <Ic_arrow_right></Ic_arrow_right>
        </div>
      </Card>
      <Card _str_title="토론 게시판">
        <blockquote>
          <ul>
            {dummy_community.map((dummy, idx) => (
              <li key={idx}>{dummy}</li>
            ))}
          </ul>
        </blockquote>
      </Card>
    </div>
  );
};

export default coin_info;
