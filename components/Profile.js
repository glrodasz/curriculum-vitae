import Relocation from "./Relocation";
import Heading from "./Heading";
import Paragraph from "./Paragraph.js";
import Container from "./Container";
import Icon from "./Icon";
import Carousel from "./Carousel";

const Profile = () => {
  return (
    <Container>
      <div className="profile">
        <div className="relocation">
          <Relocation />
        </div>
        <Heading size="md" isCentered>
          <strong>Personal</strong> profile
        </Heading>

		{/* TODO: Move to IconHeading component */}
        <Heading size="xs">
          <Icon size="md" name="language" />{" "}
          <span style={{ display: "inline-block", marginTop: 3 }}>
            Language
          </span>
        </Heading>

        {/* TODO: Move these below to a Language component  */}
        <div style={{ marginTop: 10, display: "flex", fontSize: 15 }}>
          <span style={{ lineHeight: 1 }}>🇪🇸</span>
          <div style={{ marginLeft: 8 }}>
            <Heading size="xxs" color="secondary" isMarginless>
              Spanish
            </Heading>
            <Paragraph color="secondary" isMarginless>
              Native
            </Paragraph>
          </div>
        </div>

        <div
          style={{
            marginTop: 10,
            marginBottom: 20,
            display: "flex",
            fontSize: 15,
          }}
        >
          <span style={{ lineHeight: 1 }}>🇬🇧</span>
          <div style={{ marginLeft: 8 }}>
            <Heading size="xxs" color="secondary" isMarginless>
              English
            </Heading>
            <Paragraph color="secondary" isMarginless>
              Profesional working proficiency
            </Paragraph>
          </div>
        </div>

        <Paragraph>
          Guillermo Rodas is a Full-stack JavaScript Engineer from Colombia,
          currently living in Stockholm, Sweden.
        </Paragraph>
        <Paragraph>
          Overall in his career, he has witnessed how JavaScript is changing the
          way we build software in the present and how it is influencing the
          future. He has worked mostly as a front-end developer on many UI/UX
          projects. However, don't hesitate in asking him about architecture,
          brainstorming, product design, Node.js and even about how to learn new
          things every day.
        </Paragraph>
        <Paragraph>
          He loves to connect with the tech community and that's why he has had
          the pleasure to give more than 20 talks in local communities like
          MedellínJS, MedellínPHP, MedellínJava, and MedellínCSS.
        </Paragraph>
        <Paragraph>
          He also enjoys mentoring. He has given a Full-Stack JavaScript
          Bootcamp at World Tech Makers, recorded 4 online courses for Platzi
          and is a mentor in Pioneras Developers and Data Science FEM.
        </Paragraph>
        <Paragraph>
          His favorites CSS colors are tomato, rebeccapurple, and papayawhip
        </Paragraph>

        <Carousel
          items={[
            {
              title: "Expertise",
            },
            {
              title: "Skills",
            },
            {
              title: "Frameworks",
            },
          ]}
        />
      </div>
      <style jsx>{`
        .profile {
          padding: 50px 0 40px;
        }

        .relocation {
          margin-bottom: 50px;
        }
      `}</style>
    </Container>
  );
};

export default Profile;
