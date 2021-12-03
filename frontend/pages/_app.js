import Layout from "../components/Reusable/t_fx__layout";
import Header from "../components/Common/Header/header.jsx";
import Footer from "../components/Common/Footer/footer.jsx";
import "../styles/globals.scss";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }) {
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
      </Layout>
    </RecoilRoot>
  );
}

export default MyApp;
