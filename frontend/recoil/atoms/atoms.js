import { atom } from "recoil";

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

export const color = atom({
  key: "color",
  default: "#F0E8E4",
});
