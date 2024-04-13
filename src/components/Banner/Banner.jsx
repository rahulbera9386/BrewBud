import React from 'react'
import bannerIMG from "../../assets/1667812423coffee-shop-logo-concept.png";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from 'react-icons/io5';
import { GiFoodTruck } from 'react-icons/gi';
import backSecImg from "../../assets/bg-image.jpg"

const bgStylee={
  backgroundImage:`url(${backSecImg})`,
  // backgroundColor:"#270c03",
  backgroundPosition:"center",
  backgroundRepeat:"no-repeat",
  backgroundSize:"cover",
  height:"100%",
  width:"100%"
}



const Banner = () => {
  return (
    <>
      <div style={bgStylee} className='rounded'>
        <div className="container flex justify-between items-center gap-9">
          {/* Left Side */}
          <div>
            <img src={bannerIMG} className='spin w-[450px]' alt="banner-img" />
          </div>
          {/* Right Side */}
          <div className='flex flex-col justify-center gap-6 w-[715px] h-[430px]'>
            <h1 className='font-cursive text-4xl font-bold'>Premium Blen Coffee</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio</p>
            <div className='grid grid-cols-2'>
              <div className='flex gap-1 flex-col space-y-5'>
                <div className='flex gap-3 items-center'>
                  <GrSecure className='w-12 h-12 p-2  rounded-full bg-red-100'/>
                  <p>Premium Cofee</p>
                </div>
                <div className='flex gap-3 items-center'>
                  <IoFastFood className='w-12 h-12 p-2  rounded-full bg-gray-200'/>
                  <p>Hot Cofee</p>
                </div>
                <div className='flex gap-3 items-center'>
                  <GiFoodTruck className='w-12 h-12 p-2  rounded-full bg-orange-200'/>
                  <p>Cold Cofee</p>
                </div>
              </div>
              <div className='space-y-5 border-l-4 border-primary pl-6'>
                <h1 className='font-semibold text-3xl font-cursive '>Tea Lover</h1>
                <p className='text-gray-900 text-xl '>Much like writing code, brewing the perfect cup of tea requires patience, precision, and a dash of passion to create a comforting blend of flavors.</p>
              </div>
            </div>

          </div>
        </div>
      </div>




    </>
  )
}

export default Banner