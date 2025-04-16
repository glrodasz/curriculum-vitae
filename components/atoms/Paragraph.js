import classNames from "classnames";

const Paragraph = ({ children, size = "md", color = "primary", isMarginless, isInverted, isJustified }) => {
  return (
    <>
      <p
        className={classNames("paragraph", {
          [`size-${size}`]: size,
          [`color-${color}`]: color,
          "is-marginless": isMarginless,
          "is-inverted": isInverted,
          "is-justified": isJustified,
        })}
      >
        {children}
      </p>
      <style jsx>{`
        .paragraph {
          font-family: "Lato", sans-serif;
          font-size: 1.6rem;
          line-height: 1.5;
          margin-bottom: 10px;
        }

        .color-primary {
          color: var(--paragraph-primary);
        }

        .color-secondary {
          color: var(--paragraph-secondary);
        }

        .color-tertiary {
          color: var(--scooter);
        }

        .size-xl {
          font-size: 2.8rem;
        }

        .size-lg {
          font-size: 1.8rem;
        }

        .size-md {
          font-size: 1.6rem;
        }

        .size-sm {
          font-size: 1.3rem;
        }

        .is-marginless {
          margin-bottom: 0;
        }

        .is-inverted {
          color: var(--white);
        }

        .is-justified {
          text-align: justify;
        }
      `}</style>
    </>
  );
};

export default Paragraph;
