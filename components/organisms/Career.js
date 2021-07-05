import React from "react";
import Container from "../layout/Container";
import Heading from "../atoms/Heading";
import Carousel from "../molecules/Carousel";

const Career = () => {
  return (
    <Container>
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
    </Container>
  );
};

export default Career;
