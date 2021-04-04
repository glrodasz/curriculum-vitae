import PropTypes from 'prop-types'
import classNames from "classnames";

const Heading = ({ children, size, color, isCentered, isMarginless }) => {
  return (
    <>
      <h1
        className={classNames("heading", `size-${size} color-${color}`, {
          "is-centerd": isCentered,
          "is-marginless": isMarginless,
        })}
      >
        {children}
      </h1>
      <style jsx>{`
        .heading {
          font-family: "Hind", sans-serif;
          font-weight: bold;
          line-height: 1;
          margin-bottom: 5px;
        }

        .heading > :global(*) {
          vertical-align: middle;
        }

        .heading :global(strong) {
          color: var(--golden-yellow);
        }

        .color-primary {
          color: var(--black);
        }

        .color-secondary {
          color: var(--scooter);
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
      `}</style>
    </>
  );
};

Heading.proptTypes = {
  size: PropTypes.oneOf(['xxs', 'xs', 'md', 'lg']),
  color: PropTypes.oneOf(['primary', 'secondary'])
}

Heading.defaultProps = {
  size: "lg",
  color: "primary",
};

export default Heading;
