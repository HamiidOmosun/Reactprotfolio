import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import Footer from '../components/footer'
import cv from "../assets/cv.pdf"

// src/pages/Portfolio.jsx
const Resume = () => {
  return ( 
    <div className="bg-[#021526]">
      < Navbar/>

        <div className="flex justify-end pr-5 pt-5 md:pr-28 lg:pr-40">
          <a
           href={cv}
           download="cv.pdf" 
           className="relative inline-flex items-center gap-2 text-white text-sm md:text-xs leading-none cursor-pointer ">
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
          </a>
        </div>


      <div className='flex flex-col items-center justify-center md:px-28 md:mt-10 lg:px-40'>
        <h1 className="text-4xl font-black mb-4 text-white pt-10 md:text-5xl lg:text-6xl">
          Omosun Hamiid
        </h1>

        <div className='text-white text-center font-light md:text-lg lg:text-2xl'>
          <p>Expert front-end engineer and UI/UX Expert</p>
          <p className='p-1 opacity-50'>HamiidOmosun@gmail.com</p>
        </div>

        <div className='bg-white h-1 w-full mt-7 mb-6 md:mt-15 lg:mt-20'></div>
        <div className="flex text-white items-stretch w-full">
          <div className='w-[40%] text-left text-xs md:text-sm lg:text-lg pl-3 font-light'>
            <div className='space-y-1'>
              <p>+2347053438111</p>
              <div className='flex flex-col space-y-1'>
                <a 
                  href="https://www.linkedin.com/in/abdulhamiid-omosun-54a8492a7?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BfqX9qvLoSaCFTw9t9QvQaQ%3D%3D" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
                <a 
                  href="https://github.com/HamiidOmosun" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Github
                </a>
              </div>
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

          <div className='border-1 self-stretch border-white mx-4 opacity-50'></div>

          <div className='w-[70%] text-xs md:text-sm lg:text-lg pr-5 font-light'>
            <p>Front-end engineer with 1.5 years of experience building scalable web applications with React, TypeScript, and modern UI practices. Skilled in component-based architecture, API integration, and creating scalable, maintainable code.
            </p>
            <p className='pt-5'>
              Seeking to contribute to product-driven companies where frontend,
              tooling, and user experience matter.
            </p>

            <h1 className='pt-10 font-bold'>PROFESSIONAL EXPERIENCE</h1>

            <p className='font-semibold py-3'>Lead Frontend Engineer (Freelance)
               — Sira Admin Panel (2025 - Present)
            </p>
            <ul className='space-y-1 list-disc list-outside px-3'>
              <li>
                I built an admin panel using html, CSS, bootstrap5, JavaScript and Express for the Sira mobile application.
              </li>
              <li>
                I implemented reusable components that reduced front-end development time by 30%. 
              </li>
              <li>
                I collaborated with a front-end team of 3 developers, providing technical guidance, task assignments, and code reviews, which accelerated feature delivery and improved code quality.
              </li>
              <li>
                With my help as the lead front-end developer, my team and I were able to deliver a responsive, user-friendly admin interface that enabled faster onboarding of new features.
              </li>
            </ul>

            <p className='font-semibold py-3'>Lead Frontend Developer — Boscotti (2025)</p>
            <ul className='space-y-1 list-disc list-outside px-3'>
              <li>
                I built an e-commerce front-end website using React, showcasing product listing, details page and shopping cart UI which improved user engagement by 25%.
              </li>
              <li>
                I created a search and filter functionality to allow users to easily browse products by category, price, or attributes, reducing product discovery time by 40%.
              </li>
              <li>
                I designed and implemented routing with React Router for seamless navigation between pages.
              </li>
              <li>
                I used Context API for state management to handle cart, user selections, and product data efficiently, reducing state-related bugs by 20%.
              </li>
            </ul>

            <p className='font-semibold py-3'>Product Designer & Frontend Developer — Bizyaski 
              (Pink Lip Balm Project) (2023 - 2024)
            </p>
            <ul className='space-y-1 list-disc list-outside px-3'>
              <li>
                Designed marketing assets, landing pages,
                 and e-commerce UI using Figma and React.
              </li>
              <li>
                Improved user engagement by redesigning product pages,
                 optimizing layout, and enhancing visual hierarchy.
              </li>
              <li>
                Delivered animations, graphics, product photography 
                retouching, ensuring brand consistency.
              </li>
            </ul>

            <h1 className='pt-10 font-bold'>PROJECTS & HIGHLIGHTS</h1>

            <ul className='space-y-1 list-disc list-outside px-3 mt-3'>
              <li>
                Sira Admin Panel — Full-stack product admin dashboard; 
                featured login/auth, data tables, role-based access, 
                responsive layouts.
              </li>
              <li>
                Primer Care Hospital Website Redesign — Optimized UI/UX,
                 site speed, user navigation; added contact forms, 
                 mobile-first design.
              </li>
              <li>
                Whatsapp Automation — Prototype in Figma + frontend
                 build using React; mobile-friendly, interactive mockups.
              </li>
            </ul>

            <h1 className='pt-10 font-bold'>EDUCATION & CERTIFICATIONS</h1>
            <ul className='space-y-1 list-disc list-outside px-3 mt-3'>
              <li>
                CS50 AI — HarvardX (In Progress)
              </li>
              <li>
                Certification in Python Programming — [Institution Name]
              </li>
              <li>
                Data Analysis Certification — [Institution Name]
              </li>
              <li>
                Web Development Program — NIIT (In Progress)
              </li>
              <li>
                B.Eng Mechanical  — Micheal Okapara university
              </li>
            </ul>

            <h1 className='pt-10 font-bold'>ADDITIONAL ACHIEVEMENTS</h1>
            <ul className='space-y-1 list-disc list-outside px-3 mt-3'>
              <li>
                Led frontend work for multiple freelance projects, 
                ensuring delivery on deadlines and client satisfaction.
              </li>
              <li>
                Designed product graphics and animations that 
                increased client conversions in marketing campaigns
              </li>
              <li>
                Committed to continuous learning: participating in AI / 
                data courses and practicing new frontend techniques regularly.
              </li>
            </ul>

              
          </div>
        </div>

      </div>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Resume