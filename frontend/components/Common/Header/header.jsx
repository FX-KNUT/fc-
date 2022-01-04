import Header_main from "./main/header_main";
import Gnb from "./gnb/gnb";
import styles from "../../../styles/header/_header.module.scss";
import { useRecoilValue } from "recoil";
import { color_bg_state } from "../../../recoil/atoms/atoms";
import { useState } from "react";

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
  const curr_color = useRecoilValue(color_bg_state);

  return (
    <>
      <header className={styles.header}>
        {header_components.map((component) => (
          <div key={component.alt} className={styles[component.alt]}>
            {component.component}
          </div>
        ))}
      </header>
      <style jsx>{`
        header {
          background-color: ${curr_color};
        }
      `}</style>
    </>
  );
};

export default Header;
