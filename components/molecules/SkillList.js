import IconObject from "../molecules/IconObject";

const SkillList = ({ skills }) => {
  return (
    <div className="list">
      {skills.map((skill) => (
        <IconObject icon="diamond-alt" {...skill} />
      ))}
    </div>
  );
};

export default SkillList;
