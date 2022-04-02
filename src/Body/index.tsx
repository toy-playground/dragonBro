// import Contact from "./Contact";
import Home from "./Home";
import Portfolio from "./Portfolio";
const Body = () => {
  return (
    <div className="w-full transition duration-600 ease-out ">
      <Home message={"Rambunctious Investment."} />
      <Portfolio />
      {/* <Contact /> */}
    </div>
  );
};

export default Body;
