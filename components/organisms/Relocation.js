import Country from "../molecules/Country";
import Icon from "../atoms/Icon";

const Relocation = ({}) => {
  return (
    <>
      <div className="relocation">
        <Country flag="colombia" description="From Colombia" />
        <div className="icon">
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
          width: 300px;
          margin: 0 auto;
        }

        .icon {
          position: relative;
          top: -20px;
          background: var(--white);
          border: 5px solid var(--white);
        }

        .divider {
          position: absolute;
          top: 28px;
          z-index: -1;
          height: 0;
          border-top: 1px dashed var(--storm-dust);
          width: 200px;
        }
      `}</style>
    </>
  );
};

export default Relocation;
