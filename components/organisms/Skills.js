
import Carousel from "../molecules/Carousel";
import PageContainer from "../layout/PageContainer";
import SkillCards from "../molecules/SkillCards";

import { expertises, stack, frameworks } from "../../data/skills";
import SkillList from "../molecules/SkillList";

const Skills = () => {
  return (
    <PageContainer>
      <Carousel
        items={[
          {
            title: "Expertise",
            content: <SkillCards skills={expertises} />
          },
          {
            title: "Skills",
            content: <SkillList skills={stack} />,
          },
          {
            title: "Frameworks",
            content: <SkillList skills={frameworks} />
          },
        ]}
      />
    </PageContainer>
  );
};

export default Skills;
