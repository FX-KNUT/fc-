import Header_main from "./main/header_main";
import Gnb from "./gnb/gnb";
import styles from "../../../styles/header/_header.module.scss";
import { useRecoilValue } from "recoil";
import { dark_state } from "../../../recoil/atoms/atoms";

const header_components = [
  {
    alt: "header_main",
    component: <Header_main />,
  },
  {
    alt: "gnb",
    component: <Gnb />,
  },
];

const Header = () => {
  const is_dark = useRecoilValue(dark_state);
  return (
    <header className={`${styles.header} ${styles[is_dark && "on"]}`}>
      {header_components.map((component) => (
        <div key={component.alt} className={styles[component.alt]}>
          {component.component}
        </div>
      ))}
    </header>
  );
};

export default Header;
