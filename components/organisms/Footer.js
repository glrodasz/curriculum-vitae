import PropTypes from "prop-types";
import Heading from "../atoms/Heading";
import Paragraph from "../atoms/Paragraph";
import Icon from "../atoms/Icon";
import Link from "../atoms/Link";
import PageContainer from "../layout/PageContainer";

const Footer = ({}) => {
  return (
    <>
      <footer>
        <PageContainer>
          <div className="container">
            <img className="logo" src={`/vectors/footer.svg`}></img>

            <div className="footer">
              <Heading>
                <strong>Say Hello!</strong>
              </Heading>
              <Paragraph isInverted>
                It would be a pleasure to meet you!
              </Paragraph>
              <div className="icon-list">
                <div className="item">
                  <Icon name="email" />
                  <Link href="mailto:me@guillermorodas.com" isInverted>
                    me(at)guillermorodas.com
                  </Link>
                </div>
                <div className="item">
                  <Icon name="link" />
                  <Link href="https://guillermorodas.com" isInverted>
                    guillermorodas.com
                  </Link>
                </div>
                <div className="item">
                  <Icon name="bubble" />
                  <Link href="https://undefined.sh" isInverted>
                    undefined.sh
                  </Link>
                </div>
                <div className="item">
                  <Icon name="cellphone" />
                  <Link href="tel:+4607640378xx" isInverted>
                    +(46) 076 403 78 xx
                  </Link>
                </div>
              </div>
              <div className="social-networks">
                <Heading size="xxs" isInverted isMarginless>
                  @glrodasz
                </Heading>
                <div>
                  <Icon name="twitch" hasBackground />
                  <Icon name="instagram" hasBackground />
                  <Icon name="twitter" hasBackground />
                  <Icon name="youtube" hasBackground />
                </div>
              </div>
            </div>
          </div>
        </PageContainer>
      </footer>

      <style jsx>{`
        footer {
          padding: 80px 20px 0;
          background: var(--black);
        }

        .container {
          display: flex;
          flex-direction: column-reverse;
          justify-content: center;
        }

        .logo {
          height: 200px;
          width: 100%;
          object-fit: none;
          object-position: center 50px;
        }

        .footer {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .icon-list {
          display: flex;
          flex-direction: column;
          margin: 10px 0 30px;
          gap: 15px;
        }

        .item {
          display: flex;
          align-items: center;
        }

        .item > :global(div) {
          margin-right: 10px;
        }

        .social-networks {
          display: flex;
          justify-content: space-around;
          align-items: center;
        }

        @media (min-width: 1140px) {
          .container {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: 1fr;
            gap: 100px;
          }

          .footer {
            align-items: flex-start;
            grid-column: 2/3;
          }

          .social-networks {
            margin-bottom: 0;
          }

          .logo {
            height: 100%;
            object-fit: contain;
            object-position: left 150px;
          }
        }
      `}</style>
    </>
  );
};

Footer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Footer;
