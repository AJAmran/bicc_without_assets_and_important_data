import "./Loader.css";

const Loader = () => {
  return (
    <div className="bg-primary">
      <div className="flex flex-col container mx-auto items-center justify-center min-h-screen space-y-4">
        <div className="loader">
          <div className="load-inner load-one"></div>
          <div className="load-inner load-two"></div>
          <div className="load-inner load-three"></div>
          <span className="text">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
