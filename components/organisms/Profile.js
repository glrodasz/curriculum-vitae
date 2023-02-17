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

        <div>
          <Item icon="language" title="Languages" />
          <div className="languages">
            <Item flag="🇪🇸" title="Spanish" type="secondary" text="Native" />
            <Item
              flag="🇬🇧"
              title="English"
              type="secondary"
              text="Professional"
            />
            <Item
              flag="🇸🇪"
              title="Swedish"
              type="secondary"
              text="Elementary"
            />
          </div>
        </div>

        <div>
          <Paragraph size="lg">
            I'm Guillermo Rodas, I'm a Full-stack JavaScript Developer with more
            than {new Date().getFullYear() - 2012} years of experience from
            Colombia living in Sweden since 2019.
          </Paragraph>
          <Paragraph size="lg">
            I'm also organizer of CSS Community Dev an umbrella organization for
            different CSS communities around the world (Medellín, Bogotá, and
            Stockholm), and organizer of CSS Conf Colombia an international CSS
            conference.
          </Paragraph>
          <Paragraph size="lg">
            I'm Google Developer Expert in Web Technologies, affiliated Twitch
            Streamer in the Software and Game Development category, and Teacher
            in Platzi the biggest online education platform in Latin America.
          </Paragraph>
        </div>
      </div>
      <style jsx>{`
        .profile {
          display: flex;
          flex-direction: column;
          gap: 20px;
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
    </PageContainer>
  );
};

export default Profile;
