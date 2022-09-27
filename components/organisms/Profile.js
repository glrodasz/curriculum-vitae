
import Heading from "../atoms/Heading";
import Paragraph from "../atoms/Paragraph.js";
import PageContainer from "../layout/PageContainer";

import Item from "../molecules/Item";


const Profile = () => {
  return (
    <PageContainer>
      <div className="profile">
        <Heading size="md" isCentered>
          <strong>Personal</strong> profile
        </Heading>

        <Item icon="language" title="Language" />
        <div className="languages">
          <Item
            flag="🇪🇸"
            title="Spanish"
            type="secondary"
            text="Native"
          />
          <Item
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
      </div>
      <style jsx>{`
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
    </PageContainer>
  );
};

export default Profile;
