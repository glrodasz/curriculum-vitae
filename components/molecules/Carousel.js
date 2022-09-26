import { useState } from "react";

import CarouselHeader from "./CarouselHeader";
import CarouselSubheader from "./CarouselSubheader";

const Carousel = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const lastItemIndex = items.length - 1;

  const handleClickPrev = () => {
    if (activeIndex >= 1) {
      setActiveIndex(activeIndex - 1);
    } else {
      setActiveIndex(lastItemIndex);
    }
  };

  const handleClickNext = () => {
    if (activeIndex < lastItemIndex) {
      setActiveIndex(activeIndex + 1);
    } else {
      setActiveIndex(0);
    }
  };

  return (
    <>
      <div className="carousel">
        <CarouselHeader
          items={items}
          setActiveIndex={setActiveIndex}
          activeIndex={activeIndex}
        />
        <CarouselSubheader
          items={items}
          activeIndex={activeIndex}
          handleClickPrev={handleClickPrev}
          handleClickNext={handleClickNext}
        />
        <div className="content">{items[activeIndex].content}</div>
      </div>
      <style jsx>{`
        .carousel {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
      `}</style>
    </>
  );
};

export default Carousel;
