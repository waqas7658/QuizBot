import React from "react";
import SQL from "../assets/Images/SQL.png";
import python from "../assets/Images/python.png";
import Group2 from "../assets/Images/Group2.png";
import Group3 from "../assets/Images/Group3.png";

const GetStarted = () => {
  return (
    <section className="bg-[#2B54FF] lg:px-24 py-16 my-10 relative">
      <div>
        <img
          src={Group3}
          alt="Group3"
          className="absolute  h-72 top-0 right-0 "
        />
      </div>
      <div className="flex flex-col justify-center items-center p-2 lg:p-0">
        <p className=" font-sans font-base volkhov-regular text-[2.2rem] text-white">
          Get Started Today
        </p>
        <p className="font-thin text-[1.2rem] text-white text-center lg:w-[840px]">
          Don't leave success up to chance.
        </p>
      </div>

      <div className=" flex justify-center items-center mt-10">
        <button className="inline-flex items-center border-2 border-white text-white py-[0.35rem] px-7 rounded-3xl mr-3">
          Get Started
        </button>
      </div>
      <div>
        <img src={Group2} alt="Group2" className="absolute h-72 left-0 top-0" />
      </div>
    </section>
  );
};

export default GetStarted;
