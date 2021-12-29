import Pie_chart from "../components/Common/Main/wallet/pie_chart";
import Container from "../components/Reusable/t_fx__container";

const TITLE_WALLET = "Wallet"

const wallet = () => {
  return (
    <Container _str_title={TITLE_WALLET} _is_show_more={false}>
      <div id="wallet_container">
        <Pie_chart></Pie_chart>
      </div>
    </Container>
  );
};

export default wallet;
