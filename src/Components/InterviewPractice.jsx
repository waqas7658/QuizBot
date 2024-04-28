import React from 'react';
import SQL from "../assets/Images/SQL.png";
import python from "../assets/Images/python.png";
import Subtract2 from "../assets/Images/Subtract2.png";
import Group from "../assets/Images/Group.png";

const InterviewPractice = () => {
    return (
        <section className='bg-[#2B54FF] lg:px-24 py-16 my-10 relative'>
            <div>
                <img src={Subtract2} alt="Subtract2" className='absolute h-80 right-0 -top-20' />
            </div>
            <div className='flex flex-col justify-center items-center p-2 lg:p-0'>
                <p className='volkhov-regular text-[2.2rem] text-white'>Practice SQL and Python coding for Interviews</p>
                <p className='font-thin text-[1.2rem] text-white text-center lg:w-[840px]'>The web leverages AI-powered natural languages processing to generate a wide range of SQL questions that cover different aspects of SQL, including basic queries, filtering, sorting, joins, subqueries, aggregate functions, and more.</p>
            </div>
            <div className="flex justify-center gap-8 mt-8 mx-3">
                <div className="flex justify-center items-center  ">
                    <div className='border-2 border-white p-7'>

                        <img src={SQL} alt="SQL" className='' />
                    </div>
                </div>
                <div className="flex justify-center items-center ">
                    <div className='border-2 border-white p-9'>
                        <img src={python} alt="python" className=' ' />
                    </div>

                </div>
            </div>
            <div className=' flex justify-center items-center mt-10'>
                <button

                    className="inline-flex items-center border-2 border-white text-white py-[0.35rem] px-7 rounded-3xl mr-3"
                >
                    Get Started
                </button>
            </div>
            <div>
                <img src={Group} alt="Group" className='absolute h-80 left-0 -bottom-36' />
            </div>
        </section>
    );
};

export default InterviewPractice;
