import Card_pad from "../components/Reusable/t_fx__card_pad";
import styles from "../styles/main/guide/_guide.module.scss";
import Link from "next/link";
import Guide_wrapper from "../components/Common/Main/guide/guide_wrapper";

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
    <Guide_wrapper className={styles.guide_wrapper}>
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
    </Guide_wrapper>
  );
};

export default guide;
