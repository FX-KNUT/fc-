import { useRecoilValue } from "recoil";
import { color_font_state } from "../../recoil/atoms/atoms";
import HeadInfo from "../Common/HeadInfo";

const T_fx__layout = ({ children }) => {
  // global state
  const curr_color = useRecoilValue(color_font_state);
  return (
    <>
      <HeadInfo></HeadInfo>
      <div style={{ color: curr_color }}>{children}</div>
    </>
  );
};

export default T_fx__layout;
