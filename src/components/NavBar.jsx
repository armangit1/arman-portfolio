import React, { useEffect } from 'react';
import { useState } from "react";
import { MdOutlineFileDownload, MdMenu, MdClose } from "react-icons/md";
const NavBar = () => {

    const [scrollDirection, setScrollDirection] = useState(null);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY) {
                setScrollDirection("down");
            } else if (currentScrollY < lastScrollY) {
                setScrollDirection("up");
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    console.log(scrollDirection)


    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div className={`w-full max-w-[1300px] z-20   ${lastScrollY >= 100 ? 'bg-[#0d0513]' : ' bg-[#0F0715]'}  fixed to-0%  ${scrollDirection === "down" ? 'hidden' : "block"}`} >
            <nav className="flex items-center justify-between  w-full p-4  text-white">
                <div className="flex items-center"> <a href="/"> <img src="/logo.jpg" className='rounded-full  md:w-16 w-14' alt="" /></a> <a href='mailto:aharmankhan333@gmail.com' className=' hidden lg:block ml-3'>aharmankhan333@gmail.com</a> </div>
                <div className="hidden md:flex justify-evenly space-x-2 xl:space-x-8">
                    <a href="#service" className="">Service</a>
                    <a href="#project" className="">Projects</a>
                    <a href="#skills" className="">Skills</a>
                    <a href="#contact" className="">Contact</a>
                    <a href="#blogs" className=" ">Blogs</a>
                    <a href="/resume.pdf" >
                        <span className="flex items-center  px-5 py-2 rounded-4xl bg-[#8750F7] text-white  hover:bg-transparent border border-[#8750F7] duration-300">

                            Resume
                            <MdOutlineFileDownload className='ml-2' />
                        </span>
                    </a>
                </div>

                <div className="md:hidden flex items-center">

                    <a href="/resume.pdf" >
                        <span className="flex items-center  px-5 py-2 rounded-4xl bg-[#8750F7] text-white  hover:bg-transparent border border-[#8750F7] duration-300">

                            Resume
                            <MdOutlineFileDownload className='ml-2' />
                        </span>
                    </a>

                    <button onClick={() => setMenuOpen(!menuOpen)} >
                        {menuOpen ? <MdClose className='text-4xl' /> : <MdMenu className='text-4xl' />}
                    </button>
                </div>
            </nav>

            {menuOpen && (
                <div className="md:hidden bg-[#0F0715]   text-white p-4 space-y-2">
                    <ul className="md:hidden bg-[#0F0715] text-white p-4 space-y-2">
                        <li>
                            <a href="#service" onClick={() => setMenuOpen(false)}>Service</a>
                        </li>
                        <li>
                            <a href="#project" onClick={() => setMenuOpen(false)}>Prjects</a>
                        </li>
                        <li>
                            <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
                        </li>
                        <li>
                            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
                        </li>
                        <li>
                            <a href="#blogs" onClick={() => setMenuOpen(false)}>Blogs</a>
                        </li>

                    </ul>
                </div>
            )}

        </div>
    );
};

export default NavBar;