import Header from "../Common/Header";
import HeadInfo from "../Common/HeadInfo";

const Layout = ({ children }) => {
  return (
    <>
      <HeadInfo></HeadInfo>
      <Header></Header>
      <div>{children}</div>
    </>
  );
};

export default Layout;
