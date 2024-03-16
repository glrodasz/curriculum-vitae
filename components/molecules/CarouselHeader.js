import React from "react";
import Heading from "../atoms/Heading";
import Icon from "../atoms/Icon";

const CarouselHeader = ({ items, activeIndex, setActiveIndex }) => {
  return (
    <>
      <div className="header">
        {items.map(({ title }, index) => (
          <div
            key={title}
            className={`tab ${index === activeIndex ? "is-active" : ""}`}
            onClick={() => setActiveIndex(index)}
          >
            <div className="tab-title">
              <Icon
                size="sm"
                name={index === activeIndex ? "diamond" : "EMPTY"}
              />
              <Heading size="xxs" isMarginless>
                {title}
              </Heading>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .header {
          display: flex;
          justify-content: flex-start;
          flex-wrap: nowrap;
          overflow-x: auto;
          overflow-y: hidden;
          scroll-behavior: smooth;
        }

        .tab {
          background: var(--golden-yellow);
          width: 100%;
          text-align: center;
          padding: 10px 20px;
          cursor: pointer;
          display: flex;
          justify-content: center;
        }

        .tab:not(.is-active) {
          opacity: 0.5;
        }

        .tab-title {
          display: flex;
          align-items: baseline;
          gap: 8px;
        }
      `}</style>
    </>
  );
};

export default CarouselHeader;
