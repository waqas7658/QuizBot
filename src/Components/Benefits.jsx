import React from 'react';
import clock from "../assets/Images/clock.png";
import dollor from "../assets/Images/dollor.png";
import growth from "../assets/Images/growth.png";
import Subtract2 from "../assets/Images/Subtract2.png"
import Group from "../assets/Images/Group.png"

const Benefits = () => {
    const CardData = [
        {
            image: clock,
            title: "Stop Wasting Hours Googling Around",
            description: "With this service, you can generate SQL queries in seconds. This is a game-changer for those who are constantly working with large databases and need quick results."
        },
        {
            image: dollor,
            title: "Cost-Effective and Highly Productive",
            description: "The service is incredibly affordable. It's a small investment that can save you countless hours of work, making it a cost-effective solution for any data analyst."
        },
        {
            image: growth,
            title: "Suitable for All Levels",
            description: "Whether you're a beginner or an experienced data analyst, this service can boost your SQL productivity and proficiency. It's designed to be user-friendly and accessible to all levels of experience."
        },
    ];

    return (
        <section className='bg-[#2B54FF] lg:px-24 py-16 mt-10 relative'>
            <div>
                <img src={Subtract2} alt="Subtract2" className=' absolute h-80 right-0 -top-20' />
            </div>
            <div className=' p-2 lg:p-0'>
                <p className='volkhov-regular text-[2.2rem] text-white'>Benefits of Using SQL Quiz Bot!</p>
                <p className='font-thin text-[1.2rem] text-white'>Discover the advantages of integrating AI into your SQL and NoSQL operations.</p>
            </div>
            <div className="lg:grid grid-cols-3 gap-8 mt-8">
                {CardData.map((card, index) => (
                    <div key={index} className=" p-6 ">
                        < img src={card.image} alt={card.title} className="w-20 " />
                        <h3 className="text-lg font-semibold mt-4 text-white">{card.title}</h3>
                        <p className="text-white mt-2">{card.description}</p>
                    </div>
                ))}
            </div>
            <div>
                <img src={Group} alt="Group" className=' absolute h-80 left-0  -bottom-36' />
            </div>
        </section >
    );
};

export default Benefits;
