import React from 'react';
import left from "../assets/Images/left.png";
import right from "../assets/Images/right.png";
import apple from "../assets/Images/apple.jpg";
import splash from "../assets/Images/splash.jpg";

const HelpYou = () => {

    const CardData = [
        {
            image: apple,
            title: "Access Premium Courses",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacus leo, feugiat id faucibus in, rhoncus eu nisi. Nunc tincidunt dignissim urna eu iaculis. Suspendisse nulla tortor, volutpat nondictum vel, imperdiet at nulla. Pellentesque lobortis quam lorem, pretiumull amcorper lectus "
        },
        {
            image: splash,
            title: "Prep with a Coach!",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacus leo, feugiat id faucibus in, rhoncus eu nisi. Nunc tincidunt dignissim urna eu iaculis. Suspendisse nulla tortor, volutpat nondictum vel, imperdiet at nulla. Pellentesque lobortis quam lorem, pretiumull amcorper lectus "
        },
        {
            image: apple,
            title: "Access Premium Courses",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacus leo, feugiat id faucibus in, rhoncus eu nisi. Nunc tincidunt dignissim urna eu iaculis. Suspendisse nulla tortor, volutpat nondictum vel, imperdiet at nulla. Pellentesque lobortis quam lorem, pretiumull amcorper lectus "
        },
        {
            image: splash,
            title: "Prep with a Coach!",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacus leo, feugiat id faucibus in, rhoncus eu nisi. Nunc tincidunt dignissim urna eu iaculis. Suspendisse nulla tortor, volutpat nondictum vel, imperdiet at nulla. Pellentesque lobortis quam lorem, pretiumull amcorper lectus "
        },
    ];

    return (
        <section className='relative'>
            <div className='absolute left-0 hidden lg:block'>
                <img src={left} alt="left" height={300} width={250} />
            </div>

            <div className='py-10 px-5 lg:px-0 lg:mx-64'>
                <div className='flex flex-col justify-center items-center p-2 lg:p-0'>
                    <p className='volkhov-regular text-[2.2rem] text-black'>How we can <span className='text-[#2B54FF]'>help you! </span></p>
                    <p className='font-thin text-[1.2rem] text-black text-center max-w-[840px]'>The web leverages AI-powered natural language processing to generate a wide range of SQL questions that cover different aspects of SQL, including basic queries, filtering, sorting, joins, subqueries, aggregate functions, and more.</p>
                </div>
                <div className='my-5'>
                    {CardData.map((item, index) => (
                        <div className='lg:grid grid-cols-2 my-5' key={index}>
                            <div className={`px-5 lg:px-10 order-${index % 2 === 0 ? '1' : '2'}`}>
                                <img src={item.image} alt={item.title} className='rounded-lg shadow-lg h-[228px] w-full lg:w-[372px] object-cover my-3' />
                            </div>
                            <div className={`px-5 lg:px-10 flex flex-col justify-center order-${index % 2 === 0 ? '2' : '1'}`}>
                                <p className='volkhov-regular text-[1.5rem] text-black lg:leading-4'>{item.title}</p>
                                <p className='text-justify'>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='absolute top-0 right-0 hidden lg:block'>
                <img src={right} alt="right" height={300} width={250} />
            </div>
        </section>
    );
}

export default HelpYou;
