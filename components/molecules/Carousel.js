import { useState, useRef, useEffect } from "react";
import classNames from "classnames";

import CarouselHeader from "./CarouselHeader";
import CarouselSubheader from "./CarouselSubheader";
import useBreakpoints from "../../hooks/useBreakpoints";

const Carousel = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const contentRef = useRef(null);
  const carouselNavRef = useRef(null);
  const lastItemIndex = items.length - 1;
  const { isMobile } = useBreakpoints();
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 50;

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

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      handleClickNext();
    }
    if (isRightSwipe) {
      handleClickPrev();
    }
  };

  useEffect(() => {
    if (contentRef.current && isMobile) {
      contentRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [activeIndex]);

  return (
    <>
      <div 
        className="carousel"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div className="carousel-nav" ref={carouselNavRef}>
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
        </div>

        {items.map((item, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              ref={isActive ? contentRef : null}
              key={index}
              className={classNames("content", {
                "is-active": isActive,
              })}
            >
              {item.content}
            </div>
          );
        })}
      </div>
      <style jsx>{`
        .carousel {
          display: flex;
          flex-direction: column;
          margin-top: 20px;
          touch-action: pan-y pinch-zoom;
        }

        .carousel-nav {
          display: flex;
          flex-direction: column;
          position: sticky;
          gap: 35px;
          top: 0;
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
          padding-bottom: 20px;
          z-index: 20;
        }

        .content {
          height: 0;
          opacity: 0;
          scroll-margin-top: ${carouselNavRef.current?.offsetHeight ?? 0}px;
        }

        .content > :global(.masonry-container) {
          display: none;
        }

        .content.is-active {
          padding: 35px 20px 0;
          height: auto;
          opacity: 1;
          transition: opacity 0.8s ease-in-out;
          z-index: 10;
        }

        .content.is-active > :global(.masonry-container) {
          display: block;
        }

        @media (min-width: 768px) {
          .carousel-nav {
            position: relative;
          }

          .content {
            padding: 0;
          }
        }
      `}</style>
    </>
  );
};

export default Carousel;
