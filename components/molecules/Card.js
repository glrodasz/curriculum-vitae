import React from "react";
import classNames from "classnames";
import Heading from "../atoms/Heading";
import Paragraph from "../atoms/Paragraph";

const Card = ({ title, subtitle, items, isInverted }) => {
  return (
    <>
      <div
        className={classNames("card", {
          "is-inverted": isInverted,
        })}
      >
        <header>
          <Heading size="sm">{title}</Heading>
          <Paragraph color="secondary" isMarginless>{subtitle}</Paragraph>
        </header>
        <hr
          style={{
            margin: "10px 0",
            border: 0,
            height: "1px",
            background: "var(--white)",
          }}
        />
        {items.map((item) => (
          <Paragraph color="secondary" isMarginless>{item}</Paragraph>
        ))}
      </div>
      <style jsx>{`
        .card {
          background: var(--golden-yellow);
          padding: 30px 60px;
          margin: 15px 0;
          width: 100%;
        }

        .is-inverted {
          background: var(--black);
        }

        .is-inverted header :global(.heading) {
          color: var(--golden-yellow);
        }

        .is-inverted header :global(.paragraph) {
          color: var(--golden-yellow);
        }

        .is-inverted :global(.paragraph) {
          color: var(--white);
        }

        @media (min-width: 1440px) {
          .card {
            max-width: 270px;
          }
        }
      `}</style>
    </>
  );
};

export default Card;
