import React from "react";
import Heading from "./Heading";
import Logo from "./Logo";
import Paragraph from "./Paragraph";

const Hero = () => {
  return (
    <header>
      <div className="hero">
        <div className="logo">
          <Logo />
        </div>
        <Heading size="sm">Hello,</Heading>
        <Heading>
          I'm <strong>Guillermo</strong>
        </Heading>
        <Heading>Rodas</Heading>
        <Paragraph>
          Full-stack JavaScript Engineer with 9 years of experience. Google
          Developer Expert in web technologies, community organizer and online
          teacher.
        </Paragraph>
        <img className="photo" src="/images/guillermorodas.png" />
      </div>
      <style jsx>{`
        .hero {
          padding: 21px 27px 0;z
          height: 100vh;
          min-height: 730px;
          position: relative;
        }

        .logo {
          display: flex;
          justify-content: center;
          margin-bottom: 23px;
        }

        .photo {
          position: absolute;
          bottom: 0;
          right: 0;
        }
      `}</style>
    </header>
  );
};

export default Hero;
