import Image from "next/image";
import classNames from "classnames";

const sizeMap = {
  lg: 30,
  md: 20,
  sm: 12,
};

const Icon = ({
  size = "md",
  name = "EMPTY",
  isRounded,
  isClickable,
  hasBackground,
  onClick = () => {},
}) => {
  const mappedSize = sizeMap[size];
  const squareStyles = { width: mappedSize, minWidth: mappedSize, height: mappedSize };
  return (
    <div
      className={classNames("icon", {
        "is-rounded": isRounded,
        "is-clickable": isClickable,
        "has-background": hasBackground,
      })}
      onClick={onClick}
    >
      {name === "EMPTY" ? (
        <div style={squareStyles} />
      ) : (
        <Image
          src={`/icons/${name}.svg`}
          width={mappedSize}
          height={mappedSize}
          style={squareStyles}
          alt={name}
          className="icon"
        />
      )}
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

        .has-background {
          padding: 10px;
          background: var(--golden-yellow);
          margin: 10px;
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
};

export default Icon;
