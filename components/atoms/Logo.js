const Logo = ({ logoName, maxWidth }) => {
  return (
    <>
      <img className="logo" src={`/logos/${logoName}.svg`}></img>
      <style jsx>{`
        .logo {
          width: 100%;
          max-width: ${maxWidth}px;
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
