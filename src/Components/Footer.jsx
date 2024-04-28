import React from "react";
import logo from "../assets/Images/logo.png";
const Footer = () => {
  return (
    <>
      <section className=" px-24 pt-5">
        <div className=" flex flex-col gap-5 justify-center items-center">
          <p className=" font-sans text-base font-normal leading-[28px] tracking-[3.73px] text-center">
            UPSKILL FOR A BETTER FUTURE
          </p>
          <h1 className="font-sans text-[2.5rem] font-normal leading-[44px] text-center">
            Request More Information
          </h1>
          <p className=" font-sans text-base font-normal leading-[28px] text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <button className=" my-5 shadow-lg inline-flex items-center border-0 py-2 px-7 bg-[#2B54FF] text-white rounded-3xl">
            Contact Us
          </button>
          <p className="font-sans text-base font-normal leading-[28px] text-center">
            © 2023, LLC
          </p>
        </div>
        <hr />
        <footer className="text-gray-600  ">
          <div className="container px-5 py-8 mx-auto flex justify-between items-center ">
            <div>
              <a className="flex title-font font-bold text-[2rem] items-center md:justify-start justify-center text-[#2B54FF] mx-4">
                <p>SQL BOT</p>
              </a>
            </div>
            <div className=" flex gap-3  justify-end  ">
              <p>Team</p>
              <p>Case Study</p>
              <p>Publication</p>
            </div>
            <div className="flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <a className="text-gray-500">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
};

export default Footer;
