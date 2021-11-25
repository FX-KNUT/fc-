import Down_arrow from "../../public/down_arrow.svg";
import Image from "next/image";
import styles from "../../styles/t_fx_comp.module.css";
import { useEffect, useState } from "react";

const T_fx__expandable = ({ _str_title, _obj_blockquote, children }) => {
  //state
  const [is_show_detail, set_is_show_detail] = useState(false);
  const [is_switch_arrow, set_is_switch_arrow] = useState(false);

  // event
  const on_click_arrow = () => {
    set_is_show_detail(!is_show_detail);
    set_is_switch_arrow(!is_switch_arrow);
  };
  return (
    <div className={styles.comp_expandable}>
      <div className={styles.comp_expandable_title_wrapper}>
        <h3 className={styles.comp_expandable_title}>{_str_title}</h3>
        {/* <Image alt="down_arrow" width="50" height="50"></Image> */}
        <Down_arrow
          width="24px"
          height="24px"
          className={`${styles.comp_expandable_down_arrow} ${
            is_switch_arrow && styles.active_arrow
          }`}
          onClick={on_click_arrow}
        />
      </div>
      {is_show_detail && (
        <section
          className={`${styles.comp_expandable_detail_wrapper} ${
            is_show_detail && styles.active_detail
          }`}
        >
          <section className={styles.comp_expandable_detail_title}>
            {_str_title}
          </section>
          <hr />
          <div className={styles.comp_expandable_detail_blockquote_wrapper}>
            <section className={styles.comp_expandable_detail_blockquote}>
              <blockquote>{_obj_blockquote}</blockquote>
            </section>
          </div>
          <hr />
          <section className={styles.comp_expandable_detail_detail}>
            {children}
          </section>
        </section>
      )}
    </div>
  );
};

export default T_fx__expandable;
