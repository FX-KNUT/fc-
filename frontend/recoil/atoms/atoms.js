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

export const price_state = atom({
  key: "price_state",
  default: 0,
});

export const dark_state = atom({
  key: "dark_state",
  default: false,
});
