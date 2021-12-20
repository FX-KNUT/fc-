import Notice from "../components/Common/Main/Index/notice";
import Container from "../components/Reusable/t_fx__container";
import CoinInfo from "../components/Common/Main/Index/coin_info";
import News from "../components/Common/Main/Index/news";

const main_contents = [
  {
    _str_title: "News",
    component: <News />,
  },
  {
    _str_title: "Notice",
    component: <Notice />,
  },
  {
    _str_title: "CoinInfo",
    component: <CoinInfo />,
  },
];

export default function Home() {
  return (
    <main>
      <Container _str_title="Coin information"></Container>
      {main_contents.map((content) => {
        return (
          <Container
            _str_title={content._str_title}
            key={content._str_title}
            _int_gutter={content._int_gutter}
          >
            {content.component}
          </Container>
        );
      })}
    </main>
  );
}
