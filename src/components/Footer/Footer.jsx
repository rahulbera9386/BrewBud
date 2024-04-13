import React from 'react'
import footerBg from "../../assets/footer-bg.jpg"
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

const bgStylee = {
  backgroundImage: `url(${footerBg})`,
  backgrounPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  height: "100%",
  width: "100%"
}



const Footer = () => {
  return (
    <>
      <div style={bgStylee}>
        <div className="footer min-h-[400px]">
          <div className='grid grid-cols-4 gap-[150px] pb-16 pt-12 text-white pl-12'>
          <div className='space-y-2'>
            <h1 className='text-4xl font-bold font-cursive2'>
              Coffee Cafe
            </h1>
            <p className='text-2xl'>Crafted Coffee, Cozy Vibes, Unforgettable Moments – Your Perfect Espresso Escape</p>
            <button className=' rounded-2xl bg-secondary text-white p-2'>Visit Our Youtube Chnnel</button>
          </div>
          <div className='space-y-2'>
            <h1 className='text-2xl'>Footer Links</h1>
            <ul>
              <li className='text-2xl text-white '>Home</li>
              <li className='text-2xl text-white '>About</li>
              <li className='text-2xl text-white '>Contact</li>
              <li className='text-2xl text-white '>Blog</li>
            </ul>
          </div>
          <div className='space-y-2'>
            <h1 className='text-2xl'>Footer Links</h1>
            <ul>
              <li className='text-2xl text-white '>Home</li>
              <li className='text-2xl text-white '>About</li>
              <li className='text-2xl text-white '>Contact</li>
              <li className='text-2xl text-white '>Blog</li>
            </ul>
          </div>
          <div className='space-y-2'>
            <h1 className=''>Address</h1>
            <p className='text-2xl text-white '>Noida, India</p>
            <div className="social-links flex w-full gap-4">
              <FaFacebook className='w-10 h-10 hover:scale-105 hover:cursor-pointer'/>
              <FaInstagram className='w-10 h-10 hover:scale-105 hover:cursor-pointer'/>
              <FaLinkedin className='w-10 h-10 hover:scale-105 hover:cursor-pointer'/>
            </div>
          </div>

        </div>
      </div>
      </div>
    </>
  )
}

export default Footer