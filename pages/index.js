import Head from "next/head";

import Hero from "../components/organisms/Hero";
import Profile from "../components/organisms/Profile";

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
    </>
  );
};

export default index;
