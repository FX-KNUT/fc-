import Ranking from "../../components/Common/Main/trade/ranking";
import Card_pad from "../../components/Reusable/t_fx__card_pad";
import Summary from "../../components/Common/Main/trade/summary";
import Trade from "../../components/Common/Main/trade/trade";
import Chart from "../../components/Common/Main/trade/chart";
import Ask_price from "../../components/Common/Main/trade/ask_price";
import styles from "../../styles/main/trade/_coin.module.scss";
import { useSetRecoilState } from "recoil";
import { price_state } from "../../recoil/atoms/atoms";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Slide_modal from "../../components/Reusable/t_fx__slide_modal";
import axios from "axios";

const dummy_data = {
  dummy_coin: {
    is_favorite: true,
    coin_name: "차",
    price: 59955000,
    rate: "+0.49%",
    volume: "37,611백만",
    high_price: 61000000,
    low_price: 59000100,
  },
};

const { dummy_coin } = dummy_data;

const exchange_components = [
  {
    alt: "summary",
    component: <Summary _obj_coin={dummy_coin}></Summary>,
  },
  {
    alt: "chart",
    component: <Chart></Chart>,
  },
  {
    alt: "ranking",
    component: <Ranking></Ranking>,
  },
  {
    alt: "order",
    component: <Ask_price _int_price={dummy_coin.price}></Ask_price>,
  },
  {
    alt: "trade",
    component: <Trade></Trade>,
  },
];

const Coin = () => {
  //
  const [fetch_data, set_fetch_data] = useState({});

  // local state
  const [is_show__modal, set_is_show__modal] = useState(false);

  // global state
  const set_order_price = useSetRecoilState(price_state);

  // event
  const fn_on_close = () => {
    set_is_show__modal(false);
  };

  // useRouter
  const router = useRouter();
  console.log(router);

  useEffect(() => {
    set_order_price(dummy_coin.price);
  });

  const fetch = async () => {
    try {
      const res = axios.get(`${router}`);
      set_fetch_data(res.data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetch();
    setInterval(() => {
      const res = axios.get(``);
    });
  });

  return (
    <main className={styles.exchange_wrapper}>
      {exchange_components.map((component) => {
        const cn = component.alt + "_wrapper";
        return (
          <div key={component.alt} className={styles[cn]}>
            <Card_pad>{component.component}</Card_pad>
          </div>
        );
      })}
      <div className={styles.modal_ranking}>
        <i
          className="fas fa-chevron-circle-left"
          onClick={() => set_is_show__modal(true)}
        ></i>
      </div>
      <Slide_modal is_show__modal={is_show__modal} fn_on_close={fn_on_close}>
        <Card_pad>
          <Ranking></Ranking>
        </Card_pad>
      </Slide_modal>
    </main>
  );
};

export default Coin;
