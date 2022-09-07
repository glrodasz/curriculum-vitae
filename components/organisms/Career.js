import React from "react";
import PageContainer from "../layout/PageContainer";
import Heading from "../atoms/Heading";
import Carousel from "../molecules/Carousel";
import IconObject from "../molecules/IconObject";
import Logo from "../atoms/Logo";

import { careers } from "../../data/careers";
import Paragraph from "../atoms/Paragraph";
import Link from "../atoms/Link";

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
          content: (
            <div
              className="job"
              style={{ display: "flex", flexDirection: "column", gap: 20 }}
            >
              <Logo logoName={career.logo} />
              <Link href={career.url} />
              <div>
                <Heading size="xs">About</Heading>
                <Paragraph>{career.about}</Paragraph>
              </div>

              <div>
                <Heading size="xs">Functions</Heading>
                <Paragraph>{career.functions}</Paragraph>
              </div>

              <div>
                <Heading size="xs">My achievements</Heading>
                <div className="list">
                  {career.achievements.map((achievement) => (
                    <IconObject icon="diamond-alt" text={achievement} />
                  ))}
                </div>
              </div>
            </div>
          ),
        }))}
      />
    </PageContainer>
  );
};

export default Career;
