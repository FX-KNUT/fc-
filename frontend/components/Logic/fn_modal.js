import { useState } from "react";

const TEXT_MODAL_OPEN = "Open modal"

const Fn_modal_close = () => {
  const [is_show, set_is_show] = useState(false);

  const fn_on_close = () => {
    set_is_show(false);
  };
  return (
    <div>
      <button onClick={() => set_is_show(true)}>{TEXT_MODAL_OPEN}</button>
    </div>
  );
};

export default Fn_modal_close;
