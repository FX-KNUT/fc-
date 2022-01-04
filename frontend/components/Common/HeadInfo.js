import Head from "next/head";
import Script from "next/script";

const DOC__TITLE = "fc";

const headInfo = () => {
  return (
    <div>
      <Head>
        <title>{DOC__TITLE}</title>
        <meta name="description" content="fc" />
        <meta charset="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Script
        src="https://kit.fontawesome.com/8886ab1b1d.js"
        crossorigin="anonymous"
      ></Script>
    </div>
  );
};

export default headInfo;
