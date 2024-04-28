import React from "react";
import hero1 from "../assets/Images/hero1.png";
import frame from "../assets/Images/Frame.png";
import google from "../assets/Images/google2.png";
import amazon from "../assets/Images/amazon.png";
import lyft from "../assets/Images/lyft.png";
import meta from "../assets/Images/meta.png";
import apple from "../assets/Images/apple.png";
import microsoft from "../assets/Images/microsoft.png";

const HeroSection = () => {
  return (
    <>
      {/* <div className='lg:h-[70px] h-10'>
                <img src={hero1} alt="" className='  opacity-65' />
            </div> */}
      <section className=" lg:px-24 t-10  hero-section">
        <div className="lg:grid grid-cols-2">
          <div className="col-span-1">
            <div className="flex flex-col   justify-center mt-16  px-10">
              <div>
                <p className="font-[400] lg:text-[70px] leading-6 volkhov-regular">
                  Learn With
                </p>
                <p className="font-[400] lg:text-[70px] text-[#2B54FF] volkhov-regular">
                  SQL QuizBot
                </p>
              </div>
              <p className="font-[400] lg:text-[20px]   leading-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                lacus leo, feugiat id faucibus in, rhoncus eu nisi. Nunc
                tincidunt dignissim urna eu iaculis. Suspendisse nulla tortor,
                volutpat nondictum vel, imperdiet at nulla. Pellentesque
                lobortis quam lorem, pretiumull amcorper lectus
              </p>
              <div className=" my-5">
                <button className="inline-flex items-center border-2 border-[#2B54FF] text-[#2B54FF] py-[0.35rem] px-7 rounded-3xl mr-3 mb-2">
                  Join Prep Community
                </button>
                <button className="inline-flex items-center border-0 py-2 px-7 text-white bg-[#2B54FF] rounded-3xl">
                  SQL Pads
                </button>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="flex items-center justify-center p-5">
              <img src={frame} alt="hero frame" width={500} />
            </div>
          </div>
        </div>
        <div className=" flex  flex-col  justify-center items-center p-2 lg:p-0">
          <p className=" text-[1.2rem] font-medium">
            {" "}
            Trusted by talents with{" "}
            <span className=" text-[#2B54FF]">
              $240K+ compensation offers
            </span>{" "}
            at
          </p>
          <div className=" flex flex-wrap ">
            <img src={google} alt="google" />
            <img src={amazon} alt="amazon" />
            <img src={lyft} alt="lyft" />
            <img src={meta} alt="meta" />
            <img src={apple} alt="apple" />
            <img src={microsoft} alt="microsoft" />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
