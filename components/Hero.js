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
      </div>
      <img className="photo" src="/images/guillermorodas.png" />
      <style jsx>{`
        header {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          min-height: 730px;
        }

        .hero {
          padding: 21px 27px 0;z
          position: relative;
        }

        .logo {
          display: flex;
          justify-content: center;
          margin-bottom: 23px;
        }

        .photo {
          position: relative;
          bottom: 0;
          right: 0;
          width: 100%;
          max-width: 800px;
        }
      `}</style>
    </header>
  );
};

export default Hero;
