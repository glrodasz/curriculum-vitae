import React from "react";
import Item from "./Item";
import Logo from "../atoms/Logo";

import Heading from "../atoms/Heading";
import Paragraph from "../atoms/Paragraph";
import Link from "../atoms/Link";

const Job = ({ career }) => {
  return (
    <>
      <div className="job">
        <div className="header">
          <Logo logoName={career.logo} shouldInvert={true} />
          <Link href={`https://${career.url}`} weight="normal">{career.url}</Link>
        </div>
        <div>
          <Heading size="xs">About</Heading>
          <Paragraph>{career.about}</Paragraph>
        </div>

        <div>
          <Heading size="xs">Functions</Heading>
          <Paragraph>{career.functions}</Paragraph>
        </div>

        {!!career.achievements?.length && <div className="achievements">
          <Heading size="xs">My achievements</Heading>
          <div className="list">
            {career.achievements.map((achievement, index) => (
              <Item key={index} icon="diamond-alt" text={achievement} />
            ))}
          </div>
        </div>}
      </div>
      <style jsx>{`
        .job {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 25px;
        }

        .achievements {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .header {
          display: flex;
          flex-direction: column;
          gap: 15px;
          align-items: center;
        }

        @media (min-width: 1140px) {
          .job {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 35px;
          }

          .achievements {
            grid-column: 2;
            grid-row: 1/5;
          }

          .achievements > :global(.heading) {
            margin-left: 25px;
          }

          .header {
            align-items: flex-start;
          }
        }
      `}</style>
    </>
  );
};

export default Job;
