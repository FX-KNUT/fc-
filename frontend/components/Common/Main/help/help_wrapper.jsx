import axios from "axios";
import { useState } from "react";

import styles from "../../../../styles/main/help/_help_wrapper.module.scss";

const comp_help_wrapper = () => {
  const [state__obj_form_data, set_state__obj_form_data] = useState({
    title: "",
    content: "",
  });
  const [state__is_submit, set_state__is_submit] = useState(false);

  const fn_handler__on_submit__help_form = (e) => {
    const IP = process.env.NEXT_PUBLIC_IP;
    const ENDPOINT = process.env.NEXT_PUBLIC_HELP || "/help";

    e.preventDefault();
    axios
      .post(`${IP}${ENDPOINT}`, {})
      .then((res) => {
        if (res.status === 200) {
          set_state__is_submit(true);
        }
      })
      .catch((err) => {
        console.error(
          `Error: components/Common/Main/help/help_wrapper - fn_handler__on_submit__help_form\n${err}`
        );
      });
  };
  const fn_handler__on_change__input = (e) => {
    const e_curr_tg = e.currentTarget;
    set_state__obj_form_data({
      ...state__obj_form_data,
      title: e_curr_tg.value,
    });
  };

  const fn_handler__on_change__txta = (e) => {
    const e_curr_tg = e.currentTarget;

    if (e_curr_tg.scrollHeight > 214) {
      e_curr_tg.style.height = "auto";
      e_curr_tg.style.height = `${e_curr_tg.scrollHeight + 8}px`;
    }
    // e_curr_tg.style.height = "auto";
    // console.log(e_curr_tg.style.height, e_curr_tg.scrollHeight);
    // e_curr_tg.style.height = `${e_curr_tg.scrollHeight + 8}px`;
    set_state__obj_form_data({
      ...state__obj_form_data,
      content: e_curr_tg.value,
    });

    console.log(e_curr_tg.style.height, e_curr_tg.scrollHeight);
  };

  return (
    <main className={styles.help_wrapper}>
      <p>어떤 도움이 필요하십니까?</p>

      <form onSubmit={fn_handler__on_submit__help_form}>
        <fieldset className={styles.help_wrapper_inner}>
          <legend>제목</legend>
          <input
            name="title"
            type="text"
            placeholder="제목을 입력해주세요..."
            onChange={fn_handler__on_change__input}
          />
        </fieldset>
        <fieldset className={styles.help_wrapper_inner}>
          <legend>내용</legend>
          <textarea
            name="content"
            placeholder="내용을 입력해주세요..."
            onChange={fn_handler__on_change__txta}
          ></textarea>
        </fieldset>
        <button type="submit">{state__is_submit ? "제출 완료" : "제출"}</button>
      </form>
    </main>
  );
};

export default comp_help_wrapper;
