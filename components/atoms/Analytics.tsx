import React from "react";

const Analytics: React.FC = () => {
  return (
    <>
      {/* 100% privacy-first analytics */}
      <script data-collect-dnt="true" async src="https://scripts.simpleanalyticscdn.com/latest.js" />
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://queue.simpleanalyticscdn.com/noscript.gif?collect-dnt=true"
          alt=""
          referrerPolicy="no-referrer-when-downgrade"
        />
      </noscript>
    </>
  )
}

export default Analytics;
