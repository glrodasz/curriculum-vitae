import Head from "next/head";

import Hero from "../components/organisms/Hero";
import Profile from "../components/organisms/Profile";
import Career from "../components/organisms/Career";
import Footer from "../components/organisms/Footer";
import Skills from "../components/organisms/Skills";
import Knowledge from "../components/organisms/Knowledge";
import { knowledge } from "../data/knowledge";
import { achievements } from "../data/achievements";

const index = () => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <div className="container">
        <Hero />
        <Profile />
        <Skills />
        <Career />
        <Knowledge title={["Knowledge", "background"]} items={knowledge} />
        <Knowledge title={["Volunteer", "experience"]} items={achievements} />
        <Footer />
      </div>
      <style jsx>
        {`
          .container {
            display: flex;
            flex-direction: column;
            gap: 60px;
          }
        `}
      </style>
    </>
  );
};

export default index;
