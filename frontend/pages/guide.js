import Card_pad from "../components/Reusable/t_fx__card_pad";
import styles from "../styles/main/guide/_guide.module.scss";
import Link from "next/link";

const guide_components = [
  {
    alt: "",
    image_component: <div></div>,
    text_component: <div></div>,
  },
  {
    alt: "",
    image_component: <div></div>,
    text_component: <div></div>,
  },
  {
    alt: "",
    image_component: <div></div>,
    text_component: <div></div>,
  },
];

const guide = () => {
  return (
    <main className={styles.guide_wrapper}>
      <div className={styles.guide_menu_wrapper}>
        <Link href="/">
          <a>매수</a>
        </Link>
        <Link href="/">
          <a>매도</a>
        </Link>
        <Link href="/">
          <a>코인정보</a>
        </Link>
      </div>

      <div className={styles.guide_element_wrapper}>
        <h2>Guide</h2>
        {guide_components.map((g_component) => {
          return (
            <div
              key={g_component.alt}
              className={styles[`${g_component.alt}_wrapper`]}
            >
              <Card_pad>{g_component.image_component}</Card_pad>
              <Card_pad>{g_component.text_component}</Card_pad>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default guide;
