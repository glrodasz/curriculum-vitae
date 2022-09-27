import classNames from "classnames";

const Logo = ({ logoName, maxWidth, isCentered }) => {
  return (
    <>
      <img
        className={classNames("logo", {
          "is-centered": isCentered,
        })}
        src={`/logos/${logoName}.svg`}
      ></img>
      <style jsx>{`
        .logo {
          width: 100%;
          max-width: ${maxWidth}px;
        }

        .is-centered {
          display: inline-block;
          margin: 0 auto;
        }
      `}</style>
    </>
  );
};

Logo.defaultProps = {
  logoName: "guillermorodas",
  maxWidth: 293,
};

export default Logo;
