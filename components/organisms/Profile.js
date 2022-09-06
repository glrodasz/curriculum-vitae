import Relocation from "./Relocation";
import Heading from "../atoms/Heading";
import Paragraph from "../atoms/Paragraph.js";
import PageContainer from "../layout/PageContainer";
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
    <PageContainer>
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
          I'm Guillermo Rodas, I'm a Full-stack JavaScript Developer with more
          than 10 years of experience from Colombia living in Sweden since 2019.
        </Paragraph>
        <Paragraph>
          I'm also organizer of CSS Community Dev an umbrella organization for
          different CSS communities around the world (Medellín, Bogotá, and
          Stockholm), and organizer of CSS Conf Colombia an international CSS
          conference.
        </Paragraph>
        <Paragraph>
          I'm Google Developer Expert in Web Technologies, affiliated Twitch
          Streamer in the Software and Game Development category, and Teacher in
          Platzi the biggest online education platform in Latin America.
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
    </PageContainer>
  );
};

export default Profile;
