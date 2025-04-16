import classNames from "classnames";
import Image from "next/image";
import useTheme from "../../hooks/useTheme";

const Logo = ({ 
  logoName = "guillermorodas", 
  maxWidth = 290, 
  isCentered 
}) => {
  const { isDarkMode } = useTheme();
  
  // Determine which logo to use based on theme
  const logoSrc = isDarkMode ? `${logoName}-light` : logoName;

  return (
    <>
      <Image
        className={classNames("logo", {
          "is-centered": isCentered,
        })}
        src={`/logos/${logoSrc}.svg`}
        width={maxWidth}
        height={120}
        alt={logoName}
        fetchpriority="high"
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

export default Logo;
