import React from "react";

const Logo = () => {
  return (
    <>
      <img className="logo" src="/logos/guillermorodas.svg"></img>
      <style jsx>{`
        .logo {
          width: 100%;
          max-width: 293px;
        }
      `}</style>
    </>
  );
};

export default Logo;
