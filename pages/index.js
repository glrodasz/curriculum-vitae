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
        <link
          href="https://fonts.googleapis.com/css2?family=Hind:wght@400;700&family=Lato&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="container">
        <Hero />
        <Profile />
        <Skills />
        <Career />
        <Knowledge title={["Knowledge", "background"]} items={knowledge}/>
        <Knowledge title={["Personal", "achievements"]} items={achievements}/>
        <Footer />
      </div>
      <style jsx>{`
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
