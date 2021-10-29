import classNames from "classnames";

const Paragraph = ({ children, size, color, isMarginless, isInverted }) => {
  return (
    <>
      <p
        className={classNames("paragraph", {
          [`size-${size}`]: size,
          [`color-${color}`]: color,
          "is-marginless": isMarginless,
          "is-inverted": isInverted,
        })}
      >
        {children}
      </p>
      <style jsx>{`
        .paragraph {
          font-family: "Lato", sans-serif;
          font-size: 1.6rem;
          line-height: 1.5;
          margin-bottom: 20px;
        }

        .color-primary {
          color: var(--storm-dust);
        }

        .color-secondary {
          color: var(--bunker);
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
      `}</style>
    </>
  );
};

Paragraph.defaultProps = {
  size: "md",
  color: "primary",
};

export default Paragraph;
