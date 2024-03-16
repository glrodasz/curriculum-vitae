import React from "react";
import Heading from "./Heading";

const Link = ({
  href,
  color = "secondary",
  children,
  weight,
  isCentered,
  isInverted,
  isInline
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
          isInline={isInline}
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
