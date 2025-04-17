import classNames from "classnames";
import Image from "next/image";
import useTheme from "../../hooks/useTheme";

const Logo = ({ 
  logoName = "guillermorodas", 
  maxWidth = 290, 
  isCentered,
  shouldInvert = false
}) => {
  const { isDarkMode } = useTheme();

  let logoSrc = logoName;
  let invert = false;
  
  if (typeof shouldInvert === 'string' && isDarkMode) {
    logoSrc = `${logoName}${shouldInvert}`;
  } else if (isDarkMode) {
    invert = shouldInvert;
  }

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
        style={invert ? { filter: 'brightness(0) invert(1)' } : {}}
      ></Image>
      <style jsx>{`
        :global(.logo) {
          width: 100%;
          max-width: ${maxWidth}px;
          filter: drop-shadow(0 0 1px var(--logo-shadow));
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
