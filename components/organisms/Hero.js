import React from "react";
import Container from "../layout/Container";
import Heading from "../atoms/Heading";
import Logo from "../atoms/Logo";
import Paragraph from "../atoms/Paragraph";

const Hero = () => {
  return (
    <header className="container">
      <Container>
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
      </Container>
      <style jsx>{`
        .container {
          min-height: 730px;
        }

        .hero {
          display: flex;
          flex-direction: column;
          padding: 21px 27px 0;
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

        @media (min-width: 1140px) {
          .hero {
            align-items: flex-start;
          }
        }
      `}</style>
    </header>
  );
};

export default Hero;
