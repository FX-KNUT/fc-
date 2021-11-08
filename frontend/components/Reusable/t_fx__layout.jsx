import Header from "../Common/Header";
import HeadInfo from "../Common/HeadInfo";

const t_fx__layout = ({ children }) => {
  return (
    <>
      <HeadInfo></HeadInfo>
      <Header></Header>
      <div>{children}</div>
    </>
  );
};

export default t_fx__layout;
