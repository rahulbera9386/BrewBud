import React from 'react'
import bg from "../../assets/bg.jpg"
import app1 from "../../assets/appstore-1.png";
import app2 from "../../assets/appstore2.png";

const bg_Style = {
  backgroundImage: `url(${bg})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%"
}
const AppStore = () => {
  return (
    <>

      <div style={bg_Style} className='py-14 w-full'>
        <div className="container pl-[8rem]">
          <div className='grid grid-cols-1 gap-4 '>
            {/* Content */}
            <div >
              <h1 className='text-4xl pl-3 font-bold text-white'>Coffee Cafe is available for Android and IOS</h1>
            </div>
            {/* Image */}
            <div className='flex gap-4 justify-start  items-center'>

              <a href="#">
                <img className='max-w-[150px]' src={app1} alt="#" />
              </a>


              <a href="#">
                <img className='max-w-[150px]' src={app2} alt="#" />
              </a>
            </div>

          </div>
        </div>
      </div>
   
    
    </>
  )
}

export default AppStore