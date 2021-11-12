const { default: axios } = require("axios");

const { SALT, HASH_LENGTH, IP, URL__CHECKID, URL__SIGNIN, URL__SIGNUP } =
  process.env;

const id = `test`;
const pw = `testtest1.`;
const nickname = `testtest`;
const email = `testtest@ut.ac.kr`;

const fn_hashing = (pw) => {
  const missing = HASH_LENGTH - pw.length; // 36-pw개수 = 빈 부분 채우기
  let temp = pw + SALT.substr(0, missing); // SALT.substr(0)
  temp = temp
    .split("")
    .map((t, idx) => {
      const something = (t.charCodeAt() * (idx + 3)) % 127;
      return something > 33 ? something : something + 33;
    })
    .map((t) => (t = String.fromCharCode(t)))
    .join("");

  return temp;
};

const fn_REST__signin = async () => {
  const url = IP + URL__SIGNIN;
  try {
    const res = await axios.get(url, { params: { id, pw: fn_hashing(pw) } });

    console.log(res.data);
  } catch (e) {
    console.error(e);
  }
};

const fn_REST__signup = async () => {
  const url = IP + URL__SIGNUP;
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

const fn_REST__checkid = async () => {
  const url = IP + URL__CHECKID;
  const res = await axios.get(url, { params: { id } });
  console.log(res.data);
};

const fn__clg = () => {
  console.log(IP);
};

fn_REST__signin();
