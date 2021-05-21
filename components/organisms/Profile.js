import Relocation from "./Relocation";
import Heading from "../atoms/Heading";
import Paragraph from "../atoms/Paragraph.js";
import Container from "../layout/Container";
import Carousel from "../molecules/Carousel";
import IconObject from "../molecules/IconObject";

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

        <IconObject icon="language" title="Language" />
        <div className="languages">
          <IconObject
            flag="🇪🇸"
            title="Spanish"
            type="secondary"
            text="Native"
          />
          <IconObject
            flag="🇬🇧"
            title="English"
            type="secondary"
            text="Profesional working proficiency"
          />
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

        .languages {
          display: flex;
          flex-direction: column;
        }

        @media (min-width: 1140px) {
          .languages {
            flex-direction: row;
            grid-gap: 20px;
          }
        }
      `}</style>
    </Container>
  );
};

export default Profile;
