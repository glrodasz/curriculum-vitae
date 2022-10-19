import Card from "./Card";

const SkillCards = ({ skills }) => {
  return (
    <>
      <div className="cards">
        {skills.map((skill, index) => (
          <Card {...skill} isInverted={index % 2 !== 0} />
        ))}
      </div>
      <style jsx>{`
        .cards {
          display: flex;
          flex-wrap: wrap;
          gap: 0 30px;
        }

        @media (min-width: 1140px) {
          .cards {
            justify-content: space-between;
          }
        }
      `}</style>
    </>
  );
};

export default SkillCards;
