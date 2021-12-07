import { selector } from "recoil";
import { language, language_state } from "../atoms/atoms";

export const curr_language = selector({
  key: "curr_language",
  get: ({ get }) => {
    const language = get(language_state);

    switch (language) {
      case "한국어":
        return korea_gnb;
      case "English":
        return english_gnb;
    }
  },
});

const korea_gnb = [
  {
    href: "#",
    item: "가이드",
  },
  {
    href: "#",
    item: "내 지갑",
  },
  {
    href: "#",
    item: "투자정보",
  },
  {
    href: "#",
    item: "거래소",
  },
  {
    href: "#",
    item: "관심종목",
  },
  {
    href: "#",
    item: "고객센터",
  },
];

const english_gnb = [
  {
    href: "#",
    item: "Guide",
  },
  {
    href: "#",
    item: "Wallet",
  },
  {
    href: "#",
    item: "Info",
  },
  {
    href: "#",
    item: "Exchange",
  },
  {
    href: "#",
    item: "Interest",
  },
  {
    href: "#",
    item: "Service",
  },
];
