import React from 'react';
import { FaGraduationCap } from 'react-icons/fa6';
import { IoCodeSlash } from 'react-icons/io5';

const Education = () => {
    return (
        <div className='m-2'>
            <h1 className='md:text-6xl text-3xl  text-[#A074F9] ml-5 mt-16 flex '><FaGraduationCap className='mr-2'></FaGraduationCap>  My Education</h1>
            <div className=' mt-4 '>
                <div data-aos="zoom-in-right"  className='border-[#3c2d5c] border inline-block p-2 pb-10 pr-6  mt-3 rounded-2xl'>
                    <p className='text-xl  mt-2 ml-5 text-[#5a2bc0]'>2022 - Present</p>
                    
                    <h1 className='md:text-4xl text-2xl font-bold mt-2 ml-5'> Diploma In <br />Computer Science and Technology</h1>

                    <p className='text-[#ebe5f7]  md:text-lg mt-3 ml-5'>
                       Mymensingh Polytechnic Institute, Bangladesh
                    </p>
                </div>
            </div>


        </div>
    );
};

export default Education;