import Pie_chart from "../components/Common/Main/wallet/pie_chart";
import styles from "../styles/main/wallet/_wallet.module.scss";
import Card from "../components/Reusable/t_fx__card";
import Container from "../components/Reusable/t_fx__container";
import { useRecoilState } from "recoil";
import { user_my_wallet, user_state } from "../recoil/atoms/atoms";

const wallet = () => {

  const user_state__parsed = JSON.parse(useRecoilState(user_state)[0]);

  let user_wallet = useRecoilState(user_my_wallet)
  let user_wallet__parsed;

  if(user_state__parsed == null) {
    window.alert("로그인 후 이용해주세요.");
    return location.replace("/");
  }

  if(user_wallet[0] != null)
    user_wallet__parsed = JSON.parse(user_wallet);

  const { User_nickname: user_nickname, User_balance: user_balance } = user_state__parsed;

  const total_value = user_balance + 0 // logics will be added
  
  const test_wallet = [
    {
      coin_name: "sangpyeongtongbo",
      coin_price: 240,
      coin_stock: 2,
      coin_average_profit: 192
    }
  ];

  const converted_wallet = test_wallet.map(ele => {
    let coin_name;

    switch(ele.coin_name) {
      case "bannyangjun":
        coin_name = "반냥전";
        break;
      case "dollar":
        coin_name = "달러";
        break;
      case "gunwonjungbo":
        coin_nmae = "건원중보";
        break;
      case "haedongtongbo":
        coin_name = "해동통보";
        break;
      case "hwalgu":
        coin_name = "활구";
        break;
      case "myungdojun":
        coin_name = "명도전";
        break;
      case "oban":
        coin_name = "오반";
        break;
      case "tainhwapye":
        coin_name = "타인화폐";
        break;
      default:
        console.warn("잘못된 코인 이름 = " + ele.coin_name);
        coin_name = "Invalid coin name";
      }

      const ret_obj = {
        coin_name,
        coin_price: ele.coin_price,
        coin_stock: ele.coin_stock,
        coin_average_profit: ele.coin_average_profit,
      };

      return ret_obj;

  });

  const map_coins = converted_wallet?.map(ele => {
    return (
      <div className={styles.wallet_coins_container}>
        <div className={styles.wallet_coin__title}>{ele.coin_name}</div>
        <div className={styles.wallet_coin__price}>
          {ele.coin_price} G
        </div>
        <div className={styles.wallet_coin__stock}>{ele.coin_stock}</div>
        <div className={styles.wallet_coin__total}>
          {ele.coin_price * ele.coin_stock} G
        </div>
        <div className={styles.wallet_coin__average_price}>
          {ele.coin_average_profit} G
        </div>
        <div className={styles.wallet_coin__profit_ratio}>{(ele.coin_price / ele.coin_average_profit * 100).toString().slice(0, 8)} %</div>
      </div>
    )
  });

  const comp_wallet__total_value = (
    <div id={styles.wallet_total_value}>
      <span id={styles.wallet_total_value_title}>Total Value</span>
      <div className={styles.spacer}></div>
      <span id={styles.wallet_total_value_display}>{total_value} G</span>
    </div>
  );

  const comp_wallet__example = (
    <div
      className={`${styles.wallet_coins_container} ${styles.wallet_example}`}
    >
      <div
        className={`${styles.wallet_coin__title} ${styles.wallet_example}`}
      >
        코인명
      </div>
      <div
        className={`${styles.wallet_coin__price} ${styles.wallet_example}`}
      >
        주당 가격
      </div>
      <div
        className={`${styles.wallet_coin__stock} ${styles.wallet_example}`}
      >
        수량
      </div>
      <div
        className={`${styles.wallet_coin__total} ${styles.wallet_example}`}
      >
        총계
      </div>
      <div
        className={`${styles.wallet_coin__average_price} ${styles.wallet_example}`}
      >
        평단가
      </div>
      <div
        className={`${styles.wallet_coin__profit_ratio} ${styles.wallet_example}`}
      >
        수익률
      </div>
    </div>
  )

  const comp_children__wallet = (
    user_wallet__parsed != null 
      ?    
        <div id={styles.wallet_no_data}>
          <span id={styles.wallet_no_data_text}>보유 중인 코인이 없습니다.</span>
        </div>
      :
        <div id={styles.wallet_description_body}>
          {comp_wallet__total_value}
          <div id={styles.wallet_coins_wrapper}>
            {comp_wallet__example}
            {map_coins}
          </div>
        </div>
  );

  return (
    <Container _str_title={""} _is_show_more={false}>
      <div id={styles.wallet_container}>
        <Pie_chart></Pie_chart>
        <div id={styles.wallet_description}>
          <Card _str_title={`${user_nickname}님의 지갑`} _str_title_session={`보유 잔액: ${user_balance} G`}>
            {comp_children__wallet}
          </Card>
        </div>
      </div>
    </Container>
  );
};

export default wallet;
