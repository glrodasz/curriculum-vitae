import React from "react";
import Heading from "../atoms/Heading";
import Icon from "../atoms/Icon";

const CarouselHeader = ({ items, activeIndex, setActiveIndex }) => {
  return (
    <>
      <div className="header">
        {items.map(({ title }, index) => (
          <div
            className={`tab ${index === activeIndex ? "is-active" : ""}`}
            onClick={() => setActiveIndex(index)}
          >
            <Heading size="xxs" isMarginless>
              {index === activeIndex && <Icon size="sm" name="diamond" />}{" "}
              <span style={{ display: "inline-block", marginTop: 3 }}>
                {title}
              </span>
            </Heading>
          </div>
        ))}
      </div>
      <style jsx>{`
        .header {
          display: flex;
          margin-bottom: 30px;
          justify-content: center;
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

export default CarouselHeader;
