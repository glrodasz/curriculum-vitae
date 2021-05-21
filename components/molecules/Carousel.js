import { useState } from "react";

import Heading from "../atoms/Heading";
import Icon from "../atoms/Icon";

const Carousel = ({ items }) => {
  const [active, setActive] = useState(0);

  return (
    <>
      <div className="header">
        {items.map(({ title }, index) => (
          <div
            className={`tab ${index === active ? "is-active" : ""}`}
            onClick={() => setActive(index)}
          >
            <Heading size="xxs" isMarginless>
              {index === active && <Icon size="sm" name="diamond" />}{" "}
              <span style={{ display: "inline-block", marginTop: 3 }}>
                {title}
              </span>
            </Heading>
          </div>
        ))}
      </div>
      <div>
        <Heading size="sm" isCentered>
          <strong>{items[active].title}</strong>
        </Heading>
      </div>
      <style jsx>{`
        .header {
          display: flex;
          margin-bottom: 30px;
        }

        .tab {
          background: var(--golden-yellow);
          width: 195px;
          text-align: center;
          padding: 10px 0;
          cursor: pointer;
        }

        .tab:not(.is-active) {
          opacity: 0.5;
        }
      `}</style>
    </>
  );
};

export default Carousel;
