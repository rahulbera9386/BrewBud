import React from 'react'
import Img2 from "../../assets/1667812423coffee-shop-logo-concept.png"
const serviceData=[
  {
    id:1,
    img:Img2,
    title:"Espresso",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, magni."
  },
  {
    id:2,
    img:Img2,
    title:"Espresso",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, magni."
  },
  {
    id:3,
    img:Img2,
    title:"Espresso",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, magni."
  },
  {
    id:4,
    img:Img2,
    title:"Espresso",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, magni."
  },

]

const Service = () => {
  return (
    <>
    <div className='py-11'>
      <div className="container">
        {/* Text */}
        <div className='mb-[80px] text-center'>
<h1 className='font-cursive text-6xl font-bold'>Best Cofee For You</h1>
        </div>
        {/* Cards */}
        <div className='flex gap-[8rem] justify-center items-center'>
          {serviceData.map((data,index)=>(
<div
key={index}
   className='max-w-[300px] bg-white shadow-xl
   duration-200 hover:text-white hover:bg-primary relative rounded-xl group
   '>
{/* Imgae Section */}
<div className='h-[122px]'>
  <img className='w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-110 group-hover:rotate-6 duration-300'
   src={data.img} alt="#"/>
</div>
{/* Text-Content */}
<div className='text-center py-3'>
  <h1>{data.title}</h1>
  <p>{data.desc}</p>
</div>
</div>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}

export default Service