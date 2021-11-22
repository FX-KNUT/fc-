import { useState } from "react";

const Fn_modal_close = () => {
  const [is_show, set_is_show] = useState(false);

  const fn_on_close = () => {
    set_is_show(false);
  };
  return (
    <div>
      <button onClick={() => set_is_show(true)}>Open modal</button>
    </div>
  );
};

export default Fn_modal_close;
