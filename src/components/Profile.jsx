import React from 'react';
import { BsGit, BsGithub } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { MdOutlineArrowOutward } from "react-icons/md";
import { TiSocialLinkedin } from 'react-icons/ti';

const Profile = () => {


    

    return (
        <div className='mx-2 pt-30'>
            <div className='md:flex p-5 border rounded-2xl group border-[#2A1454]  pb-10 '>
                <div>
                    <img src="/profile2.jpg" className='w-[325px] mx-auto rounded-2xl  group-hover:border group-hover:border-[#8750F7] hover:shadow-sm group-hover:shadow-[#8750F7]'
                        alt="" />

                </div>
                <div>
                    <h1 className='lg:text-6xl md:text-5xl text-3xl font-semibold bg-gradient-to-r  from-[#8A55F8] to-white text-transparent bg-clip-text  ml-10 mt-10'>
                        Hi, I am Web <br />
                        Developer + Designer
                    </h1>
                    <p className='text-[#ebe5f7] md:text-xl mt-5 ml-10'>
                        I design and code beautifully simple things and i love <br /> what i do. Just simple like that!

                    </p>
                    <div className='sm:flex mt-5 items-center'>
                        <a href="https://drive.google.com/file/d/1GZEFTGCbzBs08eUBSKJHiuc8JSoAdmUa/view?usp=sharing"  className='inline-flex items-center px-6 py-3 rounded-4xl border duration-300 border-[#8750F7] hover:bg-transparent bg-[#8750F7]  hover:text-gray-300 ml-10 mt-5'>
                            Hire Me!
                            <MdOutlineArrowOutward className='ml-2 text-xl' />
                        </a>

                        <div className='flex gap-5 ml-10 mt-5'>
                            <a
                                href="https://www.facebook.com/armaneffect"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub Profile"
                                className="w-10 h-10 flex items-center justify-center rounded-full border border-[#8750F7] bg-transparent text-[#A074F9] hover:bg-[#8750F7] hover:text-white transition-colors duration-300"
                            >
                                <FaFacebookF className="text-xl" />
                            </a>
                            <a
                                href="https://github.com/armaneffect"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub Profile"
                                className="w-10 h-10 flex items-center justify-center rounded-full border border-[#8750F7] bg-transparent text-[#A074F9] hover:bg-[#8750F7] hover:text-white transition-colors duration-300"
                            >
                                <BsGithub className="text-xl" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/armaneffect"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub Profile"
                                className="w-10 h-10 flex items-center justify-center rounded-full border border-[#8750F7] bg-transparent text-[#A074F9] hover:bg-[#8750F7] hover:text-white transition-colors duration-300"
                            >
                                <TiSocialLinkedin className="text-xl" />
                            </a>



                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Profile;