import React from 'react'
import logo from "../../assets/image-logo.png"
import { FaCoffee } from 'react-icons/fa'
const Menus=[
  {
    id:1,
    name:"Home",
    link:"#Home"
  },
  {
    id:2,
    name:"Services",
    link:"#Services"
  },
  {
    id:1,
    name:"About",
    link:"#About"
  }
]






const Navbar = () => {
  return (
    <div className="navbar w-full bg-gradient-to-r from-secondary to-secondary/90 h-[75px] text-white  px-[70px] py-4 flex justify-between items-center">
      
{/* LOGO */}
<div className=''>
<a href="#" className='flex font-bold text-2xl items-center gap-2 justify-center'>
  <img className='w-14' src={logo} alt="#"/>
  <h3 className='text-white-1000 font-cursive'>BrewBud Cafe</h3>
</a>
</div>
{/* Nav-Links */}
<div className='flex gap-8 justify-between items-center'>
<ul className='flex gap-8 '>
  {
    Menus.map((data,index)=>(
      <li key={index}>
        <a className='text-2xl text-white/60 hover:text-white duration-200' href={data.link}>
          {data.name}
        </a>
      </li>
    ))
  }
  
</ul>
<button className='bg-primary flex items-center gap-2 text-white rounded-full border-none px-4 py-2 cursor-pointer hover:bg-white hover:text-black hover:border hover:duration-300 hover:scale-105 hover:ease-in'>
    <FaCoffee/>
    Order Now
    </button>

</div>

      </div>
   
  )
}

export default Navbar