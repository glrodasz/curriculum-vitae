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
        <div className="content">
        <Icon
          name="chevron-left"
          isRounded
          isClickable
          onClick={handleClickPrev}
          shouldInvert={true}
        />
        <Heading size="xs" isCentered isMarginless isComfortable>
          <strong>
            {items[activeIndex].subtitle || items[activeIndex].title}
          </strong>
        </Heading>
        <Icon
          name="chevron-right"
          isRounded
          isClickable
          onClick={handleClickNext}
          shouldInvert={true}
        />
      </div>
      {items[activeIndex].heading && (
        <Heading size="xs" isCentered>{items[activeIndex].heading}</Heading>
      )}
      </div>
      <style jsx>{`
        .content {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .subheader {
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .content :global(.heading) {
          --subheader-width: 180px;

          width: var(--subheader-width);
        }

        @media (min-width: 1140px) {
          .subheader {
            max-width: fit-content;
          }
        }
      `}</style>
    </>
  );
};

export default CarouselSubheader;
