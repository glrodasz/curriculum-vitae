import Relocation from "./Relocation";
import Heading from "../atoms/Heading";
import Paragraph from "../atoms/Paragraph.js";
import Container from "../layout/Container";
import Carousel from "../molecules/Carousel";
import IconObject from "../molecules/IconObject";
import Card from "../molecules/Card";

const cards = [
  {
    title: "JavaScript",
    subtitle: `${new Date().getFullYear() - 2013} years experience`,
    items: ["JavaScript including ES2015", "JavaSCript MV* frameworks"],
  },
  {
    title: "JavaScript",
    subtitle: `${new Date().getFullYear() - 2013} years experience`,
    items: ["JavaScript including ES2015", "JavaSCript MV* frameworks"],
  },
  {
    title: "JavaScript",
    subtitle: `${new Date().getFullYear() - 2013} years experience`,
    items: ["JavaScript including ES2015", "JavaSCript MV* frameworks"],
  },
  {
    title: "JavaScript",
    subtitle: `${new Date().getFullYear() - 2013} years experience`,
    items: ["JavaScript including ES2015", "JavaSCript MV* frameworks"],
  },
];

const skills = [
  { title: "Node.js", text: "For build web applications" },
  { title: "Node.js", text: "For build web applications" },
  { title: "Node.js", text: "For build web applications" },
  { title: "Node.js", text: "For build web applications" },
];

const Profile = () => {
  return (
    <Container>
      <div className="profile">
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
              content: (
                <div className="cards">
                  {cards.map((card, index) => (
                    <Card {...card} isInverted={index % 2 !== 0} />
                  ))}
                </div>
              ),
            },
            {
              title: "Skills",
              content: (
                <div className="skills">
                  {skills.map((skill) => (
                    <IconObject icon="diamond-alt" {...skill} />
                  ))}
                </div>
              ),
            },
            {
              title: "Frameworks",
              content: null,
            },
          ]}
        />
      </div>
      <style jsx>{`
        .profile {
          padding: 50px 0 40px;
        }

        .languages {
          display: flex;
          flex-direction: column;
        }

        .cards {
          display: flex;
          flex-wrap: wrap;
          gap: 0 30px;
        }

        @media (min-width: 1140px) {
          .languages {
            flex-direction: row;
            grid-gap: 20px;
          }

          .cards {
            justify-content: space-between;
          }
        }
      `}</style>
    </Container>
  );
};

export default Profile;
