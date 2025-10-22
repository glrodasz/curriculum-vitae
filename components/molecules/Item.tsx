import Icon from "../atoms/Icon";
import Heading from "../atoms/Heading";
import Paragraph from "../atoms/Paragraph";
import classNames from "classnames";

const getHeadingSize = (type: ItemType): "xxs" | "xs" => (type === "secondary" ? "xxs" : "xs");

interface ParagraphsProps {
  text: string | string[][];
}

const Paragraphs: React.FC<ParagraphsProps> = ({ text }) => {
  if (Array.isArray(text)) {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {text.map(([description, date]) => {
          return (
            <div key={description}>
              <Paragraph isMarginless>{description}</Paragraph>
              <Heading
                color="secondary"
                size="xxs"
                weight="normal"
                isMarginless
              >
                {date}
              </Heading>
            </div>
          );
        })}
      </div>
    );
  }

  return <Paragraph isMarginless>{text}</Paragraph>;
};

type ItemType = "primary" | "secondary";

interface ItemProps {
  icon?: string;
  flag?: string;
  title?: string;
  type?: ItemType;
  text?: string | string[][];
  footer?: string;
  isSameLine?: boolean;
}

const Item: React.FC<ItemProps> = ({
  icon,
  flag,
  title,
  type = "primary",
  text,
  footer,
  isSameLine
}) => {
  return (
    <>
      <div className="item">
        {(icon || flag) && (
          <div
            className={classNames("media", {
              "is-centered-with-text": !title,
            })}
          >
            {icon && <Icon size="md" name={icon} />}
            <Heading size="xs" isMarginless>
              {flag}
            </Heading>
          </div>
        )}
        <div className={classNames("content", {
          "is-same-line": isSameLine,
        })}>
          {title && (
            <Heading size={getHeadingSize(type)} color={type} isMarginless>
              {title}
            </Heading>
          )}
          {text && <Paragraphs text={text} />}
          {footer && (
            <Heading color="secondary" size="xxs" weight="normal">
              {footer}
            </Heading>
          )}
        </div>
      </div>
      <style jsx>{`
        .item {
          display: flex;
          margin-bottom: 15px;
          align-items: ${text ? "flex-start" : "center"};
          gap: 10px;
        }

        .content {
          display: flex;
          flex-direction: column;
          width: 100%;
          gap: 2px;
        }

        .is-centered-with-text {
          margin-top: 5px;
        }

        @media (min-width: 1140px) {
          .is-same-line {
            flex-direction: row;
            align-items: baseline;
            gap: 10px;
          }
        }
      `}</style>
    </>
  );
};

export default Item;
