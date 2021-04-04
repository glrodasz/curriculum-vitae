import Relocation from "./Relocation";
import Heading from "./Heading";
import Paragraph from "./Paragraph.js";
import Container from "./Container";
import Icon from "./Icon";
import Carousel from "./Carousel";
import IconObject from "./IconObject";

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
        <IconObject flag="🇪🇸" title="Spanish" type="secondary" text="Native" />
        <IconObject
          flag="🇬🇧"
          title="Spanish"
          type="secondary"
          text="Profesional working proficiency"
        />

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
