import React from "react";
import PageContainer from "../layout/PageContainer";
import Heading from "../atoms/Heading";
import Carousel from "../molecules/Carousel";

const Career = () => {
  return (
    <PageContainer>
      <Heading size="md" isCentered>
        <strong>Career</strong> experience
      </Heading>
      <Carousel
        items={[
          {
            title: "Currently",
            subtitle: "Klarna",
            content: null,
          },
          {
            title: "2016",
            subtitle: "Auth0",
            content: null,
          },
          {
            title: "2015",
            subtitle: "Huge",
            content: null,
          },
          {
            title: "2012",
            subtitle: "Komet Sales",
            content: null,
          },
        ]}
      />
    </PageContainer>
  );
};

export default Career;
