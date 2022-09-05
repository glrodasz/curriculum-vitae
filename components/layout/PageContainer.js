const PageContainer = ({ children }) => {
  return (
    <>
      <div className="container">{children}</div>
      <style jsx>{`
        .container {
          width: 100%;
          padding: 0 20px;
          margin: 0 auto;
          height: 100%;
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
