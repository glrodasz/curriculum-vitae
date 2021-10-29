import Head from "next/head";

import Hero from "../components/organisms/Hero";
import Profile from "../components/organisms/Profile";
import Career from "../components/organisms/Career";
import Footer from "../components/organisms/Footer";

const index = () => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Hind:wght@700&family=Lato&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Hero />
      <Profile />
      <Career />
      <Footer />
    </>
  );
};

export default index;
