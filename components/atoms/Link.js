import React from "react";
import Heading from "./Heading";
import Paragraph from "./Paragraph";

const Link = ({ href, children }) => {
  return (
    <>
      <a href={href} target="_blank">
        <Heading size="xxs" color="secondary">
          {children || href}
        </Heading>
      </a>
      <style jsx>{`
        a {
          text-decoration: none;
        }
      `}</style>
    </>
  );
};

export default Link;
