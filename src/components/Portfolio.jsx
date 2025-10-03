import React from 'react'
import { Link } from "react-router-dom";
import maniworkman from "../assets/maniworkman.svg";
import Kenji from "../assets/kenji.svg";
import bike from "../assets/bike.svg";
import Kubaneticsphone from "../assets/kubaneticsphone.svg";
import doctor from "../assets/doctor.svg";
import { motion } from "framer-motion";

// Animation variants
const gridItemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: i * 0.15, // stagger based on index
    },
  }),
};

const Portfolio = () => {
  return (
    <div className='bg-[#021526] md:px-28 pb-20 lg:px-40'>
      <h1 className="text-white pl-7 font-black text-3xl pt-8 md:mb-10">Portfolio</h1>

      <div className="grid grid-cols-2 md:grid-cols-6 md:grid-rows-6 gap-2 px-4 py-4">
        {/* Tall block (left) */}
        <motion.div
          custom={0}
          variants={gridItemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="col-span-2 md:col-span-2 md:row-span-4 rounded-2xl bg-[#FFFCED] flex justify-center items-center relative group overflow-hidden order-1"
        >
          <img src={maniworkman} alt="" className="h-3/4" />
          <div className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-white text-lg font-bold">Project Name</h3>
            <p className="text-gray-200 text-sm mt-2">Tech Stack: React, Tailwind, Node.js</p>
            <p className="text-gray-300 text-xs mt-1">Short description of the work...</p>
          </div>
        </motion.div>

        {/* Wide block (top right) */}
        <motion.div
          custom={1}
          variants={gridItemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="col-span-2 md:col-span-4 md:row-span-2 rounded-2xl bg-[#08003A] flex justify-center items-center relative group overflow-hidden order-2"
        >
          <img src={Kubaneticsphone} alt="" />
          <div className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-white text-lg font-bold">Project Name</h3>
            <p className="text-gray-200 text-sm mt-2">Tech Stack: React, Tailwind, Node.js</p>
            <p className="text-gray-300 text-xs mt-1">Short description of the work...</p>
          </div>
        </motion.div>

        {/* Square 1 */}
        <motion.div
          custom={2}
          variants={gridItemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="col-span-1 md:col-span-2 sm:aspect-square md:aspect-auto md:row-span-2 rounded-2xl bg-white flex justify-center items-center relative group overflow-hidden order-3"
        >
          <img src={Kenji} alt="logo" className="w-40" />
          <div className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-white text-lg font-bold">Project Name</h3>
            <p className="text-gray-200 text-sm mt-2">Tech Stack: React, Tailwind, Node.js</p>
            <p className="text-gray-300 text-xs mt-1">Short description of the work...</p>
          </div>
        </motion.div>

        {/* Square 2 */}
        <motion.div
          custom={3}
          variants={gridItemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="col-span-1 md:col-span-2 sm:aspect-square md:aspect-auto md:row-span-2 rounded-2xl bg-[#FFFCED] flex justify-center items-center relative group overflow-hidden order-4"
        >
          <img src={bike} alt="logo" className="w-40" />
          <div className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-white text-lg font-bold">Project Name</h3>
            <p className="text-gray-200 text-sm mt-2">Tech Stack: React, Tailwind, Node.js</p>
            <p className="text-gray-300 text-xs mt-1">Short description of the work...</p>
          </div>
        </motion.div>

        {/* Bottom wide block */}
        <motion.div
          custom={4}
          variants={gridItemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="col-span-2 md:col-span-6 md:row-span-2 rounded-2xl bg-[#FFFCED] flex justify-center items-center  relative group overflow-hidden order-5"
        >
          <img src={doctor} alt="doctor" />
          <div className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-white text-lg font-bold">Project Name</h3>
            <p className="text-gray-200 text-sm mt-2">Tech Stack: React, Tailwind, Node.js</p>
            <p className="text-gray-300 text-xs mt-1">Short description of the work...</p>
          </div>
        </motion.div>
      </div>

      {/* See more button */}
      <div className="flex justify-end text-white cursor-pointer pr-5 pb-1 pt-10">
        <Link
          to="/portfolio"
          className="flex items-center space-x-2 border-b-2 border-white w-fit"
        >
          <p>SEE MORE</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
