import PropTypes from "prop-types";
import Icon from "../atoms/Icon";
import Heading from "../atoms/Heading";
import Paragraph from "../atoms/Paragraph";
import classNames from "classnames";

const getHeadingSize = (type) => (type === "secondary" ? "xxs" : "xs");

const Item = ({ icon, flag, title, type, text, footer }) => {
  return (
    <>
      <div className="item">
        <div
          className={classNames("media", {
            "is-centered-with-text": !title,
          })}
        >
          {icon && <Icon size="md" name={icon} />}
          <Heading size="lg" isMarginless>
            {flag}
          </Heading>
        </div>
        <div className="content">
          {title && (
            <Heading size={getHeadingSize(type)} color={type} isMarginless>
              {title}
            </Heading>
          )}
          {text && <Paragraph isMarginless>{text}</Paragraph>}
          {footer && (
          <Heading color="secondary" size="xxs" weight="normal">
            {footer}
          </Heading>
        )}
        </div>
      </div>
      <style jsx>{`
        .item {
          display: flex;
          margin-bottom: 15px;
          align-items: ${text ? "flex-start" : "center"};
          gap: 15px;
        }

        .content {
          display: flex;
          flex-direction: column;
          width: 100%;
          gap: 2px;
        }

        .is-centered-with-text {
          margin-top: 5px;
        }
      `}</style>
    </>
  );
};

Item.propTypes = {
  icon: PropTypes.string,
  flag: PropTypes.string,
  type: PropTypes.oneOf(["primary", "secondary"]),
};

Item.defaultProps = {
  type: "primary",
};

export default Item;