import React from 'react'
import pics from "../../public/photo.avif"

import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaTelegram } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";

import { ReactTyped,Typed } from "react-typed";

const Home = () => {
  return (
    <>
        <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
            <div className='flex flex-col md:flex-row'>
                <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
                    <span className='text-xl'>Welcome In My Feed</span>
                    <div className='flex space-x-1 text-2xl md:text-4xl'>
                        <h1>Hello, I'm a </h1>
                        {/* <span className='text-red-700 font-bold'>Developer</span> */}
                        <ReactTyped className='text-red-700 font-bold'
                            strings={["Developer", "Programmer", "Coder"]}
                            typeSpeed={40}
                            backSpeed={50}
                            loop={true}
                        />
                    </div>
                    <br />
                    <p className='text-sm md:text-base text-justify'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic eos a accusantium. Officiis provident ducimus, deleniti odit facilis, odio, laborum reiciendis sint exercitationem neque tenetur vero incidunt natus suscipit nesciunt impedit laudantium iste inventore aliquam sit non repudiandae beatae hic?</p>
                    <br />
                    <div className='flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 items-center'>
                        <div className='space-y-2'>
                            <h1 className='font-bold text-center'>Available on</h1>
                            <ul className='flex space-x-5'>
                                <li>
                                    <a href="https://www.facebook.com/profile.php?id=100091089911383" target='_blank'><FaFacebookSquare className='text-2xl cursor-pointer hover:scale-110 duration-200'/></a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/anmol-kumar-896432231/" target='_blank'><FaLinkedin className='text-2xl cursor-pointer hover:scale-110 duration-200'/></a>
                                </li>
                                <li>
                                    <a href="https://www.youtube.com/@mauryaanmol8521" target='_blank'><IoLogoYoutube className='text-2xl cursor-pointer hover:scale-110 duration-200'/></a>
                                </li>
                                <li>
                                    <a href="https://telegram.org/" target='_blank'><FaTelegram className='text-2xl cursor-pointer hover:scale-110 duration-200'/></a>
                                </li>
                            </ul>
                        </div>
                        <div className='space-y-2 text-center'>
                            <h1 className='font-bold'>Currently working on</h1>
                            <div className='flex space-x-5'>
                                <DiMongodb className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] '/>
                                <FaReact className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] '/>
                                <FaNodeJs className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] '/>
                                <SiExpress className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] '/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1'>
                    <img src={pics} className='rounded-full md:w-[450px] md:h-[450px]' alt="" />
                </div>
            </div>
        </div>
        <hr />
    </>
  )
}

export default Home
