import React from "react";
import Container from "../layout/Container";
import Heading from "../atoms/Heading";
import Logo from "../atoms/Logo";
import Paragraph from "../atoms/Paragraph";
import Relocation from "./Relocation";
import useBreakpoints from "../../hooks/useBreakpoints";

const Hero = () => {
  return (
    <>
      <header className="container">
        <Container>
          <div className="hero">
            <div className="logo">
              <Logo />
            </div>
            <Heading size="sm">Hello,</Heading>
            <div className="fullname">
            <Heading>
              I'm <strong>Guillermo</strong>
            </Heading>
            <Heading>Rodas</Heading>
            </div>
            <Paragraph>
            I'm Full-stack JavaScript Developer from Colombia living in Sweden.
Organizer of CSS Community Dev, and CSS Conf Colombia.
Google Developer Expert in Web Tech, and affiliated Twitch Streamer.
            </Paragraph>
          </div>
        </Container>
        <img className="photo" src="/images/guillermo-rodas.png" />
      </header>
      <div className="relocation">
        <Relocation />
      </div>
      <style jsx>{`
        .container {
          min-height: 100vh;
        }

        .hero {
          display: flex;
          flex-direction: column;
          padding: 21px 27px 0;
        }

        .logo {
          display: flex;
          justify-content: center;
          margin-bottom: 23px;
        }

        .photo {
          display: block;
          bottom: 0;
          margin: 0 auto;
          width: 100%;
          max-width: 800px;
        }

        .relocation {
          margin-top: 50px;
        }

        @media (min-width: 1140px) {
          .hero {
            align-items: flex-start;
            margin-right: 400px;
            max-width: 650px;
          }

          .container {
            display: flex;
            align-items: center;
            background: url("/vectors/hero.svg") no-repeat;
            background-position: top right;
            width: 100%;
          }

          .photo {
            position: absolute;
            right: 0;
            max-height: 100vh;
            object-fit: contain;
          }

          .logo {
            position: absolute;
            top: 30px;
          }

          .fullname {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
          }
        }
      `}</style>
    </>
  );
};

export default Hero;
