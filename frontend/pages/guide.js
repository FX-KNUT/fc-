import Card_pad from "../components/Reusable/t_fx__card_pad";
import styles from "../styles/main/guide/_guide.module.scss";
import Link from "next/link";
import Guide_wrapper from "../components/Common/Main/guide/guide_wrapper";
import Guide_all_types_wrapper from "../components/Common/Main/guide/guide_all_types_wrapper";
import Guide_type_wrapper from "../components/Common/Main/guide/guide_type_wrapper";
import Guide_type from "../components/Common/Main/guide/guide_type";

const guide_all_list = [
  {
    alt: "buying",
    type: "buying",
  },
  {
    alt: "selling",
    type: "selling",
  },
  {
    alt: "coin_info",
    type: "coin_info",
  },
];

const guide = () => {
  return (
    <Guide_wrapper>
      <Guide_all_types_wrapper>
        {guide_all_list.map((g_list, i) => (
          <Guide_type_wrapper key={g_list.alt} g_type={g_list.type}>
            <Guide_type g_type={g_list.type}></Guide_type>
          </Guide_type_wrapper>
        ))}
      </Guide_all_types_wrapper>
    </Guide_wrapper>
  );
};

export default guide;
