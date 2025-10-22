import Image from "next/image";
import classNames from "classnames";
import useTheme from "../../hooks/useTheme";

interface IconProps {
  size?: "sm" | "md" | "lg";
  name?: string;
  isRounded?: boolean;
  isClickable?: boolean;
  hasBackground?: boolean;
  onClick?: () => void;
  shouldInvert?: boolean;
}

const sizeMap: Record<string, number> = {
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
  shouldInvert,
}: IconProps) => {
  const mappedSize = sizeMap[size];
  const squareStyles = { width: mappedSize, minWidth: mappedSize, height: mappedSize };
  const { isDarkMode } = useTheme();

  const invert = shouldInvert && isDarkMode;

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
          alt={name}
          className="icon"
          style={{
            ...squareStyles,
            ...(invert ? { filter: 'brightness(0) invert(0)' } : {})
          }}
        />
      )}
      <style jsx>{`
        .icon {
          display: inline-flex;
        }

        .is-rounded {
          justify-content: center;
          align-items: center;
          background: var(--text);
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
