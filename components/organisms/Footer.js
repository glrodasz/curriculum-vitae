import PropTypes from "prop-types";
import Heading from "../atoms/Heading";
import Paragraph from "../atoms/Paragraph";
import Icon from "../atoms/Icon";

const Footer = ({ children }) => {
  return (
    <>
      <div className="footer">
        <Heading>
          <strong>Say Hello!</strong>
        </Heading>
        <Paragraph isInverted>it would be a pleasure to meet you</Paragraph>
        <div className="icon-list">
          <div className="item">
            <Icon name="email" />
            <Heading size="xxs" isInverted isMarginless>
              glrodasz@gmail.com
            </Heading>
          </div>
          <div className="item">
            <Icon name="link" />
            <Heading size="xxs" isInverted isMarginless>
              guillermorodas.com
            </Heading>
          </div>
          <div className="item">
            <Icon name="bubble" />
            <Heading size="xxs" isInverted isMarginless>
              undefined.sh
            </Heading>
          </div>
          <div className="item">
            <Icon name="cellphone" />
            <Heading size="xxs" isInverted isMarginless>
              +(46) 076 403 7871
            </Heading>
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
      <style jsx>{`
        .footer {
          padding-top: 80px;
          display: flex;
          flex-direction: column;
          align-items: center;
          background: var(--black) url("/vectors/footer.svg") no-repeat;
          background-position: center calc(100% + 100px);
        }

        .icon-list {
          display: flex;
          flex-direction: column;
          margin-top: 50px;
          margin-bottom: 30px;
        }

        .item {
          display: flex;
          align-items: center;
          margin: 10px 0;
        }

        .item > :global(div) {
          margin-right: 10px;
        }

        .social-networks {
          display: flex;
          justify-content: space-around;
          margin-bottom: 250px;
          align-items: center;
        }
      `}</style>
    </>
  );
};

Footer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Footer;
