import React from 'react';
import { DiJavascript, DiMongodb } from 'react-icons/di';
import { FaCss3, FaGitAlt, FaHtml5, FaJava, FaLaravel } from 'react-icons/fa6';
import { GiTBrick } from 'react-icons/gi';
import { GrMysql } from 'react-icons/gr';
import { IoLogoNodejs } from 'react-icons/io';
import { IoLogoJavascript, IoLogoReact } from "react-icons/io5"
import { MdJavascript } from 'react-icons/md';
import { RiNextjsFill } from 'react-icons/ri';
import { SiExpress, SiPostman } from 'react-icons/si';


const Skills = () => {



  return (
    <div id='skills' className='mt-10' >
      <div data-aos="flip-left" className='mt-10 mx-2 flex flex-col'>
      <div className='inline-flex justify-center'> 
         <h1 className='md:text-5xl text-3xl text-center  bg-gradient-to-r    from-[#8A55F8] to-white text-transparent bg-clip-text mt-10'>My Skills</h1></div>
        <p className='text-[#ebe5f7] md:text-md text-center  mt-5'>I have a diverse skill set that includes web development, design, and API integration. <br /> Here are some of the key skills I bring to the table:</p>
      </div>

      <div className='grid lg:grid-cols-4 md:grid-cols-2 mt-5 p-2 gap-8 pb-10'>

        <div data-aos="zoom-in" className='border-[#2A1454] hover:bg-[#2A1454] group bg-[#140C1C] border hover:border-[#543a8b] flex justify-center items-center hover:shadow-sm hover:shadow-[#A074F9]  py-4 mt-3 rounded-2xl duration-300'>
          <div className='flex flex-col items-center justify-center'>

            <span className='text-6xl text-center'> <FaHtml5 className='group-hover:text-[#E4542C] text-gray-500' ></FaHtml5></span>
            <h1 className='text-xl text-[#543a8b] text-center group-hover:text-[#A074F9] my-auto'>HTML5</h1>
          </div>
        </div>

        <div data-aos="zoom-in" className='border-[#2A1454] hover:bg-[#2A1454] group bg-[#140C1C] border hover:border-[#543a8b] flex justify-center items-center hover:shadow-sm hover:shadow-[#A074F9]  py-4 mt-3 rounded-2xl duration-300'>
          <div className='flex flex-col items-center justify-center'>

            <span className='text-6xl text-center'> <FaCss3 className='group-hover:text-[#2c76e4] text-gray-500' /></span>
            <h1 className='text-xl text-[#543a8b] text-center group-hover:text-[#A074F9] my-auto'>CSS3</h1>
          </div>
        </div>

        <div data-aos="zoom-in" className='border-[#2A1454] hover:bg-[#2A1454] group bg-[#140C1C] border hover:border-[#543a8b] flex justify-center items-center hover:shadow-sm hover:shadow-[#A074F9]  py-4 mt-3 rounded-2xl duration-300'>
          <div className='flex flex-col items-center justify-center'>

            <span className='text-6xl text-center'> <IoLogoJavascript className='group-hover:text-[#F0B100] text-gray-500' /></span>
            <h1 className='text-xl text-[#543a8b] text-center group-hover:text-[#A074F9] my-auto'>JavaScript</h1>
          </div>
        </div>
        <div data-aos="zoom-in" className='border-[#2A1454] hover:bg-[#2A1454] group bg-[#140C1C] border hover:border-[#543a8b] flex justify-center items-center hover:shadow-sm hover:shadow-[#A074F9]  py-4 mt-3 rounded-2xl duration-300'>
          <div className='flex flex-col items-center justify-center'>

            <span className='text-6xl text-center'> <IoLogoReact className='group-hover:text-[#2B7FFF] text-gray-500' /></span>
            <h1 className='text-xl text-[#543a8b] text-center group-hover:text-[#A074F9] my-auto'>React Js</h1>
          </div>
        </div>
        <div data-aos="zoom-in" className='border-[#2A1454] hover:bg-[#2A1454] group bg-[#140C1C] border hover:border-[#543a8b] flex justify-center items-center hover:shadow-sm hover:shadow-[#A074F9]  py-4 mt-3 rounded-2xl duration-300'>
          <div className='flex flex-col items-center justify-center'>

            <span className='text-6xl text-center'> <IoLogoNodejs className='group-hover:text-[#00C850] text-gray-500' /></span>
            <h1 className='text-xl text-[#543a8b] text-center group-hover:text-[#A074F9] my-auto'>Node Js</h1>
          </div>
        </div>

        <div data-aos="zoom-in" className='border-[#2A1454] hover:bg-[#2A1454] group bg-[#140C1C] border hover:border-[#543a8b] flex justify-center items-center hover:shadow-sm hover:shadow-[#A074F9]  py-4 mt-3 rounded-2xl duration-300'>
          <div className='flex flex-col items-center justify-center'>

            <span className='text-6xl text-center'> <SiExpress className='group-hover:text-[#383838] text-gray-500' /></span>
            <h1 className='text-xl text-[#543a8b] text-center group-hover:text-[#A074F9] my-auto'>Express Js</h1>
          </div>
        </div>


        <div data-aos="zoom-in" className='border-[#2A1454] hover:bg-[#2A1454] group bg-[#140C1C] border hover:border-[#543a8b] flex justify-center items-center hover:shadow-sm hover:shadow-[#A074F9]  py-4 mt-3 rounded-2xl duration-300'>
          <div className='flex flex-col items-center justify-center'>

            <span className='text-6xl text-center'> <DiMongodb className='group-hover:text-[#00C850] text-gray-500' /></span>
            <h1 className='text-xl text-[#543a8b] text-center group-hover:text-[#A074F9] my-auto'>MongoDB</h1>
          </div>
        </div>
        <div data-aos="zoom-in" className='border-[#2A1454] hover:bg-[#2A1454] group bg-[#140C1C] border hover:border-[#543a8b] flex justify-center items-center hover:shadow-sm hover:shadow-[#A074F9]  py-4 mt-3 rounded-2xl duration-300'>
          <div className='flex flex-col items-center justify-center'>

            <span className='text-6xl text-center'> <RiNextjsFill className='group-hover:text-[#000] text-gray-500' /></span>
            <h1 className='text-xl text-[#543a8b] text-center group-hover:text-[#A074F9] my-auto'>Next Js</h1>
          </div>
        </div>
        <div data-aos="zoom-in" className='border-[#2A1454] hover:bg-[#2A1454] group bg-[#140C1C] border hover:border-[#543a8b] flex justify-center items-center hover:shadow-sm hover:shadow-[#A074F9]  py-4 mt-3 rounded-2xl duration-300'>
          <div className='flex flex-col items-center justify-center'>

            <span className='text-6xl text-center'> <FaLaravel className='group-hover:text-[#F53509] text-gray-500' /></span>
            <h1 className='text-xl text-[#543a8b] text-center group-hover:text-[#A074F9] my-auto'>Laravel</h1>
          </div>
        </div>
        <div data-aos="zoom-in" className='border-[#2A1454] hover:bg-[#2A1454] group bg-[#140C1C] border hover:border-[#543a8b] flex justify-center items-center hover:shadow-sm hover:shadow-[#A074F9]  py-4 mt-3 rounded-2xl duration-300'>
          <div className='flex flex-col items-center justify-center'>

            <span className='text-6xl text-center'> <GrMysql className='group-hover:text-[#3E6E93] text-gray-500' /></span>
            <h1 className='text-xl text-[#543a8b] text-center group-hover:text-[#A074F9] my-auto'>MySql</h1>
          </div>
        </div>
        <div data-aos="zoom-in" className='border-[#2A1454] hover:bg-[#2A1454] group bg-[#140C1C] border hover:border-[#543a8b] flex justify-center items-center hover:shadow-sm hover:shadow-[#A074F9]  py-4 mt-3 rounded-2xl duration-300'>
          <div className='flex flex-col items-center justify-center'>

            <span className='text-6xl text-center'> <FaGitAlt className='group-hover:text-[#F53509] text-gray-500' /></span>
            <h1 className='text-xl text-[#543a8b] text-center group-hover:text-[#A074F9] my-auto'>Git</h1>
          </div>
        </div>
        <div data-aos="zoom-in" className='border-[#2A1454] hover:bg-[#2A1454] group bg-[#140C1C] border hover:border-[#543a8b] flex justify-center items-center hover:shadow-sm hover:shadow-[#A074F9]  py-4 mt-3 rounded-2xl duration-300'>
          <div className='flex flex-col items-center justify-center'>

            <span className='text-6xl text-center'> <SiPostman className='group-hover:text-[#f5d209] text-gray-500' /></span>
            <h1 className='text-xl text-[#543a8b] text-center group-hover:text-[#A074F9] my-auto'>PostMan</h1>
          </div>
        </div>











      </div>

    </div>
  );
};

export default Skills;

