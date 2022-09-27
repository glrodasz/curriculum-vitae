import React from "react";
import PageContainer from "../layout/PageContainer";
import Heading from "../atoms/Heading";
import Carousel from "../molecules/Carousel";
import Job from "../molecules/Job";

import { careers } from "../../data/careers";

const Career = () => {
  return (
    <PageContainer>
      <Heading size="md" isCentered>
        <strong>Career</strong> experience
      </Heading>
      <Carousel
        items={careers.map((career) => ({
          title: career.date,
          subtitle: career.company,
          heading: career.duration,
          content: <Job career={career} />,
        }))}
      />
    </PageContainer>
  );
};

export default Career;
