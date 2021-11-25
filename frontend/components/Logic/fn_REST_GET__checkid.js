import axios from "axios";

const fn_REST_GET__checkid = async (id) => {
  const url = process.env.NEXT_PUBLIC_IP + process.env.NEXT_PUBLIC_URL__CHECKID;
  try {
    const res = await axios.get(url, { params: { id } });
    console.log(res.data);
  } catch (e) {
    console.error(e);
  }
};

export default fn_REST_GET__checkid;
