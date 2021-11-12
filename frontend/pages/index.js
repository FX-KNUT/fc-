import { useEffect, useState } from "react";
import Image from "next/image";
import Card from "../components/Reusable/t_fx__card";
import Modal from "../components/Reusable/t_fx__modal";

export default function Home() {
  const [is_show, set_is_show] = useState(false);
  const [profile, set_profile] = useState(null);

  const request_img_url =
    process.env.NEXT_PUBLIC_IP + process.env.NEXT_PUBLIC_URL__PROFILE;

  const fn_on_close = () => {
    set_is_show(false);
  };

  const fn_on_change_profile = (e) => {
    if (e.target.files.length) {
      const img_target = e.target.files[0];
      const fr = new FileReader();
      fr.readAsDataURL(img_target);
      fr.onload = (e) => {
        set_profile(e.target.result);
      };
    }
  };
  return (
    <div id="root">
      <h1>Welcome to Fc</h1>
      <button onClick={() => set_is_show(true)}>Open modal</button>
      <Card>
        <input type="color" />
        <div>arrow function</div>
      </Card>
      {profile && (
        <Image alt={profile} src={profile} width="300" height="300" />
      )}
      <form
        name="change_profile_picture"
        method="POST"
        action={request_img_url}
        encType="multipart/form-data"
      >
        <input
          type="file"
          accept="image/*"
          defaultValue={profile}
          onChange={fn_on_change_profile}
        />
        <button type="submit">change_profile</button>
      </form>

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
