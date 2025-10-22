import { useState, useRef } from "react";
import classNames from "classnames";
import { useSwipeable } from "react-swipeable";

import CarouselHeader from "./CarouselHeader";
import CarouselSubheader from "./CarouselSubheader";

interface CarouselItem {
  title: string;
  subtitle?: string;
  heading?: string;
  content: React.ReactNode;
}

interface CarouselProps {
  items: CarouselItem[];
  printMode?: boolean;
}

const Carousel: React.FC<CarouselProps> = ({ items, printMode = false }) => {
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

  // Print mode: render all items as a simple vertical stack
  if (printMode) {
    return (
      <>
        <div className="carousel print-mode">
          {items.map((item, index) => (
            <div key={index} className="content print-content">
              {item.title && <h3 className="print-section-title">{item.title}</h3>}
              {item.subtitle && <h4 className="print-section-subtitle">{item.subtitle}</h4>}
              {item.heading && <p className="print-section-heading">{item.heading}</p>}
              {item.content}
            </div>
          ))}
        </div>
        <style jsx>{`
          .carousel.print-mode {
            display: flex;
            flex-direction: column;
            gap: 40px;
            width: 100%;
          }

          .print-content {
            width: 100%;
          }

          .print-content > :global(.masonry-container) {
            display: block;
          }

          .print-section-title {
            font-family: "Hind", sans-serif;
            font-size: 24px;
            font-weight: 700;
            margin-bottom: 10px;
            color: var(--text);
            line-height: 1.2;
          }

          .print-section-subtitle {
            font-family: "Hind", sans-serif;
            font-size: 20px;
            font-weight: 700;
            margin-bottom: 8px;
            color: var(--text);
            line-height: 1.2;
          }

          .print-section-heading {
            font-family: "Hind", sans-serif;
            font-size: 16px;
            font-weight: 400;
            margin-bottom: 20px;
            color: var(--secondary);
            line-height: 1.4;
          }

          @media print {
            .carousel.print-mode {
              gap: 0;
            }

            .print-content {
              break-inside: auto;
              page-break-inside: auto;
              margin-bottom: 30px;
            }

            .print-section-title {
              break-after: avoid;
              page-break-after: avoid;
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
