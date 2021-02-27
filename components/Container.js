const Container = ({ children }) => {
  return (
    <>
      <div className="container">{children}</div>
      <style jsx>{`
        .container {
          max-width: 800px;
          width: 100%;
          padding: 0 30px;
		  margin: 0 auto;
        }
      `}</style>
    </>
  );
};

export default Container;
