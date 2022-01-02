import Pie_chart from "../components/Common/Main/wallet/pie_chart";
import styles from "../styles/main/wallet/_wallet.module.scss";
import Card from "../components/Reusable/t_fx__card";
import Container from "../components/Reusable/t_fx__container";

const TITLE_WALLET = "Wallet";

const comp_children__wallet = (
  <div id={styles.wallet_description_body}>
    <div id={styles.wallet_total_value}>
      <span id={styles.wallet_total_value_title}>Total Value</span>
      <div className={styles.spacer}></div>
      <span id={styles.wallet_total_value_display}>$777.77 USD</span>
    </div>
    <div id={styles.wallet_coins_wrapper}>
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
          <span className={styles.wallet_coin__price__have}>주당 가격</span>
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
      {/* Array.map()을 시작하세요 */}
      <div className={styles.wallet_coins_container}>
        <div className={styles.wallet_coin__title}>상평통보</div>
        <div className={styles.wallet_coin__price}>
          <span className={styles.wallet_coin__price__have}>$77.7</span>
          <div className={styles.spacer}></div>
          <span className={styles.wallet_coin__price__unit}>USD</span>
        </div>
        <div className={styles.wallet_coin__stock}>2</div>
        <div className={styles.wallet_coin__total}>
          <span className={styles.wallet_coin__price__have}>$154.4</span>
          <div className={styles.spacer}></div>
          <span className={styles.wallet_coin__price_unit}>USD</span>
        </div>
        <div className={styles.wallet_coin__average_price}>
          <span className={styles.wallet_coin__price__have}>$61.98</span>
          <div className={styles.spacer}></div>
          <span className={styles.wallet_coin__price_unit}>USD</span>
        </div>
        <div className={styles.wallet_coin__profit_ratio}>24.6835%</div>
      </div>
      {/* Array.map()을 여기서 끝내세요 */}
      <div className={styles.wallet_coins_container}>
        <div className={styles.wallet_coin__title}>경호뚱땡보</div>
        <div className={styles.wallet_coin__price}>
          <span className={styles.wallet_coin__price__have}>$42.6</span>
          <div className={styles.spacer}></div>
          <span className={styles.wallet_coin__price__unit}>USD</span>
        </div>
        <div className={styles.wallet_coin__stock}>2</div>
        <div className={styles.wallet_coin__total}>
          <span className={styles.wallet_coin__price__have}>$85.2</span>
          <div className={styles.spacer}></div>
          <span className={styles.wallet_coin__price_unit}>USD</span>
        </div>
        <div className={styles.wallet_coin__average_price}>
          <span className={styles.wallet_coin__price__have}>$36.4</span>
          <div className={styles.spacer}></div>
          <span className={styles.wallet_coin__price_unit}>USD</span>
        </div>
        <div className={styles.wallet_coin__profit_ratio}>6.8%</div>
      </div>
      <div className={styles.wallet_coins_container}>
        <div className={styles.wallet_coin__title}>하민울보</div>
        <div className={styles.wallet_coin__price}>
          <span className={styles.wallet_coin__price__have}>$415.9</span>
          <div className={styles.spacer}></div>
          <span className={styles.wallet_coin__price__unit}>USD</span>
        </div>
        <div className={styles.wallet_coin__stock}>4</div>
        <div className={styles.wallet_coin__total}>
          <span className={styles.wallet_coin__price__have}>$1663.2</span>
          <div className={styles.spacer}></div>
          <span className={styles.wallet_coin__price_unit}>USD</span>
        </div>
        <div className={styles.wallet_coin__average_price}>
          <span className={styles.wallet_coin__price__have}>$501.9</span>
          <div className={styles.spacer}></div>
          <span className={styles.wallet_coin__price_unit}>USD</span>
        </div>
        <div className={styles.wallet_coin__profit_ratio}>-16.3%</div>
      </div>
      <div className={styles.wallet_coins_container}>
        <div className={styles.wallet_coin__title}>하민울보</div>
        <div className={styles.wallet_coin__price}>
          <span className={styles.wallet_coin__price__have}>$415.9</span>
          <div className={styles.spacer}></div>
          <span className={styles.wallet_coin__price__unit}>USD</span>
        </div>
        <div className={styles.wallet_coin__stock}>4</div>
        <div className={styles.wallet_coin__total}>
          <span className={styles.wallet_coin__price__have}>$1663.2</span>
          <div className={styles.spacer}></div>
          <span className={styles.wallet_coin__price_unit}>USD</span>
        </div>
        <div className={styles.wallet_coin__average_price}>
          <span className={styles.wallet_coin__price__have}>$501.9</span>
          <div className={styles.spacer}></div>
          <span className={styles.wallet_coin__price_unit}>USD</span>
        </div>
        <div className={styles.wallet_coin__profit_ratio}>-16.3%</div>
      </div>
      <div className={styles.wallet_coins_container}>
        <div className={styles.wallet_coin__title}>하민울보</div>
        <div className={styles.wallet_coin__price}>
          <span className={styles.wallet_coin__price__have}>$415.9</span>
          <div className={styles.spacer}></div>
          <span className={styles.wallet_coin__price__unit}>USD</span>
        </div>
        <div className={styles.wallet_coin__stock}>4</div>
        <div className={styles.wallet_coin__total}>
          <span className={styles.wallet_coin__price__have}>$1663.2</span>
          <div className={styles.spacer}></div>
          <span className={styles.wallet_coin__price_unit}>USD</span>
        </div>
        <div className={styles.wallet_coin__average_price}>
          <span className={styles.wallet_coin__price__have}>$501.9</span>
          <div className={styles.spacer}></div>
          <span className={styles.wallet_coin__price_unit}>USD</span>
        </div>
        <div className={styles.wallet_coin__profit_ratio}>-16.3%</div>
      </div>
      <div className={styles.wallet_coins_container}>
        <div className={styles.wallet_coin__title}>하민울보</div>
        <div className={styles.wallet_coin__price}>
          <span className={styles.wallet_coin__price__have}>$415.9</span>
          <div className={styles.spacer}></div>
          <span className={styles.wallet_coin__price__unit}>USD</span>
        </div>
        <div className={styles.wallet_coin__stock}>4</div>
        <div className={styles.wallet_coin__total}>
          <span className={styles.wallet_coin__price__have}>$1663.2</span>
          <div className={styles.spacer}></div>
          <span className={styles.wallet_coin__price_unit}>USD</span>
        </div>
        <div className={styles.wallet_coin__average_price}>
          <span className={styles.wallet_coin__price__have}>$501.9</span>
          <div className={styles.spacer}></div>
          <span className={styles.wallet_coin__price_unit}>USD</span>
        </div>
        <div className={styles.wallet_coin__profit_ratio}>-16.3%</div>
      </div>
      <div className={styles.wallet_coins_container}>
        <div className={styles.wallet_coin__title}>하민울보</div>
        <div className={styles.wallet_coin__price}>
          <span className={styles.wallet_coin__price__have}>$415.9</span>
          <div className={styles.spacer}></div>
          <span className={styles.wallet_coin__price__unit}>USD</span>
        </div>
        <div className={styles.wallet_coin__stock}>4</div>
        <div className={styles.wallet_coin__total}>
          <span className={styles.wallet_coin__price__have}>$1663.2</span>
          <div className={styles.spacer}></div>
          <span className={styles.wallet_coin__price_unit}>USD</span>
        </div>
        <div className={styles.wallet_coin__average_price}>
          <span className={styles.wallet_coin__price__have}>$501.9</span>
          <div className={styles.spacer}></div>
          <span className={styles.wallet_coin__price_unit}>USD</span>
        </div>
        <div className={styles.wallet_coin__profit_ratio}>-16.3%</div>
      </div>
      <div className={styles.wallet_coins_container}>
        <div className={styles.wallet_coin__title}>하민울보</div>
        <div className={styles.wallet_coin__price}>
          <span className={styles.wallet_coin__price__have}>$415.9</span>
          <div className={styles.spacer}></div>
          <span className={styles.wallet_coin__price__unit}>USD</span>
        </div>
        <div className={styles.wallet_coin__stock}>4</div>
        <div className={styles.wallet_coin__total}>
          <span className={styles.wallet_coin__price__have}>$1663.2</span>
          <div className={styles.spacer}></div>
          <span className={styles.wallet_coin__price_unit}>USD</span>
        </div>
        <div className={styles.wallet_coin__average_price}>
          <span className={styles.wallet_coin__price__have}>$501.9</span>
          <div className={styles.spacer}></div>
          <span className={styles.wallet_coin__price_unit}>USD</span>
        </div>
        <div className={styles.wallet_coin__profit_ratio}>-16.3%</div>
      </div>
      <div className={styles.wallet_coins_container}>
        <div className={styles.wallet_coin__title}>하민울보</div>
        <div className={styles.wallet_coin__price}>
          <span className={styles.wallet_coin__price__have}>$415.9</span>
          <div className={styles.spacer}></div>
          <span className={styles.wallet_coin__price__unit}>USD</span>
        </div>
        <div className={styles.wallet_coin__stock}>4</div>
        <div className={styles.wallet_coin__total}>
          <span className={styles.wallet_coin__price__have}>$1663.2</span>
          <div className={styles.spacer}></div>
          <span className={styles.wallet_coin__price_unit}>USD</span>
        </div>
        <div className={styles.wallet_coin__average_price}>
          <span className={styles.wallet_coin__price__have}>$501.9</span>
          <div className={styles.spacer}></div>
          <span className={styles.wallet_coin__price_unit}>USD</span>
        </div>
        <div className={styles.wallet_coin__profit_ratio}>-16.3%</div>
      </div>
      <div className={styles.wallet_coins_container}>
        <div className={styles.wallet_coin__title}>하민울보</div>
        <div className={styles.wallet_coin__price}>
          <span className={styles.wallet_coin__price__have}>$415.9</span>
          <div className={styles.spacer}></div>
          <span className={styles.wallet_coin__price__unit}>USD</span>
        </div>
        <div className={styles.wallet_coin__stock}>4</div>
        <div className={styles.wallet_coin__total}>
          <span className={styles.wallet_coin__price__have}>$1663.2</span>
          <div className={styles.spacer}></div>
          <span className={styles.wallet_coin__price_unit}>USD</span>
        </div>
        <div className={styles.wallet_coin__average_price}>
          <span className={styles.wallet_coin__price__have}>$501.9</span>
          <div className={styles.spacer}></div>
          <span className={styles.wallet_coin__price_unit}>USD</span>
        </div>
        <div className={styles.wallet_coin__profit_ratio}>-16.3%</div>
      </div>
    </div>
  </div>
);

const wallet = () => {
  return (
    <Container _str_title={TITLE_WALLET} _is_show_more={false}>
      <div id={styles.wallet_container}>
        <Pie_chart></Pie_chart>
        <div id={styles.wallet_description}>
          <Card _str_title={`${"User Name Here"}님의 지갑`}>
            {comp_children__wallet}
          </Card>
        </div>
      </div>
    </Container>
  );
};

export default wallet;
