import React from "react";
import PageContainer from "../layout/PageContainer";
import Carousel from "../molecules/Carousel";
import SkillCards from "../molecules/SkillCards";
import SkillList from "../molecules/SkillList";
import data from "../../data";

interface SkillsProps {
  printMode?: boolean;
}

const Skills: React.FC<SkillsProps> = ({ printMode = false }) => {
  return (
    <PageContainer withCarousel>
      <Carousel
        printMode={printMode}
        items={[
          {
            title: "Expertise",
            content: <SkillCards skills={data.expertises} />,
          },
          {
            title: "Skills",
            content: <SkillList skills={data.stack} />,
          },
          {
            title: "Frameworks",
            content: <SkillList skills={data.frameworks} />,
          },
        ]}
      />
    </PageContainer>
  );
};

export default Skills;
