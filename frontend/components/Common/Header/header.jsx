import styles from "../../../styles/_header.module.scss";

import Sns from "./sns";
import Logo from "./logo";
import Gnb from "./gnb";

const header = () => {
  return (
    <header className={styles.header}>
      <Sns></Sns>
      <Logo></Logo>
      <hr />
      <Gnb></Gnb>
      <hr />
    </header>
  );
};

export default header;
