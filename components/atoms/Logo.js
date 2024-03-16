import classNames from "classnames";
import Image from "next/image";

const Logo = ({ logoName, maxWidth, isCentered }) => {
  return (
    <>
      <Image
        className={classNames("logo", {
          "is-centered": isCentered,
        })}
        src={`/logos/${logoName}.svg`}
        width={maxWidth}
        height={120}
        alt={logoName}
      ></Image>
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
  maxWidth: 290,
};

export default Logo;
