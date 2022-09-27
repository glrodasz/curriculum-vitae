import classNames from "classnames";
import React from "react";
import Heading from "./Heading";
import Paragraph from "./Paragraph";

const Link = ({ href, children, weight, isCentered }) => {
  return (
    <>
      <a href={href} target="_blank">
        <Heading size="xxs" color="secondary" weight={weight} isCentered={isCentered}>
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
