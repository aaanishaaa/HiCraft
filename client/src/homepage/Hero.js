import React from "react";
import Cards from "./Cards";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";

const Hero = () => {
  return (
    <div>
      <div className="flex">
        <div className="w-1/3 p-20 bg-yellow-200">
          <div>
            <p className="font-bold text-3xl">
              Freelancing, Redefined. 100% Transparent. 0% Fake Reviews.
            </p>
          </div>
          <div>
            <p>
              Revolutionizing freelancing with blockchain to ensure fair
              opportunities, secure payments, and transparent reviews.
            </p>
          </div>
          <div>
            <div className="my-4 flex">
              <input
                type="text"
                placeholder="Search Opportunities"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <button className="bg-blue-500 text-white px-4">
                Search
              </button>
            </div>
            <div>Suggestion</div>
          </div>
        </div>
        <div className="w-2/3 bg-blue-300"></div>
      </div>
      <div className="flex justify-center">
        <Cards title="Total Jobs" value="100" icon={icon1} />
        <Cards title="Completed Projects" value="85" icon={icon2} />
        <Cards title="New Jobs" value="15" icon={icon4} />
        <Cards title="Reviews" value="250" icon={icon3} />
      </div>
    </div>
  );
};

export default Hero;
