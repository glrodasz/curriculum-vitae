import Head from "next/head";

import Hero from "../components/organisms/Hero";
import Profile from "../components/organisms/Profile";
import Career from "../components/organisms/Career";
import Footer from "../components/organisms/Footer";
import Skills from "../components/organisms/Skills";
import Knowledge from "../components/organisms/Knowledge";
import { knowledge } from "../data/knowledge";
import { achievements } from "../data/achievements";

const Print = () => {
  return (
    <>
      <Head>
        <title>Guillermo Rodas - CV (Print Version)</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>
      <div className="container print-container">
        <Hero />
        <Profile />
        <Skills printMode />
        <Career printMode />
        <Knowledge title={["Knowledge", "background"]} items={knowledge} printMode />
        <Knowledge title={["Volunteer", "experience"]} items={achievements} printMode />
        <Footer />
      </div>
      <style jsx>
        {`
          .container {
            display: flex;
            flex-direction: column;
            gap: 60px;
          }

          @media print {
            .container {
              gap: 40px;
            }
          }
        `}
      </style>
    </>
  );
};

export default Print;
