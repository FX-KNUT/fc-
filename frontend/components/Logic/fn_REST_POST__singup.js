import axios from "axios";
import fn_hashing from "./fn_hashing";

const fn_REST_POST__singup = async (id, pw, nickname, email) => {
  const url = process.env.NEXT_PUBLIC_IP + process.env.NEXT_PUBLIC_URL__SIGNUP;

  try {
    const obj_post = {
      id,
      hashed_pw: fn_hashing(pw),
      nickname,
      email,
    }
    const res = await axios.post(url, obj_post);
    const { data } = res;
    console.log(data);
  } catch (e) {
    console.error(e);
  }
};

export default fn_REST_POST__singup;
