import React from 'react'
import heroImg from "../../assets/1667812423coffee-shop-logo-concept.png"




const Hero = () => {
  return (
    <>
      <div className='min-h-[550px] bg-brandDark flex justify-center items-center text-white px-[.5rem] py'>
        <div className="container ">
          <div className="flex justify-between items-center ">
            {/* text content section */}
            <div className='flex flex-col gap-5 flex-1'>
              <h1 className='text-6xl font-bold'>We Serve the richest <span className='text-primary font-cursive'>cofee</span> in the town</h1>
              <div>
                <button className='bg-gradient-to-r from-primary to-secondary border-2 border-primary rounded-full px-4 py-2 text-white hover:scale-105 duration-200'
                >Cofee and Code</button>
              </div>
            </div>
            {/* image content section */}
            <div className='m-h-[450px] w-[750px] flex justify-center items-center relative flex-2'>
              <img src={heroImg} alt="#"
                className='w-[450px] spin' />
              <div className='absolute top-6 left-6 bg-gradient-to-r from-primary to-secondary rounded-xl p-3 border-secondary'>
                <h1>Hey Coder</h1>
              </div>
              <div className='absolute bottom-6 right-6 bg-gradient-to-r from-primary to-secondary rounded-xl p-3 border-secondary'>
                <h1>Hey Coder</h1>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero 