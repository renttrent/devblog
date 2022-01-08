import "../styles/globals.css";
import Header from "../components/header";
import Head from "next/head"
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [dark, setDark] = useState(false)

  return (
    <div className={dark ? "dark":""}> 
      <Head>
        <link rel="shortcut icon" href="/SVG/favicon.svg" />
        <title>reithedev</title>
      </Head>
      <Header />
      <Component {...pageProps} dark={dark} setDark={setDark}/>
    </div>
  );
}

export default MyApp;
