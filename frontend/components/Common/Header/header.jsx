import Sns from "./sns/sns";
import Header_main from "./main/header_main";
import Gnb from "./gnb/gnb";
import styles from "../../../styles/header/_header.module.scss";
import { useRecoilValue } from "recoil";
import { color } from "../../../recoil/atoms/atoms";

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
  // global state
  const curr_color = useRecoilValue(color);

  return (
    <header className={styles.header} style={{ backgroundColor: curr_color }}>
      {header_components.map((component) => (
        <div key={component.alt}>{component.component}</div>
      ))}
    </header>
  );
};

export default Header;
