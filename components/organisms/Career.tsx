import React from "react";
import PageContainer from "../layout/PageContainer";
import Heading from "../atoms/Heading";
import Carousel from "../molecules/Carousel";
import Job from "../molecules/Job";
import { useViewMode } from "../../contexts/ViewModeContext";
import { calculateDuration } from "../../utils";
import { careers } from "../../data/careers";

const Career: React.FC = () => {
  const { isFlattened } = useViewMode();

  return (
    <PageContainer withCarousel>
      <Heading size="md" isCentered={!isFlattened}>
        <strong>Career</strong> experience
      </Heading>
      <Carousel
        isFlattened={isFlattened}
        items={careers.map((career) => ({
          title: career.date ? career.date : String(new Date().getFullYear()),
          subtitle: career.company,
          heading: calculateDuration(career.startDate, career.endDate),
          content: <Job career={career} />,
        }))}
      />
    </PageContainer>
  );
};

export default Career;
