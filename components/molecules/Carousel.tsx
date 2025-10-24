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
      <div className="carousel-container carousel-container--flattened">
        {items.map((item, index) => (
          <div key={index} className="carousel-slide carousel-slide--flattened">
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
          .carousel-container--flattened {
            display: flex;
            flex-direction: column;
            gap: 40px;
            width: 100%;
          }

          .carousel-slide--flattened {
            width: 100%;
          }

          .carousel-slide--flattened > :global(.knowledge-masonry) {
            display: block;
          }

          .carousel-slide--flattened > :global(.heading:first-child) {
            margin-bottom: 10px;
          }

          .carousel-slide--flattened > :global(.heading:nth-child(2)) {
            margin-bottom: 8px;
          }

          .carousel-slide--flattened > :global(.paragraph) {
            margin-bottom: 20px;
          }

          .flattened-content > :global(.paragraph.color-secondary) {
            color: var(--text);
          }

          @media print {
            .carousel-container--flattened {
              gap: 30px;
            }
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
        className="carousel-container"
      >
        <div className="carousel-navigation" ref={carouselNavRef}>
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
              className={classNames("carousel-slide", {
                "carousel-slide--active": isActive,
              })}
            >
              {item.content}
            </div>
          );
        })}
      </div>
        <style jsx>{`
        .carousel-container {
          display: flex;
          flex-direction: column;
          margin-top: 20px;
          touch-action: pan-y;
          width: 100%;
          min-height: 100%;
        }

        .carousel-navigation {
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

        .carousel-slide {
          height: 0;
          opacity: 0;
          scroll-margin-top: ${carouselNavRef.current?.offsetHeight ?? 0}px;
        }

        .carousel-slide > :global(.knowledge-masonry) {
          display: none;
        }

        .carousel-slide--active {
          padding: 35px 20px 0;
          height: auto;
          opacity: 1;
          transition: opacity 0.8s ease-in-out;
          z-index: 10;
        }

        .carousel-slide--active > :global(.knowledge-masonry) {
          display: block;
        }

        @media (min-width: 768px) {
          .carousel-navigation {
            position: relative;
          }

          .carousel-slide {
            padding: 0;
          }
        }

        @media print {
          .carousel-navigation {
            display: none !important;
            position: relative !important;
          }

          .carousel-slide {
            height: auto !important;
            opacity: 1 !important;
            padding: 0 !important;
          }

          .carousel-slide > :global(.knowledge-masonry) {
            display: block !important;
          }

          .carousel-container {
            gap: 30px;
          }
        }
      `}</style>
    </>
  );
};

export default Carousel;
