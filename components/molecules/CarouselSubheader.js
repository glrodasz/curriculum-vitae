import React from "react";

import Icon from "../atoms/Icon";
import Heading from "../atoms/Heading";

const CarouselSubheader = ({
  items,
  activeIndex,
  handleClickPrev,
  handleClickNext,
}) => {
  return (
    <>
      <div className="subheader">
        <Icon
          name="chevron-left"
          isRounded
          isClickable
          onClick={handleClickPrev}
        />
        <Heading size="sm" isCentered isMarginless isComfortable>
          <strong>
            {items[activeIndex].subtitle || items[activeIndex].title}
          </strong>
        </Heading>
        <Icon
          name="chevron-right"
          isRounded
          isClickable
          onClick={handleClickNext}
        />
      </div>
      <style jsx>{`
        .subheader {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .subheader :global(.heading) {
          --subheader-width: 160px;

          width: var(--subheader-width);
        }
      `}</style>
    </>
  );
};

export default CarouselSubheader;
