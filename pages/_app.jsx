import "../styles/globals.css";
import Header from "../components/header";
import Head from "next/head"

function MyApp({ Component, pageProps }) {
  return (
    <> 
      <Head>
        <link rel="shortcut icon" href="/SVG/favicon.svg" />
        <title>reithedev</title>
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
