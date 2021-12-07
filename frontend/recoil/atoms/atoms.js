import { atom } from "recoil";
// import variable from "../../styles/_variable.scss";

export const language_state = atom({
  key: "language_state",
  default: "한국어",
});

export const user = atom({
  key: "user",
  default: null,
});

export const logged = atom({
  key: "logged",
  default: false,
});

// export const color_mode = atom({
//   key: "color_mode",
//   default: variable.$default_bg,
// });
