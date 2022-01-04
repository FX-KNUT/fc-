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

export const color_bg_state = atom({
  key: "color_bg_state",
  default: "#F9EBDE",
});

export const color_font_state = atom({
  key: "color_font_state",
  default: "#815854",
});

export const price_state = atom({
  key: "price_state",
  default: 0,
});
