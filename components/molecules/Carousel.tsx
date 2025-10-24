import { useState, useRef } from "react";
import classNames from "classnames";
import { useSwipeable } from "react-swipeable";

import CarouselHeader from "./CarouselHeader";
import CarouselSubheader from "./CarouselSubheader";
import Heading from "../atoms/Heading";
import Paragraph from "../atoms/Paragraph";

interface CarouselItem {
  title: string;
  subtitle?: string;
  heading?: string;
  content: React.ReactNode;
}

interface CarouselProps {
  items: CarouselItem[];
  isFlattened?: boolean;
}

const Carousel: React.FC<CarouselProps> = ({ items, isFlattened = false }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const carouselNavRef = useRef<HTMLDivElement>(null);
  const lastItemIndex = items.length - 1;
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

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleClickNext(),
    onSwipedRight: () => handleClickPrev(),
    delta: minSwipeDistance,
    preventScrollOnSwipe: true,
    trackMouse: false,
    trackTouch: true,
  });

  // Flattened mode: render all items as a simple vertical stack
  if (isFlattened) {
    return (
      <>
        <div className="carousel flattened">
          {items.map((item, index) => (
            <div key={index} className="content flattened-content">
              {item.title && (
                <Heading tag="h3" size="sm" weight="bold" isMarginless>
                  {item.title}
                </Heading>
              )}
              {item.subtitle && (
                <Heading tag="h4" size="xs" weight="bold" isMarginless>
                  {item.subtitle}
                </Heading>
              )}
              {item.heading && (
                <Paragraph color="secondary" isMarginless>
                  {item.heading}
                </Paragraph>
              )}
              {item.content}
            </div>
          ))}
        </div>
        <style jsx>{`
          .carousel.flattened {
            display: flex;
            flex-direction: column;
            gap: 40px;
            width: 100%;
          }

          .flattened-content {
            width: 100%;
          }

          .flattened-content > :global(.masonry-container) {
            display: block;
          }

          .flattened-content > :global(.heading:first-child) {
            margin-bottom: 10px;
          }

          .flattened-content > :global(.heading:nth-child(2)) {
            margin-bottom: 8px;
          }

          .flattened-content > :global(.paragraph) {
            margin-bottom: 20px;
          }

          .flattened-content > :global(.paragraph.color-secondary) {
            color: var(--text);
          }
        `}</style>
      </>
    );
  }

  // Normal interactive mode
  return (
    <>
      <div
        {...swipeHandlers}
        className="carousel"
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
