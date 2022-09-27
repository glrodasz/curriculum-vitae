import Item from "./Item";

const SkillList = ({ skills }) => {
  return (
    <div className="list">
      {skills.map((skill) => (
        <Item icon="diamond-alt" {...skill} />
      ))}
    </div>
  );
};

export default SkillList;
