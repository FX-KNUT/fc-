import Layout from "../components/Reusable/t_fx__layout";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <div id="modal"></div>
    </Layout>
  );
}

export default MyApp;
