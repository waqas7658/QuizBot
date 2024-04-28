import React from "react";
import arrow from "../assets/Images/arrow.png";
const JoinCommunity = () => {
  return (
    <>
      <section className=" container py-5">
        <div className=" lg:grid grid-cols-2">
          <div className=" p-5 flex justify-center">
            <img src={arrow} alt="arrow" width={400} height={400} />
          </div>
          <div>
            <div className="flex flex-col   justify-end items-end mt-16  px-10">
              <div>
                <p className="font-medium lg:text-[60px] leading-6 volkhov-regular text-right">
                  Join Our
                </p>
                <p className="font-medium lg:text-[60px] text-[#2B54FF] volkhov-regular text-right">
                  Community
                </p>
              </div>
              <p className="font-[400] lg:text-[20px]   leading-5 text-right">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                lacus leo, feugiat id faucibus in, rhoncus eu nisi. Nunc
                tincidunt dignissim urna eu iaculis. Suspendisse nulla tortor,
                volutpat nondictum vel, imperdiet at nulla. Pellentesque
                lobortis quam lorem, pretiumull amcorper lectus
              </p>
              <div className=" my-5">
                <button className="inline-flex items-center border-0 py-2 px-7 text-white bg-[#2B54FF] rounded-3xl">
                  Join Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default JoinCommunity;
