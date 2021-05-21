import Paragraph from "../atoms/Paragraph";

const Country = ({ flag, description }) => {
  return (
    <>
      <div className="country">
        <picture>
          <img className="flag" src={`/flags/${flag}.svg`} />
        </picture>
        <span className="description">
          <Paragraph size="sm" isMarginless>
            {description}
          </Paragraph>
        </span>
      </div>
      <style jsx>{`
        .country {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        picture {
          display: inline-block;
          border-radius: 50%;
          width: 55px;
          height: 55px;
          overflow: hidden;
          border: 5px solid var(--white);
        }

        .flag {
          object-fit: cover;
          width: 50px;
          height: 50px;
        }

        .description {
          margin-top: 17px;
          background: var(--concrete);
          padding: 4px 19px;
          border-radius: 100px;
          width: max-content;
        }
      `}</style>
    </>
  );
};

export default Country;
