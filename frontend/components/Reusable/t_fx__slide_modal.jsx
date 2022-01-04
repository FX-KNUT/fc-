import ReactDOM from "react-dom";
import { useRecoilValue } from "recoil";
import { color_bg_state } from "../../recoil/atoms/atoms";
import styles from "../../styles/t_fx_comp.module.scss";

const T_fx__slide_modal = ({ children, is_show__modal, fn_on_close }) => {
  const curr_color = useRecoilValue(color_bg_state);
  return (
    is_show__modal &&
    ReactDOM.createPortal(
      <>
        <div
          className={styles.comp_slide_modal_container}
          onClick={() => fn_on_close()}
        >
          <div
            className={styles.comp_modal_content}
            id="slide_modal_content"
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
            <div>{children}</div>
          </div>
        </div>
        <style jsx>{`
          #slide_modal_content {
            background-color: ${curr_color};
          }
        `}</style>
      </>,
      document.getElementById("modal")
    )
  );
};

export default T_fx__slide_modal;
