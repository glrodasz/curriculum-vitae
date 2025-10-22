import Item from "./Item";
import { StackItem, FrameworkItem } from "../../types/data";

interface SkillListProps {
  skills: (StackItem | FrameworkItem)[];
}

const SkillList: React.FC<SkillListProps> = ({ skills }) => {
  return (
    <>
      <div className="list">
        {skills.map((skill) => (
          <Item key={skill.title} icon="diamond-alt" {...skill} />
        ))}
      </div>
      <style jsx>{`
          @media (min-width: 1140px) {
              .list {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 20px;
              }
            `}</style>
    </>
  );
};

export default SkillList;
