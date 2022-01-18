import { selector } from "recoil";
import { language, language_state } from "../atoms/atoms";

const korea = [
  { href: "/", span: "홈" },
  {
    href: "/guide",
    span: "가이드",
  },
  {
    href: "/wallet",
    span: "내 지갑",
  },
  {
    href: "/info",
    span: "투자정보",
  },
  {
    href: "/trade/bannyangjun",
    span: "거래소",
  },
  {
    href: "/interest",
    span: "관심종목",
  },
  {
    href: "/help",
    span: "고객센터",
  },
  {
    href: "/mining",
    span: "채굴"
  },
];

//
const english = [
  { href: "/", span: "Home" },
  {
    href: "/guide",
    span: "Guide",
  },
  {
    href: "/wallet",
    span: "Wallet",
  },
  {
    href: "/info",
    span: "Info",
  },
  {
    href: "/trade/bannyangjun",
    span: "Trade",
  },
  {
    href: "/interest",
    span: "Interest",
  },
  {
    href: "/help",
    span: "Customer",
  },
  {
    href: "/mining",
    span: "Mining"
  },
];

// global navigation bar
const gnb = {
  korea,
  english,
};

// navigation
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
