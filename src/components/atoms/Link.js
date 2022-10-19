import classNames from "classnames";
import React from "react";
import Heading from "./Heading";
import Paragraph from "./Paragraph";

const Link = ({
  href,
  color = "secondary",
  children,
  weight,
  isCentered,
  isInverted,
}) => {
  return (
    <>
      <a href={href} target="_blank">
        <Heading
          size="xxs"
          color={color}
          weight={weight}
          isCentered={isCentered}
          isInverted={isInverted}
          isMarginless
        >
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
