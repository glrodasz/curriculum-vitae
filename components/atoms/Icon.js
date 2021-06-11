import classNames from "classnames";
import PropTypes from "prop-types";

const sizes = {
  lg: 30,
  md: 20,
  sm: 12,
};

const Icon = ({ size, name, isRounded, isClickable, onClick }) => {
  return (
    <div className={classNames('icon', {
      "is-rounded": isRounded,
      "is-clickable": isClickable
    })} onClick={onClick}>
      <img
        src={`/icons/${name}.svg`}
        style={{ width: sizes[size], height: sizes[size] }}
        className="icon"
      />
      <style jsx>{`
        .icon {
          display: inline-flex;
        }

        .is-rounded {
          justify-content: center;
          align-items: center;
          background: var(--black);
          padding: 10px;
          border-radius: 50%;
        }

        .is-clickable {
          cursor: pointer;
          user-select: none;
        }
      `}</style>
    </div>
  );
};

Icon.defaultProps = {
  size: "md",
  onClick: () => {}
};

export default Icon;
