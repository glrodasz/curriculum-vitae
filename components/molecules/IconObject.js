import PropTypes from "prop-types";
import Icon from "../atoms/Icon";
import Heading from "../atoms/Heading";
import Paragraph from "../atoms/Paragraph";

const getHeadingSize = (type) => (type === "secondary" ? "xxs" : "xs");

const IconObject = ({ icon, flag, title, type, text }) => {
  return (
    <>
      <div className="icon-object">
        <div className="media">
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
          {text && (
              <Paragraph isMarginless>
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
          gap: 15px;
        }

        .content {
          width: 100%;
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
