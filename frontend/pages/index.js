import { useState } from "react";
import Card from "../components/Reusable/t_fx__card";
import Modal from "../components/Reusable/t_fx__modal";

export default function Home() {
  const [is_show, set_is_show] = useState(false);

  const fn_on_close = () => {
    set_is_show(false);
  };
  return (
    <div id="root">
      <h1>Welcome to Fc</h1>
      <button onClick={() => set_is_show(true)}>Open modal</button>
      <Card>
        <input type="color" />
        <div>arrow function</div>
      </Card>
      <Card>
        <input type="color" />
        <div>arrow function</div>
      </Card>
      <Card>
        <input type="color" />
        <div>arrow function</div>
      </Card>
      <Card>
        <input type="color" />
        <div>arrow function</div>
      </Card>
      <Card>
        <input type="color" />
        <div>arrow function</div>
      </Card>
      <Card>
        <input type="color" />
        <div>arrow function</div>
      </Card>
      <Card>
        <input type="color" />
        <div>arrow function</div>
      </Card>
      <Card>
        <input type="color" />
        <div>arrow function</div>
      </Card>
      <Card>
        <input type="color" />
        <div>arrow function</div>
      </Card>
      <Card>
        <input type="color" />
        <div>arrow function</div>
      </Card>
      <Card>
        <input type="color" />
        <div>arrow function</div>
      </Card>
      <Card>
        <input type="color" />
        <div>arrow function</div>
      </Card>
      <Card>
        <input type="color" />
        <div>arrow function</div>
      </Card>

      <Modal is_show={is_show} fn_on_close={fn_on_close}>
        <div>
          <input type="color" />
          <input type="color" />
          <input type="color" />
          <input type="color" />
          <input type="color" />
          <input type="color" />
          <input type="color" />
          <input type="color" />
        </div>
      </Modal>
    </div>
  );
}
