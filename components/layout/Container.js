const Container = ({ children }) => {
  return (
    <>
      <div className="container">{children}</div>
      <style jsx>{`
        .container {
          max-width: 800px;
          width: 100%;
          padding: 0 20px;
          margin: 0 auto;
        }

        @media (min-width: 1440px) {
          .container {
            max-width: 1230px;
          }
        }
      `}</style>
    </>
  );
};

export default Container;
