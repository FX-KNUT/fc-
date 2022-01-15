import styles from "../../styles/t_fx_comp.module.scss";

const t_fx__card = ({ _str_title, children, _str_title_session }) => {
  return (
    <div className={styles.comp_card}>
      <div>
        <span>{_str_title}</span>
        {
          _str_title_session != undefined &&
          <>
            <div className={styles.spacer}></div>
            <span className={styles._str_title_session}>{_str_title_session}</span>
          </>
        }
      </div>
      <div>{children}</div>
    </div>
  );
};

export default t_fx__card;
