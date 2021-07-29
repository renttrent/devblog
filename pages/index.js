import Head from "next/head";
import Header from "../components/header";

export default function Home() {
  return (
    <>
      <div className="home-section md:w-1/2 lg:w-1/3 w-8/12 mx-auto">
        <div className="info-about-me mt-12">
          <span className="block font-mono font-extrabold text-5xl">Hi!</span>
          <span className="block font-sans font-medium text-2xl my-2">
            I am Rei and I make websites and web3 DApps.
          </span>
          <span className="block font-sans text-lg text-justify p-3 bg-green-200 rounded-lg">
            I like to work on open source projects and make some music or design
            when I have free time. You can send me an email <a>here</a> or{" "}
            <b>dm</b> me in my socials:
          </span>
        </div>
      </div>
    </>
  );
}
