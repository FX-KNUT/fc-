import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const language_state = atom({
  key: "language_state",
  default: "한국어",
});

export const user_state = atom({
  key: "user_state",
  default: undefined,
  effects_UNSTABLE: [persistAtom],
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
