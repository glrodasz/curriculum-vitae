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
        <div className="items">
        {items.map((item) => (
          <Paragraph size="sm" color="secondary" isMarginless>{item}</Paragraph>
        ))}
        </div>
      </div>
      <style jsx>{`
        .card {
          background: var(--golden-yellow);
          padding: 30px 50px;
          margin: 15px 0;
          width: 100%;
        }

        .items {
          display: flex;
          flex-direction: column;
          gap: 10px;
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
            max-width: 290px;
          }
        }
      `}</style>
    </>
  );
};

export default Card;
