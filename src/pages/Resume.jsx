import Navbar from '../components/Navbar'
import Contact from '../components/contact'
import Footer from '../components/footer'

// src/pages/Portfolio.jsx
const Resume = () => {
  return ( 
    <div className="bg-[#021526]">
      < Navbar/>

        <div className="flex justify-end pr-5 md:pr-0 pt-5">
          <button className="relative inline-flex items-center gap-2 text-white text-sm md:text-xs leading-none cursor-pointer ">
            <span>DOWNLOAD</span>
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


      <div className='flex flex-col items-center justify-center'>
        <h1 className="text-4xl font-black mb-4 text-white pt-10">
          Omosun Hamiid
        </h1>

        <div className='text-white text-center font-light'>
          <p>Expert front-end engineer and UI/UX Expert</p>
          <p className='p-1 opacity-50'>HamiidOmosun@gmail.com</p>
        </div>

        <div className='bg-white h-1 w-96 mt-7 mb-6'></div>
        <div className="flex text-white items-start w-full">
          <div className='w-[40%] text-left text-xs pl-3 font-light'>
            <div className='space-y-1'>
              <p>+2347053438111</p>
              <p>LinkedIn</p>
              <p>Github</p>
              <p>Porthacourt, Nigeria</p>
            </div>

            <p className='mt-10 font-bold'>Core Technologies:</p>
            <div className='space-y-2 mt-2'>
              <p>JavaScript</p>
              <p>SQL</p>
              <p>Java</p>
              <p>Vite</p>
              <p>Node.js</p>
              <p>Vue</p>
              <p>React</p>
              <p>MangoDB</p>
              <p>Tailwind Css</p>
              <p>React Native</p>
              <p>Python</p>
            </div>

            <p className='mt-10 font-bold'>Others:</p>
            <div className='space-y-2 mt-2'>
              <p>Figma</p>
              <p>UI/UX Designs</p>
              <p>Design Systems</p>
              <p>Responsive Designs</p>
              <p>Animations</p>
              <p>Graphic Designs</p>
              <p>Data Analysis</p>
              <p>Artificial Intelligence</p>
            </div>

          </div>

          <div className='h-screen border-1 border-white mx-4 opacity-50'></div>

          <div className='w-[70%] text-xs pr-5 font-light'>
            <p>Creative and detail-oriented Frontend Engineer with strong 
              experience building responsive web applications using React, 
              TypeScript, HTML5, and CSS3. Proven track record delivering 
              user-centric UIs and admin dashboards as lead frontend developer. 
              Backed by strong foundations in Python, Data Analysis, and AI through 
              Harvard's CS50 AI and freelance/web dev work. Skilled in collaborating 
              with cross-functional teams, practicing Agile workflows, optimizing
              for performance, and ensuring UX accessibility
            </p>
            <p className='pt-5'>
              Seeking to contribute to product-driven companies where frontend,
              tooling, and user experience matter.
            </p>
            <h1 className='pt-10 font-bold'>PROFESSIONAL EXPERIENCE</h1>

            <p className='font-semibold py-3'>Lead Frontend Engineer (Freelance)
               — Kira Admin Panel (2025 - Present)
            </p>
            <ul className='space-y-1 list-disc list-outside px-3'>
              <li>
                Architected and implemented the admin dashboard UI using 
                React + TypeScript + Tailwind CSS.
              </li>
              <li>
                Integrated RESTful APIs, managed state, and improved 
                page load performance by ~30%
              </li>
              <li>
                Ensured responsive design across devices, enhanced
                UI consistency across components.
              </li>
              <li>
                Collaborated with backend engineers, PMs, and UX 
                designers to translate product requirements into 
                polished frontend features.
              </li>
            </ul>
              
          </div>
        </div>

        <Contact/>
      </div>
      <Footer/>
    </div>
  )
}

export default Resume