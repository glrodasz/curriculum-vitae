import React from "react";
import PageContainer from "../layout/PageContainer";
import Heading from "../atoms/Heading";
import Carousel from "../molecules/Carousel";
import Job from "../molecules/Job";
import { calculateDuration } from "../../utils";
import { careers } from "../../data/careers";

interface CareerProps {
  printMode?: boolean;
}

const Career: React.FC<CareerProps> = ({ printMode = false }) => {
  return (
    <PageContainer withCarousel>
      <Heading size="md" isCentered>
        <strong>Career</strong> experience
      </Heading>
      <Carousel
        printMode={printMode}
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
