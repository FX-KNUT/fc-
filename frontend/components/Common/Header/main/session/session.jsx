import styles from "../../../../../styles/header/main/session/_header_main_session.module.scss";
import Login from "./login/login";
import Palette from "./palette/palette";
import Language from "./language/language";
import axios from "axios";

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
  return (
    <div>
      <div className={styles.session_wrapper}>
        {session_components.map((component) => (
          <div key={component.alt}>{component.component}</div>
        ))}
      </div>
    </div>
  );
};

export default Session;
