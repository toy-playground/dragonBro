import stepnPng from "@/assets/stepn.png";
import peoplePng from "@/assets/people.png";

const portfolios = [
  {
    src: stepnPng,
    title: "STEPN",
  },
  {
    src: peoplePng,
    title: "constitution DAO",
  },
];
const Portfolio = () => {
  return (
    <div
      data-anchor="portfolio"
      id="portfolio"
      className="bg-red-100 flex h-screen flex-col items-center justify-center p-8"
    >
      <div className="pt-16 text-4xl font-bold text-red-400">——Portfolio——</div>
      <div className="flex flex-wrap gap-10 mt-8 items-center">
        {portfolios.map((x) => {
          return (
            <div className="flex flex-col justify-center items-center flex-1">
              <div
                style={{ height: 80 }}
                className="w-full flex justify-center items-center"
              >
                <img
                  style={{ maxWidth: 200, maxHeight: 200 }}
                  src={x.src}
                  alt="people"
                ></img>
              </div>
              <div className="py-2 my-4 border-t-4 w-full text-center border-red-300 text-red-400 text-lg font-bold">
                {x.title}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
