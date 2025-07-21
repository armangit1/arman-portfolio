import React from 'react';
import jobportal from '../../src/assets/jobportal.png'
import trivago from '../../src/assets/trivago.png'
import gotravel from '../../src/assets/gotravel.png'


const ProjectCard = () => {
  return (
    <div id='project' className='m-2 mt-16'>
      <h1 className='md:text-5xl text-3xl inline bg-gradient-to-r from-[#8A55F8] to-white text-transparent bg-clip-text mt-10'>Recent Projects</h1>

{/* frist project */}
      <div className=" p-3 md:p-7 rounded-2xl mt-10 bg-[#140C1C] border border-[#2A1454]  text-white flex flex-col lg:flex-row gap-10 items-start">
        {/* Left content */}
        <div className="flex-1 space-y-4">
          <p className="text-purple-400 text-sm">Social App</p>
          <h2 className="text-3xl font-bold">Job Portal</h2>
          <p className="text-gray-300">
            This Job Portal is a full-stack web application designed to streamline the job search and recruitment process.
            It allows users to browse job listings, apply for jobs, and track their applications, while employers can post new openings and manage candidates.
            Built with modern technologies, the platform ensures a seamless user experience, secure authentication, and real-time data interactions.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mt-4">
            <span className="bg-[#1E2939] text-sm px-4 py-1 rounded-full">React</span>
            <span className="bg-[#1E2939] text-sm px-4 py-1 rounded-full">Express</span>
            <span className="bg-[#1E2939] text-sm px-4 py-1 rounded-full">MongoDB</span>
            <span className="bg-[#1E2939] text-sm px-4 py-1 rounded-full">Firebase</span>
            <span className="bg-[#1E2939] text-sm px-4 py-1 rounded-full">Tailwindcss</span>
          </div>


          {/* Testimonial */}
          <div className="mt-4">

            <div className="flex flex-wrap gap-3 mt">
              <a href='https://jobportal-bangladesh.vercel.app/' target='_blank' className="bg-[#4c18b3a4] hover:bg-[#896cc4] text-md px-4 py-1 rounded-full">Live</a>
              <a href='https://github.com/armaneffect/job-portal' target='_blank' className="bg-[#1f427580] hover:bg-[#896cc4] text-md px-4 py-1 rounded-full">Client</a>
              <a href='https://github.com/armaneffect/job-portal-server' target='_blank' className="bg-[#1f427580] hover:bg-[#896cc4] text-md px-4 py-1 rounded-full">Server</a>


            </div>

            <div className="flex items-center gap-3 mt-5">
              <img
                src="https://lh3.googleusercontent.com/a/ACg8ocKNy3UnS1APX_IxmcRAmBdE_DcB4alWaeQ2id4bgu7KGgcTnUXJ=s260-c-no"
                alt="Jeremy Douglas"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="text-sm font-semibold text-purple-400">Arman Khan</p>
                <p className="text-xs text-gray-400">Web Developer</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right content (image) */}
        <div className="flex-1 w-full ">
          <img
            src={jobportal} // Replace with actual image path
            alt="Project Preview"
            className="rounded-xl border border-gray-700 shadow-lg"
          />
        </div>
      </div>


      {/* ========================================================== */}

      <div className='grid grid-cols-1 md:grid-cols-2 gap-2  space-x-1  '>

        <div className=" p-3 md:p-7 rounded-2xl mt-8 bg-[#140C1C] border border-[#2A1454]  text-white flex flex-col  gap-10 items-start">

          <div className="flex-1 w-full ">
            <img
              src={trivago} // Replace with actual image path
              alt="Project Preview"
              className="rounded-xl border border-gray-700 shadow-lg"
            />
          </div>
          {/* Left content */}
          <div className="flex-1 space-y-4">
            <p className="text-purple-400 text-sm">Hotel App</p>
            <h2 className="text-3xl font-bold">Trivago</h2>
            <p className="text-gray-300">
              A real estate website with property listings, profile management, and social media login
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 mt-4">
              <span className="bg-[#1E2939] text-sm px-4 py-1 rounded-full">React</span>
              <span className="bg-[#1E2939] text-sm px-4 py-1 rounded-full">React-Router</span>
              <span className="bg-[#1E2939] text-sm px-4 py-1 rounded-full">Aos</span>
              <span className="bg-[#1E2939] text-sm px-4 py-1 rounded-full">Firebase</span>
              <span className="bg-[#1E2939] text-sm px-4 py-1 rounded-full">Tailwindcss</span>
            </div>


            {/* Testimonial */}
            <div className="mt-4">

              <div className="flex flex-wrap gap-3 mt">
                <a href='https://trivago-nu.vercel.app' target='_blank' className="bg-[#4c18b3a4] hover:bg-[#896cc4] text-md px-4 py-1 rounded-full">Live</a>
                <a href='https://github.com/armangit1/hoteltrivago' target='_blank' className="bg-[#1f427580] hover:bg-[#896cc4] text-md px-4 py-1 rounded-full">Client</a>
              


              </div>

          
            </div>
          </div>

          {/* Right content (image) */}

        </div>


        {/* ============================================== */}
        <div className=" p-3 md:p-7 rounded-2xl mt-8 bg-[#140C1C] border border-[#2A1454]  text-white flex flex-col  gap-10 items-start">

          <div className="flex-1 w-full ">
            <img
              src={gotravel} // Replace with actual image path
              alt="Project Preview"
              className="rounded-xl border border-gray-700 shadow-lg"
            />
          </div>
          {/* Left content */}
          <div className="flex-1 space-y-4">
            <p className="text-purple-400 text-sm">Travel App</p>
            <h2 className="text-3xl font-bold">Go Travel</h2>
            <p className="text-gray-300">
            This is a responsive front-end website for a Travel agency.
      
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 mt-4">
               <span className="bg-[#1E2939] text-sm px-4 py-1 rounded-full">React</span>      
              <span className="bg-[#1E2939] text-sm px-4 py-1 rounded-full">Daisyui</span>
              <span className="bg-[#1E2939] text-sm px-4 py-1 rounded-full">Tailwindcss</span>
            </div>


            {/* Testimonial */}
            <div className="mt-4">

              <div className="flex flex-wrap gap-3 mt">
                <a href='https://gotravel2.vercel.app' target='_blank' className="bg-[#4c18b3a4] hover:bg-[#896cc4] text-md px-4 py-1 rounded-full">Live</a>
                <a href='https://github.com/armangit1/gotravel2' target='_blank'  className="bg-[#1f427580] hover:bg-[#896cc4] text-md px-4 py-1 rounded-full">Client</a>
          


              </div>

          
            </div>
          </div>

          {/* Right content (image) */}

        </div>







      </div>


    </div>
  );
};

export default ProjectCard;
