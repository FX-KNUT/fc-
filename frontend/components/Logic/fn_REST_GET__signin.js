import fn_hashing from "./fn_hashing";

const fn_REST_GET__signin = async (id, pw) => {
  const url = process.env.NEXT_PUBLIC_IP + process.env.NEXT_PUBLIC_URL__SIGNIN;
  try {
    const res = await axios.get(url, { params: { id, pw: fn_hashing(pw) } });

    console.log(res.data);
  } catch (e) {
    console.error(e);
  }
};

export default fn_REST_GET__signin;
