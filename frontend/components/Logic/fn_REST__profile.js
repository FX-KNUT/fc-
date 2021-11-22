import { useState } from "react";
import Image from "next/image";

const Fn_REST__profile = () => {
  const [profile, set_profile] = useState(null);

  const request_img_url =
    process.env.NEXT_PUBLIC_IP + process.env.NEXT_PUBLIC_URL__PROFILE;
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
    <div>
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
      {profile && (
        <Image alt={profile} src={profile} width="300" height="300" />
      )}
    </div>
  );
};

export default Fn_REST__profile;
