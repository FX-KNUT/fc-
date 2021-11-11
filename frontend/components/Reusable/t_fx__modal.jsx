import ReactDOM from "react-dom";
import styles from "../../styles/t_fx_comp.module.css";
import Card from "./t_fx__card";

const T_fx__modal = ({ children, is_show, fn_on_close }) => {
  return (
    is_show &&
    ReactDOM.createPortal(
      <div className={styles.comp_modal_wrapper} onClick={() => fn_on_close()}>
        <div
          className={styles.comp_modal_content}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div
            className={styles.comp_modal_btn_close}
            onClick={() => fn_on_close()}
          >
            X
          </div>
          <Card>{children}</Card>
        </div>
      </div>,
      document.getElementById("modal")
    )
  );
};

export default T_fx__modal;
