import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

// console.log(process.env.IP);

const fn_hashing = (pw) => {
  const missing = process.env.HASH_LENGTH - pw.length; // 36-pw개수 = 빈 부분 채우기
  let temp = pw + process.env.SALT.substr(0, missing); // process.env.NEXT_PUBLIC_SALT.substr(0)
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

const fn_REST__singup = async (id, pw, nickname, email) => {
  const url = process.env.IP + process.env.URL__SIGNUP;

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

const fn_REST_GET__checkid = async (id) => {
  const url = process.env.IP + process.env.URL__CHECKID;
  try {
    const res = await axios.get(url, { params: { id } });
    console.log(res);
  } catch (e) {
    console.error(e);
  }
};

const fn_REST_POST__ = async () => {
  const url = process.env.IP_2 + process.env.URL__;
  try {
    const res = await axios.post(url, {});
    console.log(res);
  } catch (e) {
    console.error(e);
  }
};

// fn_REST__singup("testest", "alsrudgh1.", "testetst", "1736s@naver.com");

// fn_REST_GET__checkid("test");

const regex_id = /^[a-zA-Z0-9]{4,12}$/;
const regex_pw = /^[a-zA-Z0-9]{8,20}$/;
const regex_mail =
  /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[a-z0-9]+[a-z0-9]*[.]{1}[a-z0-9]{1,48}$/;
const regex_nickname = /^[A-Za-z0-9가-힣]{2,12}$/;
const testcase_list_id = [
  "test",
  "kim",
  "kim!",
  "1234test",
  "1312reggregegegergegergre",
];
// testcase_list_id.map((testcase) =>
//   console.log(`${testcase} : ${regex_id.test(testcase)}`)
// );

const post = {
  message_target: "notice",
  message_user_id: "test",
  post_title: "mingyeongho",
  message_content: "mingyeongho zzang",
  post_view_count: 0,
  post_like_count: 0,
  message_created_at:
    new Date().toISOString().substr(0, 10) +
    " " +
    new Date().toTimeString().substr(0, 9),
};

const fn_REST_POST__create_post = async (post) => {
  const url = process.env.IP_2 + "/post/" + post.message_target + "/create";
  try {
    const res = await axios.post(url, post);
    console.log(res.data);
  } catch (e) {
    console.error(e);
  }
};

// fn_REST_POST__create_post(post);

// fn_REST__singup("test", "alsrudgh1!", "민경호", "test123@naver.com");

// fn_REST_GET__checkid("testtest");
