import PropTypes from "prop-types";
import classNames from "classnames";

const Heading = ({
  children,
  size = "lg",
  color = "primary",
  weight = "bold",
  isCentered,
  isMarginless,
  isComfortable,
  isInverted,
  isInline,
}) => {
  return (
    <>
      <h1
        className={classNames("heading", `size-${size} color-${color} weight-${weight}`, {
          "is-centered": isCentered,
          "is-marginless": isMarginless,
          "is-comfortable": isComfortable,
          "is-inverted": isInverted,
          "is-inline": isInline,
        })}
      >
        {children}
      </h1>
      <style jsx>{`
        .heading {
          font-family: "Hind", sans-serif;
          line-height: 1;
          margin-bottom: 5px;
        }

        .heading :global(strong) {
          color: var(--golden-yellow);
        }

        .color-primary {
          color: var(--text);
        }

        .color-secondary {
          color: var(--scooter);
        }

        .color-disabled {
          color: var(--gray);
        }

        .is-inverted {
          color: var(--white);
        }

        .is-inline {
          display: inline;
        }

        .size-lg {
          font-size: 4.8rem;
        }

        .size-md {
          font-size: 3.6rem;
        }

        .size-sm {
          font-size: 2.4rem;
        }

        .size-xs {
          font-size: 1.8rem;
        }

        .size-xxs {
          font-size: 1.6rem;
        }

        .is-centered {
          text-align: center;
        }

        .is-marginless {
          margin-bottom: 0;
        }

        .is-comfortable {
          margin-left: 10px;
          margin-right: 10px;
        }

        .weight-normal {
          font-weight: normal;
        }

        .weight-bold {
          font-weight: bold;
        }

        @media (min-width: 1140px) {
          .heading :global(strong.shadow) {
            text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2),
              -1px -1px 0 rgba(255, 255, 255);
          }
        }
      `}</style>
    </>
  );
};

Heading.propTypes = {
  size: PropTypes.oneOf(["xxs", "xs", "sm", "md", "lg"]),
  color: PropTypes.oneOf(["primary", "secondary", "disabled"]),
};

export default Heading;
