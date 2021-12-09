import Sns from "./sns/sns";
import Header_main from "./main/header_main";
import Gnb from "./gnb/gnb";
import styles from "../../../styles/header/_header.module.scss";

const header_components = [
  {
    alt: "sns",
    component: <Sns />,
  },
  {
    alt: "header_main",
    component: <Header_main />,
  },
  {
    alt: "gnb",
    component: <Gnb />,
  },
];

const header = () => {
  return (
    <header className={styles.header}>
      {header_components.map((component) => (
        <div key={component.alt}>{component.component}</div>
      ))}
    </header>
  );
};

export default header;
