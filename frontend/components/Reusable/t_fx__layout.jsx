import HeadInfo from "../Common/HeadInfo";

const t_fx__layout = ({ children }) => {
  return (
    <>
      <HeadInfo></HeadInfo>
      <div>{children}</div>
    </>
  );
};

export default t_fx__layout;
