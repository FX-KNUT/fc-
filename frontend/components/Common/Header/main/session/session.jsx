import styles from "../../../../../styles/header/main/session/_header_main_session.module.scss";
import Login from "./login/login";
import Palette from "./palette/palette";
import Language from "./language/language";
import Slide_modal from "../../../../Reusable/t_fx__slide_modal";
import Hamburger_menu from "../../hamburger_menu";
import { useState } from "react";

const session_components = [
  {
    alt: "login",
    component: <Login />,
  },
  {
    alt: "language",
    component: <Language />,
  },
  {
    alt: "palette",
    component: <Palette />,
  },
];

const Session = () => {
  // local state
  const [is_show__modal, set_is_show__modal] = useState(false);

  // event
  const fn_on_close = () => {
    set_is_show__modal(false);
  };

  return (
    <div>
      <div className={styles.session_wrapper}>
        {session_components.map((component) => (
          <div key={component.alt}>{component.component}</div>
        ))}
        <div
          className={styles.hamburger}
          onClick={() => set_is_show__modal(true)}
        >
          <i className="fas fa-bars"></i>
        </div>
      </div>
      <Slide_modal is_show__modal={is_show__modal} fn_on_close={fn_on_close}>
        <Hamburger_menu></Hamburger_menu>
      </Slide_modal>
    </div>
  );
};

export default Session;
