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
            I'm a Full-stack JavaScript Developer with more than{" "}
            {new Date().getFullYear() - 2012} years of experience from Medellín,
            Colombia (the city of the eternal spring) but living in Stockholm,
            Sweden (the city of the eternal winter) since 2019.
          </Paragraph>
          <Paragraph size="lg">
            I have always love to connect with the tech community, and since
            very early in my career I learn by teaching giving talks in
            different local communities. It has been more than 30 talks in
            meetups, podcasts, and events.
          </Paragraph>
          <Paragraph size="lg">
            Because I really love the idea of give to the community I also
            become organizer of CSS Community Dev an umbrella organization for
            different CSS communities around the world (Medellín, Bogotá, and
            Stockholm), and later I become organizer of CSS Conf Colombia an
            international conference about CSS.
          </Paragraph>
          <Paragraph size="lg">
            I enjoy mentoring, and in 2019 I had the opportunity of joining the
            Google Developer Experts group for the category of Web Technologies.
            Later in 2020 I started as a Twitch Streamer in the Software and
            Game Development category, where I show to other developers how I
            usually solve problems. I have also recorded 4 courses with Platzi
            the biggest online education platform in Latin America.
          </Paragraph>
          <Paragraph size="lg">
            In my free time I like to read, learn new things, take care of my
            pets, watch movies and series, do oil painting, and play board games
            with my friends.
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
