import styles from "../../../styles/_header.module.scss";

import Sns from "./sns";
import Logo from "./logo";
import Gnb from "./gnb";



const header = () => {
  return (
    <header className={styles.header}>
      <Sns></Sns>
      <hr />
      <Logo></Logo>
      <hr />
      <Gnb></Gnb>
      <hr />
    </header>
  );
};

export default header;

// header > *::after {
//   content: '';
//   position: relavant;
//   display: block;
//   width: 100%;
//   height: 1px; // or 2px 정도 ..
//   background: ??; // sass 처리
// }