import styles from "../../../styles/_header.module.scss";

import Sns from "./sns";
import Logo from "./logo";
import Gnb from "./gnb";

const header_contents = [
  {
    alt: "sns",
    component: <Sns />,
  },
  {
    alt: "logo",
    component: <Logo />,
  },
  {
    alt: "gnb",
    component: <Gnb />,
  },
];

const header = () => {
  return (
    <header className={styles.header}>
      {header_contents.map((content) => (
        <div key={content.alt}>{content.component}</div>
      ))}
    </header>
  );
};

export default header;
