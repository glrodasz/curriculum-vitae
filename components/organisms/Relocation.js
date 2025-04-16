import Country from "../molecules/Country";
import Icon from "../atoms/Icon";

const Relocation = ({}) => {
  return (
    <>
      <div className="relocation">
        <Country flag="colombia" description="From Colombia" />
        <div className="connector-icon">
          <Icon size="lg" name="airplane" />
        </div>
        <div className="divider" />
        <Country flag="sweden" description="Living in Sweden" />
      </div>
      <style jsx>{`
        .relocation {
          position: relative;
          display: flex;
          justify-content: space-around;
          align-items: center;
          margin: 0 auto;
          width: 350px;
        }

        .connector-icon {
          position: relative;
          top: -20px;
        }

        .divider {
          position: absolute;
          top: 28px;
          z-index: -1;
          height: 0;
          border-top: 1px dashed var(--storm-dust);
          width: 50%;
        }
      `}</style>
    </>
  );
};

export default Relocation;
