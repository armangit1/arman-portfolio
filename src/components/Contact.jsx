import React from 'react';
import { MdOutlineArrowOutward } from 'react-icons/md';
import { BsGithub } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

import { TiSocialLinkedin } from 'react-icons/ti';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';


const Contact = () => {
 // অথবা 'emailjs/browser'

const sentMessage = (e) => {
  e.preventDefault();

  emailjs.sendForm(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    e.target,
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  )
  .then((result) => {
    console.log(result.text);
    toast.success("✅ Message Sent Successfully");
    e.target.reset();
  }, (error) => {
    console.log(error.text);
    toast.error("❌ Failed to send message");
  });



};



    return (
        <div id='contact' className='mt-20 m-2'>
            <div className='md:grid md:grid-cols-2  p-16 border rounded-2xl group border-[#3c2d5c] pb-8 '>
                <div>
                    <h1 data-aos="fade-up" className='md:text-5xl text-3xl bg-gradient-to-r  from-[#8A55F8] to-white text-transparent bg-clip-text '>
                        Let’s work
                    </h1>
                    <h1 data-aos="fade-up" className='md:text-5xl text-3xl bg-gradient-to-r from-[#8A55F8] to-white text-transparent bg-clip-text '>
                        together
                    </h1>

                    <p data-aos="fade-up" className='md:text-xl mt-5'>I design and code beautifully simple things and i love what i do. Just <br /> simple like that!</p>

                    <div onSubmit={sentMessage} className='mt-8'>
                        <form data-aos="fade-up" action="">
                            <input type="text" name='name' className=' border-b border-[#636363] focus:border-[#8A55F8] w-full p-2 outline-0 mt-8' placeholder='First Name' />
                            <input type="text" name='lastname' className=' border-b border-[#636363] focus:border-[#8A55F8] w-full p-2 outline-0 mt-8' placeholder='Last Name' />
                            <input type="email" name='email' className=' border-b border-[#636363] focus:border-[#8A55F8] w-full p-2 outline-0 mt-8' placeholder='Email address' />
                            <input type="number" name='phone' className=' border-b border-[#636363] focus:border-[#8A55F8] w-full p-2 outline-0 mt-8' placeholder='Phone Number' />
                            <textarea name="message" className='    w-full p-2 outline-0 mt-10' placeholder='Message' id="" ></textarea>

                            <button type='submit' className='inline-flex items-center md:px-6 md:py-3 px-3 py-2 rounded-4xl border duration-300 border-[#8750F7] hover:bg-transparent bg-[#8750F7]  hover:text-gray-300  mt-10'>
                                Sent Message
                                <MdOutlineArrowOutward className='ml-1 text-xl' />
                            </button>
                        </form>
                    </div>

                </div>
                <div >
                    <div className='flex justify-center items-center md:mt-0 mt-10 w-full h-full'>
                        <div className='lg:ml-32 md:ml-16 '>
                            <p data-aos="fade-up" className='md:text-xl '>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want to run past me. You can contact anytime at 24/7.</p>

                            <h2 data-aos="fade-up" className='text-xl md:text-2xl mt-8 underline hover:text-[#8A55F8] duration-300'>
                                +8801776610168
                            </h2>
                            <h2 data-aos="fade-up" className='text-xl md:text-2xl mt-6 underline hover:text-[#8A55F8] duration-300'>
                                aharmankhan333@gmail.com
                            </h2>
                            <h2 data-aos="fade-up" className='text-xl md:text-2xl font-mono mt-6 underline hover:text-[#8A55F8] duration-300'>
                                Mymensingh Sadar,
                                Mymensingh - 2200
                                Bangladesh

                            </h2>


                            <div className='sm:flex mt-5 items-center'>


                                <div className='flex gap-5  mt-5'>
                                    <a
                                        href="https://www.facebook.com/arman.khan.401"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="GitHub Profile"
                                        className="w-10 h-10 flex items-center justify-center rounded-full border border-[#8750F7] bg-transparent text-[#A074F9] hover:bg-[#8750F7] hover:text-white transition-colors duration-300"
                                    >
                                        <FaFacebookF className="text-xl" />
                                    </a>
                                    <a
                                        href="https://github.com/armangit1"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="GitHub Profile"
                                        className="w-10 h-10 flex items-center justify-center rounded-full border border-[#8750F7] bg-transparent text-[#A074F9] hover:bg-[#8750F7] hover:text-white transition-colors duration-300"
                                    >
                                        <BsGithub className="text-xl" />
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/arman-khan-in/"
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

            </div>
        </div>
    );
};

export default Contact;