import axios from "axios";

const fn_REST_GET__signin = async (id, pw) => {
  const url = "http://122.37.94.182:8096/signin";
  try {
    const res = await axios.get(url, { params: { id, pw: pw } });
    const { data } = res;
    console.log(data);
  } catch (e) {
    console.error(e);
  }
};

fn_REST_GET__signin("djksflafjk", "dfjkfjdk");
