import React from 'react';
import Iframe from 'react-iframe'

const RecentProjects = () => {


    const projectsdata = [
        {
            "name": "Trivago",
            "des": "A real estate website with property listings, profile management, and social media login ",
            "use": ["React", "React-router", "Firebase", "Aos", "tailwind css"],
            "live": "https://trivago-nu.vercel.app/",
            "code": "https://github.com/armangit1/hoteltrivago",
          
        },
            {
            "name": "Hockey's",
            "des": " This is a responsive front-end website for a professional hockey club  ",
            "use": ["Html","JavaSrcipt", "Tailwind css", "Daisyui"],
            "live": "https://hockey-s-rho.vercel.app/",
            "code": "https://github.com/armangit1/Hockey-s"
        },
     
        {
            "name": "Go Ticket",
            "des": "Go Ticket is a modern ticket booking website for bus transportation in Bangladesh.",
            "use": ["Html","JavaSrcipt", "Tailwind css", "Daisyui"],
            "live": "https://go-ticket.vercel.app/",
            "code": "https://github.com/armangit1/Go-Ticket"
        },
    

    ]


    return (
        <div id='project'>
            <h1 className='md:text-6xl text-3xl  text-[#A074F9] ml-5 mt-20'>Recent Projects</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3  gap-3 p-2  mt-5'>
                {
                    projectsdata.map((data, index) => {
                        return (
                            <div key={index} data-aos="fade-up" className='p-5 border border-[#364153] bg-[#080213] rounded-xl duration-400 hover:border-[#A074F9]'>
                                <Iframe url={data.live}
                                    width="100%"
                                    height="300px"
                                    className='rounded-xl'
                                    display="block"
                                    position="relative" />

                                    <h1 className='text-2xl font-bold m-2'>{data?.name}</h1>
                                    <p className='text-md text-[#bec1c5] '>{data?.des}</p>

                                    <div className='flex flex-wrap gap-2 mt-5'>
                                               {
                                        data.use.map((item,index)=>{
                                            return(
                                                <button className=' px-4 py-1 rounded-3xl bg-[#1E2939]' key={index}>
                                            { item
                                                }</button>
                                            )
                                        })
                                    }
                                    </div>

                                    <div className='flex space-x-3 mt-5 '>
                                         <a href={data?.live} target='_blank' className='px-4 py-1 rounded-3xl bg-[#5c23cea4] hover:bg-[#896cc4] '>Live</a>
                                         <a href={data?.code} target='_blank' className='px-4 py-1 rounded-3xl bg-[#743fdd36] hover:bg-[#743fdd79]'>Client Code</a>
                                         {
                                            data.server ?   <a href={data?.server} target='_blank' className='px-4 py-1 rounded-3xl bg-[#743fdd36]  hover:bg-[#743fdd79]'>Server Code</a> : ""
                                         }



                                    </div>

                                 

                            </div>

                        )
                    })
                }



            </div>




        </div>
    );
};

export default RecentProjects;