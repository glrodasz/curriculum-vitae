import React from "react";
import IconObject from "../molecules/IconObject";
import Logo from "../atoms/Logo";

import Heading from "../atoms/Heading";
import Paragraph from "../atoms/Paragraph";
import Link from "../atoms/Link";

const Job = ({ career }) => {
  return (
    <>
      <div className="job">
        <Logo logoName={career.logo} />
        <Link href={career.url} />
        <div>
          <Heading size="xs">About</Heading>
          <Paragraph>{career.about}</Paragraph>
        </div>

        <div>
          <Heading size="xs">Functions</Heading>
          <Paragraph>{career.functions}</Paragraph>
        </div>

        <div className="achievements">
          <Heading size="xs">My achievements</Heading>
          <div className="list">
            {career.achievements.map((achievement) => (
              <IconObject icon="diamond-alt" text={achievement} />
            ))} 
          </div>
        </div>
      </div>
      <style>{`
		.job {
			display: "flex", flexDirection: "column", gap: 20
		}

		@media (min-width: 1140px) {
			.job {
				display: grid;
				grid-template-columns: repeat(2, 1fr);
				gap: 20px;
			}

			.achievements {
				grid-column: 2;
				grid-row: 1/5;

			}
		}
		`}</style>
    </>
  );
};

export default Job;
