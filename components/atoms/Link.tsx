import React from "react";
import Heading from "./Heading";

interface LinkProps {
  href: string;
  color?: "primary" | "secondary" | "disabled";
  children?: React.ReactNode;
  weight?: "normal" | "bold";
  isCentered?: boolean;
  isInverted?: boolean;
  isInline?: boolean;
}

const Link: React.FC<LinkProps> = ({
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
        {/* @ts-ignore - Heading is a JS component */}
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
