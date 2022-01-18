// 제작 안할 수도 있음.
import styles from "../../styles/t_fx_comp.module.scss";
import Modal from "./t_fx__modal";

const T_fx__alert = ({ str__title, str__content }) => {
  return (
    <article className={styles.alert_wrapper}>
      <div>
        <h2>{str__title}</h2>
        <p>{str__content}</p>
      </div>
      <button>BUTTON</button>
    </article>
  );
};

export default T_fx__alert;
