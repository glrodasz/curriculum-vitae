const PageContainer = ({ children, fullHeight }) => {
  return (
    <>
      <div className="container">{children}</div>
      <style jsx>{`
        .container {
          width: 100%;
          max-width: 768px;
          padding: 0 20px;
          margin: 0 auto;
          ${fullHeight ? "min-height: 100%;" : ""}
          ${fullHeight ? "height: 100%;" : ""}
        }

        @media (min-width: 1140px) {
          .container {
            max-width: 1440px;
            padding: 0 80px;
          }
        }
      `}</style>
    </>
  );
};

export default PageContainer;
