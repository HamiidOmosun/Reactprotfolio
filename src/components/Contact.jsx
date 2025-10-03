import React from 'react'

const contact = () => {
  return (
    <div className='bg-[#021526] md:py-28'>
      <div className='md:flex md:flex-row md:justify-between   md:px-28 lg:px-40'>
      <div className='flex items-center justify-center text-center pt-20 md:pt-0 md:w-1/2 md:items-start md:justify-start md:text-left lg:w-1/2'>
        <h1 className='text-3xl font-black text-white max-w-[10ch] md:text-6xl '>Lets be in touch</h1>
      </div>

      <div className="md:w-1/2 lg:w-1/2 mt-10">
        <div className="text-white opacity-45 text-lg space-y-4 pb-10 hidden md:block lg:text-2xl">
            <p className=''>Adress: Port-Harcout, Nigeria</p>
            <p >Phone: +2347053438111</p>
        </div>
        <form className="flex flex-col space-y-4 w-96 px-5 md:px-0 md:w-full lg:text-2xl lg:space-y-14">
          <input
            type="text"
            placeholder="Name"
            className="bg-transparent text-white border-b-2 border-gray-500 focus:border-white outline-none py-2"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="bg-transparent text-white border-b-2 border-gray-500 focus:border-white outline-none py-2"
            required
          />
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            className="bg-transparent text-white border-b-2 border-gray-500 focus:border-white outline-none py-2 resize-none h-32"
            required
          ></textarea>
        </form>
      </div>
      </div>
          <div className="flex justify-end text-white cursor-pointer pr-5 py-7 pt-10 md:pr-25 md:pt-15 lg:pr-40">
            <div className="flex items-center space-x-2 border-b-2 border-white w-fit">
              <p>SEND</p>
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
            </div>
          </div>

        <div className='flex flex-col justify-center items-center mt-10 pb-20 md:hidden'>
          <div className="text-white opacity-45 text-lg space-y-2">
            <p className=''>Adress: Port-Harcout, Nigeria</p>
            <p >Phone: +2347053438111</p>
          </div>
        </div>

    </div>
  )
}

export default contact