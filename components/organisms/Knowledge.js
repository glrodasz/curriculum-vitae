import React from "react";
import PageContainer from "../layout/PageContainer";
import Heading from "../atoms/Heading";
import Carousel from "../molecules/Carousel";
import Item from "../molecules/Item";


const Knowledge = ({ title, items}) => {
  return (
    <>
      <PageContainer>
        <Heading size="md" isCentered>
          <strong>{title[0]}</strong> {title[1]}
        </Heading>
        <Carousel
          items={items.map((item) => ({
            title: item.title,
            content: (
              <div className="content">
                {item.items.map((subitem) => (
                  <Item icon="diamond-alt" {...subitem} />
                ))}
              </div>
            ),
          }))}
        />
      </PageContainer>
      <style jsx>{`
      @media (min-width: 1140px) {
          .content {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
        `}</style>
    </>
  );
};

export default Knowledge;
