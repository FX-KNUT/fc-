import Pie_chart from "../components/Common/Main/wallet/pie_chart";
import styles from "../styles/main/wallet/_wallet.module.scss";
import Card from "../components/Reusable/t_fx__card";
import Container from "../components/Reusable/t_fx__container";

const TITLE_WALLET = "Wallet"

const comp_children__wallet = (
    <div id="wallet_description_body">
      Hello World
    </div>
);

const wallet = () => {
  return (
    <Container _str_title={TITLE_WALLET} _is_show_more={false}>
      <div id={styles.wallet_container}>
        <Pie_chart></Pie_chart>
        <div id={styles.wallet_description}>
          <Card _str_title={`${'User Name Here'}님의 지갑`} children={comp_children__wallet} />
        </div>
      </div>
    </Container>
  );
};

export default wallet;
