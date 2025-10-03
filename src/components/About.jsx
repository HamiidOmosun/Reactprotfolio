import React from 'react'

const about = () => {
  return (

    <div id='about' className="bg-[#021526] md:px-28 lg:px-40 lg:py-15 min-h-screen">
      <div className='flex flex-col md:flex md:flex-row md:pt-20'>
        <div className="md:w-1/2 md:items-start md:justify-start text-center md:text-left">
          <h1 className='text-white font-black text-3xl md:text-6xl pt-20 md:pt-0 mb-0 lg:text-8xl'>Frontend</h1>
          <h1 className='text-white font-black text-3xl md:text-6xl mt-0 lg:text-8xl'>Engineer</h1>
        </div>

        <div className='px-7 md:w-1/2 flex flex-col justify-center md:pt-0'>
          <p className='text-white text-center text-lg font- max-w-[25h] mt-7 md:mt-0 lg:text-2xl'>
            Hi, I’m <span className='font-bold'>Hamiid Omosun</span> — an engineer by degree, 
            a creator by heart, and a developer by passion.
          </p>
          <p className='text-white text-center text-lg font-extralight max-w-[25h] mt-7 lg:text-2xl'>
            I blend design and code to build seamless digital experiences. From drawing and 
            graphic design to data analysis and development, I thrive at the intersection of 
            creativity and technology. I’m ambitious, social, and always eager to create, connect, 
            and turn ideas into reality.
          </p>
          <p className='text-white opacity-50 text-center text-lg font-extralight max-w-[25h] mt-7 lg:text-2xl'>
            If you want to get to know me better, use any of the social media below...
          </p>
        </div>
      </div>

      <div className="text-gray-500 flex flex-row items-center justify-center 
                      space-x-10 md:space-x-30 text-sm md:text-2xl 
                      font-extralight mt-10 pb-20 lg:py-15 lg:space-x-40">
        <a 
          href="https://www.linkedin.com/in/abdulhamiid-omosun-54a8492a7?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BfqX9qvLoSaCFTw9t9QvQaQ%3D%3D" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
        >
          LinkedIn
        </a>

        <a 
          href="https://x.com/hamiidomosun" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
        >
          Twitter
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

    </div>
  )
}

export default about