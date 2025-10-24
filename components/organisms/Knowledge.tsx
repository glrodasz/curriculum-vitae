import React from "react";
import PageContainer from "../layout/PageContainer";
import Heading from "../atoms/Heading";
import Carousel from "../molecules/Carousel";
import Item from "../molecules/Item";
import Masonry from "@mui/lab/Masonry";
import useBreakpoints from "../../hooks/useBreakpoints";
import { useViewMode } from "../../contexts/ViewModeContext";
import { KnowledgeSection } from "../../types/data";

interface KnowledgeProps {
  title: [string, string];
  items: KnowledgeSection[];
}

const Knowledge: React.FC<KnowledgeProps> = ({ title, items }) => {
  const { isMobile } = useBreakpoints();
  const { isFlattened } = useViewMode();

  return (
    <>
      <PageContainer withCarousel>
        <Heading size="md" isCentered={!isFlattened}>
          <strong>{title[0]}</strong> {title[1]}
        </Heading>
        <Carousel
          isFlattened={isFlattened}
          items={items.map((item) => ({
            title: item.title,
            content: (
              <div className="masonry-container">
                <Masonry columns={isMobile ? 1 : 2}>
                  {item.items.map((subitem) => (
                    <Item key={subitem.title} icon="diamond-alt" {...subitem} />
                  ))}
                </Masonry>
              </div>
            ),
          }))}
        />
      </PageContainer>
    </>
  );
};

export default Knowledge;
