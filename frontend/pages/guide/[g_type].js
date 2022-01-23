import { useRouter } from "next/router";
import Guide_wrapper from "../../components/Common/Main/guide/guide_wrapper";
import Guide_type_wrapper from "../../components/Common/Main/guide/guide_type_wrapper";
import Guide_gutter from "../../components/Common/Main/guide/guide_gutter";
import Guide_type from "../../components/Common/Main/guide/guide_type";

const Type = () => {
  const router = useRouter();
  const { g_type } = router.query;

  return (
    <Guide_wrapper>
      <Guide_type_wrapper g_type={g_type}>
        <Guide_type g_type={g_type}></Guide_type>
      </Guide_type_wrapper>
    </Guide_wrapper>
  );
};

export default Type;
