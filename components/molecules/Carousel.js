import { useState } from "react";

import Heading from "../atoms/Heading";
import Icon from "../atoms/Icon";
import Card from './Card'

const cards = [
  {
    title: "JavaScript",
    subtitle: `${new Date().getFullYear() - 2013} years experience`,
    items: ["JavaScript including ES2015", "JavaSCript MV* frameworks"],
  },
  {
    title: "JavaScript",
    subtitle: `${new Date().getFullYear() - 2013} years experience`,
    items: ["JavaScript including ES2015", "JavaSCript MV* frameworks"],
  },
  {
    title: "JavaScript",
    subtitle: `${new Date().getFullYear() - 2013} years experience`,
    items: ["JavaScript including ES2015", "JavaSCript MV* frameworks"],
  },
  {
    title: "JavaScript",
    subtitle: `${new Date().getFullYear() - 2013} years experience`,
    items: ["JavaScript including ES2015", "JavaSCript MV* frameworks"],
  },
];

const Carousel = ({ items }) => {
  const [active, setActive] = useState(0);
  const lastItemIndex = items.length - 1;

  const prev = () => {
    if (active >= 1) {
      setActive(active - 1);
    } else {
      setActive(lastItemIndex);
    }
  };

  const next = () => {
    if (active < lastItemIndex) {
      setActive(active + 1);
    } else {
      setActive(0);
    }
  };

  return (
    <>
      <div className="header">
        {items.map(({ title }, index) => (
          <div
            className={`tab ${index === active ? "is-active" : ""}`}
            onClick={() => setActive(index)}
          >
            <Heading size="xxs" isMarginless>
              {index === active && <Icon size="sm" name="diamond" />}{" "}
              <span style={{ display: "inline-block", marginTop: 3 }}>
                {title}
              </span>
            </Heading>
          </div>
        ))}
      </div>
      <div className="subheader">
        <Icon name="airplane" isRounded isClickable onClick={prev} />
        <Heading size="sm" isCentered isMarginless isComfortable>
          <strong>{items[active].title}</strong>
        </Heading>
        <Icon name="airplane" isRounded isClickable onClick={next} />
      </div>
      <div className="content">
        {cards.map((card, index) => (
          <Card {...card} isInverted={index % 2 !== 0} />
        ))}
      </div>
      <style jsx>{`
        .header {
          display: flex;
          margin-bottom: 30px;
        }

        .subheader {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .tab {
          background: var(--golden-yellow);
          width: 195px;
          text-align: center;
          padding: 10px 0;
          cursor: pointer;
        }

        .tab:not(.is-active) {
          opacity: 0.5;
        }
      `}</style>
    </>
  );
};

export default Carousel;
