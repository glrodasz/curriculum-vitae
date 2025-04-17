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
  const [touchStartY, setTouchStartY] = useState(null);
  const [touchEndY, setTouchEndY] = useState(null);
  const minSwipeDistance = 50;
  const minSwipeRatio = 0.5; // Minimum ratio of horizontal to vertical movement

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
    setTouchEndY(null);
    setTouchStart(e.targetTouches[0].clientX);
    setTouchStartY(e.targetTouches[0].clientY);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
    setTouchEndY(e.targetTouches[0].clientY);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd || !touchStartY || !touchEndY) return;
    
    const distanceX = touchStart - touchEnd;
    const distanceY = touchStartY - touchEndY;
    
    // Calculate the absolute distances
    const absDistanceX = Math.abs(distanceX);
    const absDistanceY = Math.abs(distanceY);
    
    // Only process if horizontal movement is significant
    if (absDistanceX < minSwipeDistance) return;
    
    // Calculate the ratio of horizontal to vertical movement
    const ratio = absDistanceX / (absDistanceY || 1); // Avoid division by zero
    
    // If horizontal movement is significantly more than vertical, process the swipe
    if (ratio > minSwipeRatio) {
      if (distanceX > 0) {
        handleClickNext();
      } else {
        handleClickPrev();
      }
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
          touch-action: pan-y;
          width: 100%;
          min-height: 100%;
        }

        .carousel-nav {
          display: flex;
          flex-direction: column;
          position: sticky;
          gap: 35px;
          top: 0;
          background: var(--carousel-nav-bg);
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
