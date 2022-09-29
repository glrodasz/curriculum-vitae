import React from "react";
import PageContainer from "../layout/PageContainer";
import Heading from "../atoms/Heading";
import Logo from "../atoms/Logo";
import Paragraph from "../atoms/Paragraph";
import Relocation from "./Relocation";

const Hero = () => {
  return (
    <>
      <header>
        <PageContainer fullHeight>
          <div className="container">
            <div className="wrapper">
              <div className="text">
                <div className="logo">
                  <Logo />
                </div>
                <Heading size="sm">Hello,</Heading>
                <div className="fullname">
                  <Heading>
                    I'm <strong className="shadow">Guillermo</strong>
                  </Heading>
                  <Heading>Rodas</Heading>
                </div>
                <Paragraph size="xl">
                  I help developers to improve their skills while creating
                  quality products. 
                </Paragraph>
                <div className="relocation-container">
                  <Relocation />
                </div>
              </div>
            </div>
            <img className="photo" src="/images/guillermo-rodas.png" />
          </div>
        </PageContainer>
      </header>
      <style jsx>{`
        header {
          --relocation-height: 130px;
          --header-mobile-min-height: 600px;

          position: relative;
          height: auto;
          min-height: var(--header-mobile-min-height);
          margin-bottom: var(--relocation-height);
          border-bottom: 1px solid var(--golden-yellow);
        }

        .container {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
          align-items: center;
        }

        .wrapper {
          width: 100%;
        }

        .text {
          display: flex;
          flex-direction: column;
        }

        .logo {
          display: flex;
          justify-content: center;
          margin: 20px auto;
        }

        .photo {
          --photo-mobile-max-width: 800px;

          display: block;
          bottom: 0;
          margin: 0 auto;
          width: 100%;
          max-width: var(--photo-mobile-max-width);
        }

        .relocation-container {
          position: absolute;
          bottom: calc(var(--relocation-height) * -1);
          left: 0;
          right: 0;
        }

        @media (min-width: 1140px) {
          header {
            --header-desktop-max-height: 900px;

            display: flex;
            align-items: center;
            background: url("/vectors/hero.svg") no-repeat;
            background-position: top right;
            background-size: cover;
            width: 100%;
            height: 100%;
            max-height: var(--header-desktop-max-height);
            margin-bottom: 0;
          }

          .text {
            align-items: flex-start;
          }

          .container {
            flex-direction: row;
            justify-content: center;
          }

          .photo {
            --photo-desktop-min-width: 700px;

            max-height: 100%;
            object-fit: contain;
            align-self: flex-end;
            min-width: var(--photo-desktop-min-width);
            margin-top: 100px;
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

          .relocation-container {
            position: relative;
            bottom: 0;
          }
        }
      `}</style>
    </>
  );
};

export default Hero;
