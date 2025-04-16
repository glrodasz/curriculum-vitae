import Image from "next/image";
import Paragraph from "../atoms/Paragraph";

const Country = ({ flag, description }) => {
  return (
    <>
      <div className="country">
        <picture>
          <Image className="flag" src={`/flags/${flag}.svg`} alt={flag} height={55} width={55}/>
        </picture>
        <span className="description">
          <Paragraph size="sm" isMarginless freezeColor={true}>
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
          border: 3px solid var(--white);
          box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
        }

        picture > :global(img) {
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
          box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </>
  );
};

export default Country;
