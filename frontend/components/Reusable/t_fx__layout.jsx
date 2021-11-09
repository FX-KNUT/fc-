import HeadInfo from "../Common/headinfo";

const t_fx__layout = ({ children }) => {
  return (
    <>
      <HeadInfo></HeadInfo>
      <div>{children}</div>
    </>
  );
};

export default t_fx__layout;
