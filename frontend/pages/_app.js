import Layout from "../components/Reusable/t_fx__layout";
import Header from "../components/Common/header";
import Footer from "../components/Common/footer";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <div id="root">
        <Header></Header>
        <Component {...pageProps} />
        <Footer></Footer>
      </div>
      <div id="modal"></div>
    </Layout>
  );
}

export default MyApp;
