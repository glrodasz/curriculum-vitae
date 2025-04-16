import React, { useRef, useEffect } from "react";
import Heading from "../atoms/Heading";
import Icon from "../atoms/Icon";

const CarouselHeader = ({ items, activeIndex, setActiveIndex }) => {
  const headerRef = useRef(null);

  useEffect(() => {
    if (headerRef.current) {
      const activeTab = headerRef.current.querySelector(`[data-index="${activeIndex}"]`);
      if (activeTab) {
        // Calculate the scroll position to center the active tab
        const headerWidth = headerRef.current.clientWidth;
        const tabLeft = activeTab.offsetLeft;
        const tabWidth = activeTab.offsetWidth;
        const scrollLeft = tabLeft - (headerWidth / 2) + (tabWidth / 2);
        
        // Smoothly scroll to the calculated position
        headerRef.current.scrollTo({
          left: scrollLeft,
          behavior: 'smooth'
        });
      }
    }
  }, [activeIndex]);

  return (
    <>
      <div className="header" ref={headerRef}>
        {items.map(({ title }, index) => (
          <div
            key={title}
            data-index={index}
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
