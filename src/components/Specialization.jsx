import React from 'react';
import { AiFillDatabase } from 'react-icons/ai';
import { Fa42Group } from 'react-icons/fa6';
import { IoCodeSlash } from 'react-icons/io5';
import { MdOutlineDesignServices } from 'react-icons/md';
import { TbApi } from 'react-icons/tb';




const Specialization = () => {


    return (
        <div id='service' className='mt-16 '>
      <h1 className='md:text-5xl text-3xl inline bg-gradient-to-r from-[#8A55F8] to-white text-transparent bg-clip-text mt-12 ml-2'>My Specialization</h1>


            <div className='grid md:grid-cols-2 p-5  gap-8  pb-10 '>

                <div data-aos="zoom-in-right"  className='border-[#2A1454] border group  hover:border-[#A074F9] bg-[#140c1ca8] hover:bg-[#140C1C]  hover:shadow-sm duration-300  pb-10  mt-3 rounded-2xl'>
                    <div className='w-full bg-[#2A1454] rounded-t-2xl p-5 flex items-center justify-between'>
                        <div className='bg-[#5631A0] p-5 rounded-xl group-hover:rotate-12'>
                            <IoCodeSlash className='text-3xl '  />
                        </div>
                    </div>
                    <h1 className='text-3xl font-semibold mt-5 ml-5'>Full Stack Website Development</h1>

                    <p className='text-[#ebe5f7] md:text-md mt-5 ml-5 pr-1'>
                     Skilled in building dynamic and scalable web applications using Laravel, React, and Next.js, with MySQL as the database and expertise in designing and integrating RESTful APIs, focusing on performance, SEO, and mobile responsiveness.
                    </p>
                </div>

                <div data-aos="zoom-in-left" className='border-[#2A1454] group border hover:border-[#A074F9] bg-[#140c1ca8]  hover:bg-[#140C1C] hover:shadow-sm duration-300  pb-10  mt-3 rounded-2xl'>
                    <div className='w-full bg-[#2A1454] rounded-t-2xl p-5 flex items-center justify-between'>
                        <div className='bg-[#5631A0] p-5 group-hover:rotate-12 rounded-xl'>
                            <MdOutlineDesignServices className='text-3xl' />
                        </div>
                    </div>
                    <h1 className='text-3xl font-semibold m-5 '>Website Design</h1>

                    <p className='text-[#ebe5f7] md:text-md m-5 '>
                      Crafting responsive and visually engaging websites using Figma and Framer, tailored to unique client needs and brand identity
                    </p>
                </div>
                <div data-aos="zoom-in-right" className='border-[#2A1454] border group hover:border-[#A074F9] bg-[#140c1ca8] hover:bg-[#140C1C]  hover:shadow-sm duration-300  pb-10  mt-3 rounded-2xl'>
                    <div className='w-full bg-[#2A1454] rounded-t-2xl p-5 flex items-center justify-between'>
                        <div className='bg-[#5631A0] p-5 group-hover:rotate-12 rounded-xl'>
                            <AiFillDatabase className='text-3xl' />
                        </div>
                    </div>
                    <h1 className='text-3xl font-semibold m-5 '> Backend & Database </h1>

                    <p className='text-[#ebe5f7] md:text-md m-5 '>
                      Building robust backends using Laravel (PHP) and managing relational databases like MySQL. Experienced in developing RESTful APIs, admin panels, and ensuring data security and performance.
                    </p>
                </div>
                <div data-aos="zoom-in-left" className='border-[#2A1454] border group hover:border-[#A074F9] bg-[#140c1ca8]  hover:bg-[#140C1C] hover:shadow-sm duration-300  pb-10  mt-3 rounded-2xl'>
                    <div className='w-full bg-[#2A1454] rounded-t-2xl p-5 flex items-center justify-between'>
                        <div className='bg-[#5631A0] p-5 group-hover:rotate-12 rounded-xl'>
                            <TbApi className='text-3xl' />
                        </div>
                    </div>
                    <h1 className='text-3xl font-semibold m-5 '>API Integration</h1>

                    <p className='text-[#ebe5f7] md:text-md m-5 '>
                        Creating powerful admin panels for product, user, and order management using React.js, Laravel, and tools like react-hook-form and JoditEditor. Designed for ease of use and efficient backend control.
                    </p>
                </div>
             
             
            </div>
 
        </div>
    );
};

export default Specialization;