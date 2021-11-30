import Notice from "../components/Common/Main/Index/notice";
import Container from "../components/Reusable/t_fx__container";
import CoinInfo from "../components/Common/Main/Index/coin_info";
import News from "../components/Common/Main/Index/news";

export default function Home() {
  return (
    <main>
      <Container _str_title="Coin information"></Container>
      <Container _str_title="NEWS">
        <News></News>
      </Container>
      <Container _str_title="공지사항">
        <Notice></Notice>
      </Container>
      <Container _str_title="코인 기본정보">
        <CoinInfo></CoinInfo>
      </Container>
    </main>
  );
}
