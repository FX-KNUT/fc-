import Layout from "../components/Reusable/t_fx__layout";
import Header from "../components/Common/Header/header.jsx";
import Footer from "../components/Common/Footer/footer.jsx";
import Ic_Top from "../public/ic_top.svg";
import "../styles/globals.scss";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";

function MyApp({ Component, pageProps }) {
  // event
  const on_move_top = () => {
    document.documentElement.scrollTop = 0;
  };
  return (
    <RecoilRoot>
      <Layout>
        <div id="root">
          <Header></Header>
          <Component {...pageProps} />
          <Footer></Footer>
        </div>
        <div
          id="modal"
          style={{
            position: "fixed",
            zIndex: 5,
          }}
        ></div>
        <div
          style={{ position: "fixed", right: "20px", bottom: "20px" }}
          onClick={on_move_top}
        >
          <Ic_Top></Ic_Top>
        </div>
      </Layout>
    </RecoilRoot>
  );
}

export default MyApp;
