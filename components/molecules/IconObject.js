import PropTypes from "prop-types";
import Icon from "../atoms/Icon";
import Heading from "../atoms/Heading";
import Paragraph from "../atoms/Paragraph";

const getHeadingSize = (type) => (type === "secondary" ? "xxs" : "xs");

const IconObject = ({ icon, flag, title, type, text, footer }) => {
  return (
    <>
      <div className="icon-object">
        <div className="media">
          {icon && <Icon size="md" name={icon} />}
          <Heading size="xs" isMarginless>
            {flag}
          </Heading>
        </div>
        <div className="content">
          <Heading size={getHeadingSize(type)} color={type} isMarginless>
            {title}
          </Heading>
          {text && (
            <Paragraph color="secondary" isMarginless>
              {text}
            </Paragraph>
          )}
        </div>
      </div>
      <style jsx>{`
        .icon-object {
          display: flex;
          margin-bottom: 15px;
          align-items: ${text ? "flex-start" : "center"};
        }

        .content {
          margin-left: ${text ? "10px" : "5px"};
        }
      `}</style>
    </>
  );
};

IconObject.propTypes = {
  icon: PropTypes.string,
  flag: PropTypes.string,
  type: PropTypes.oneOf(["primary", "secondary"]),
};

IconObject.defaultProps = {
  type: "primary",
};

export default IconObject;
