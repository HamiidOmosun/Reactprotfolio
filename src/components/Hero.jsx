import React, { useRef } from "react";
import {motion, useInView} from 'framer-motion';
import profilephoto from "../assets/profilephoto.png";
import profilephoto2 from "../assets/profilephoto2.svg";
import Marquee from "./marquee";


const Home = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3, margin: "0px 0px -50px 0px" });

  return (
    <div className='bg-[#021526] ' id="home">
      <motion.div className='flex items-center justify-center font-black text-white flex-col pt-10 '
        initial={{opacity:0, y:50}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.5, ease:"easeOut"}}
        viewport={{once:true, amount:0.2}}
      >
        <div className="md:flex md:flex-row md:space-x-1.5">
        <h1 className='text-4xl md:text-7xl lg:text-8xl'>
          Frontend
        </h1>
        <h1 className='text-4xl md:text-7xl lg:text-8xl'>
          Developer.
        </h1>
        </div>
      </motion.div>

      <motion.div
        className="px-5 flex flex-col justify-center space-y-9 mt-10 md:flex-row md:space-x-20 md:w-full lg:space-x-30 lg:pt-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <p className="text-xl text-white font-extralight text-center md:text-left md:max-w-[20ch] md:text-lg lg:text-2xl">
          I create responsive landing pages, booking systems, and full web & mobile
          apps that convert
        </p>
        <p className="text-xl text-white font-extralight text-center md:text-left md:max-w-[20ch] md:text-lg lg:text-2xl">
          I create responsive landing pages, booking systems, and full web & mobile
          apps that convert
        </p>

        <div className="flex justify-end pr-5 md:pr-0">
          <button className="relative inline-flex items-center gap-2 text-white text-sm md:text-xs leading-none cursor-pointer ">
            <span>GET IN TOUCH</span>
            <svg
              className="w-4 h-4 md:w-5 md:h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>

            {/* underline */}
            <span className="absolute left-0 w-28 h-[2px] mt-4 bg-white"></span>
          </button>
          </div>
      </motion.div>

      <img src={profilephoto2} alt="profile" className="h-auto pt-0 mt-10 pr-40 hidden md:block" />

      <motion.div
        ref={ref}
        className="pb-7 mt-10 md:hidden"
        initial={{ opacity: 1, x: -100 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 1, x: -100 }}
        transition={{ duration: 0.6,}}
      >
        <img src={profilephoto} alt="profile" className="h-auto" />
      </motion.div>

      <div className="md:px-28 lg:px-40 lg:py-10">
        <Marquee />
      </div>

      <div className="md:px-28 lg:px-40">
        <p className="text-white pl-7 font-black  text-3xl mt-8">Trusted by</p>
        <div className="h-20 w-full bg-[#FFFCED] mt-7">
      </div>


      </div>

      


    </div>

  )
}

export default Home