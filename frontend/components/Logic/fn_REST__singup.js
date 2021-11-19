import axios from "axios";
import fn_hashing from "./fn_hashing";

const fn_REST__singup = async (id, pw, nickname, email) => {
  const url = process.env.NEXT_PUBLIC_IP + process.env.NEXT_PUBLIC_SIGNUP;

  try {
    const res = await axios.post(url, {
      id,
      hashed_pw: fn_hashing(pw),
      nickname,
      email,
    });
    console.log(res.data);
  } catch (e) {
    console.error(e);
  }
};

export default fn_REST__singup;
