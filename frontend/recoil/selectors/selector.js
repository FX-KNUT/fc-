import { selector } from "recoil";
import { language, language_state } from "../atoms/atoms";

const korea = [
  {
    href: "#",
    span: "가이드",
  },
  {
    href: "#",
    span: "내 지갑",
  },
  {
    href: "#",
    span: "투자정보",
  },
  {
    href: "#",
    span: "거래소",
  },
  {
    href: "#",
    span: "관심종목",
  },
  {
    href: "#",
    span: "고객센터",
  },
];

const english = [
  {
    href: "#",
    span: "Guide",
  },
  {
    href: "#",
    span: "Wallet",
  },
  {
    href: "#",
    span: "Info",
  },
  {
    href: "#",
    span: "Exchange",
  },
  {
    href: "#",
    span: "Interest",
  },
  {
    href: "#",
    span: "Customer",
  },
];

const gnb = {
  korea,
  english,
};

export const curr_language = selector({
  key: "curr_language",
  get: ({ get }) => {
    const language = get(language_state);

    switch (language) {
      case "한국어":
        return gnb.korea;
      case "English":
        return gnb.english;
    }
  },
});
