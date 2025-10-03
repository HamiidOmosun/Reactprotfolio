import Navbar from '../components/Navbar'
import Contact from '../components/contact'
import Footer from '../components/footer'

// src/pages/Portfolio.jsx
const Resume = () => {
  return ( 
    <div className="bg-[#021526]">
      < Navbar/>
      <div className='flex flex-col items-center justify-center'>
        <h1 className="text-4xl font-black mb-6 text-white pt-10">
          Omosun Hamiid
        </h1>

        <Contact/>
      </div>
      <Footer/>
    </div>
  )
}

export default Resume