import React from 'react';
import { MdOutlineFileDownload } from 'react-icons/md';

const Footer = () => {
    return (
        <div className='bg-[#2A1454] flex justify-center items-center p-10 mt-24'>
            <div>
            <div className='flex justify-center'>
                    <img src="/logo.jpg" className='w-16 rounded-full' alt="" />
            </div>
                <div className=" flex justify-evenly space-x-2 xl:space-x-8 mt-5">
                    <a href="#service" className="">Service</a>
                    <a href="#project" className="">Projects</a>
                    <a href="#skills" className="">Skills</a>
                    <a href="#contact" className="">Contact</a>
                    <a href="#blogs" className=" ">Blogs</a>
                 
                </div>
                <div>
                    <h3 className='text-center mt-6 text-[#7E45D8]'>© 2025 All Rights Reserved by Arman</h3>
                </div>
            </div>





        </div>
    );
};

export default Footer;