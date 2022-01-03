import Guide_menu from "../../components/Common/Main/guide/guide_menu";
import Guide_wrapper from "../../components/Common/Main/guide/guide_wrapper";
import Guide_type_wrapper from "../../components/Common/Main/guide/guide_type_wrapper";
import Guide_gutter from "../../components/Common/Main/guide/guide_gutter";
import Guide_buying from "../../components/Common/Main/guide/guide_buying";

const Buying = () => {
  return (
    <Guide_wrapper>
      <Guide_gutter></Guide_gutter>
      <Guide_type_wrapper>
        <Guide_buying></Guide_buying>
      </Guide_type_wrapper>
      <Guide_gutter></Guide_gutter>
    </Guide_wrapper>
  );
};

export default Buying;
