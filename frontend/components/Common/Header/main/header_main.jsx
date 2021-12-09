// import styles from "../../../../styles/header/_header.module.scss";
import Search from "./search/search";
import Session from "./session/session";
import Logo from "./logo/logo";
import styles from "../../../../styles/header/main/_header_main.module.scss";

const header_main_components = [
  {
    alt: "search",
    component: <Search />,
  },
  {
    alt: "logo",
    component: <Logo />,
  },
  {
    alt: "session",
    component: <Session />,
  },
];

const Header_main = () => {
  return (
    <div className={styles.header_main_wrapper}>
      {header_main_components.map((component) => (
        <div key={component.alt}>{component.component}</div>
      ))}
    </div>
  );
};

export default Header_main;
