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
      <style jsx>{`
        .content {
          min-height: 600px;
        }
      `}</style>
    </>
  );
};

export default Carousel;
