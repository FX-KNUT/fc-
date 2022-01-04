import Notice from "../components/Common/Main/Index/notice";
import Container from "../components/Reusable/t_fx__container";
import CoinInfo from "../components/Common/Main/Index/coin_info";
import News from "../components/Common/Main/Index/news";
import styles from "../styles/main/index/_index.module.scss";
import axios from "axios";

const main_contents = [
  {
    str_title: "News",
    component: <News />,
  },
  {
    str_title: "Notice",
    component: <Notice />,
  },
  {
    str_title: "CoinBoard",
    component: <CoinInfo />,
  },
];

export default function Home() {
  return (
    <main className={styles.index_container}>
      <Container _str_title="Coin information"></Container>
      {main_contents.map((content) => {
        return (
          <Container _str_title={content.str_title} key={content.str_title}>
            {content.component}
          </Container>
        );
      })}
    </main>
  );
}
