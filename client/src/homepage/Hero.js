import React from "react";
import Cards from "./Cards";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";
import asset1 from "../assets/asset1.png";
import asset2 from "../assets/asset2.png";
const Hero = () => {
  return (
    <div className="relative m-10">
      <img
        src={asset1}
        alt="asset1"
        className="absolute top-[49%] left-[6%] w-[300px] -translate-x-1/2 -translate-y-1/2"
      />
      <img
        src={asset2}
        alt="asset2"
        className="absolute top-[49%] left-[97%] w-[300px] -translate-x-1/2 -translate-y-1/2"
      />
      <div className="bg-[#eff0dd] py-20 rounded-3xl flex overflow-hidden">
        <div className="w-4/5 text-center flex flex-col justify-center mx-auto">
          <p className="font-open-sauce-alt font-bold text-6xl pb-5 mx-auto">
            The Future of Freelancing Transparent, Secure, and Fair.
          </p>
          <div className="w-4/5 mx-auto">
            <p className="font-open-sauce-alt text-md">
              A blockchain-powered freelancing platform ensuring fair opportunities, secure payments, and transparent reviews, automates contracts and reputation management to maximize success.
            </p>
            <div className="w-3/6 mx-auto flex pt-[2rem]">
              <input
                type="text"
                placeholder=""
                className="w-full p-2 border border-gray-300"
              />
              <button className="bg-black text-white px-5">Search</button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-around mt-5">
        <Cards icon={icon1} title="Secure Payments" text="Secure payments" />
        <Cards icon={icon2} title="Secure Payments" text="Secure payments" />
        <Cards icon={icon3} title="Secure Payments" text="Secure payments" />
        <Cards icon={icon4} title="Secure Payments" text="Secure payments" />
      </div>
      
    </div>
  );
};

export default Hero;
