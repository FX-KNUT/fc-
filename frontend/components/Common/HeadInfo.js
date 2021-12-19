import Head from "next/head";

const DOC__TITLE = "fc";

const headInfo = () => {
  return (
    <div>
      <Head>
        <title>{DOC__TITLE}</title>
        <meta name="description" content="fc" />
        <meta charset="utf-8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
};

export default headInfo;
