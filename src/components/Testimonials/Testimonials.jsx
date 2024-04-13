import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testimonialImg from "../../assets/test-1.jpg"

const testimonialData=[
  {
    id: 1,
    image: testimonialImg,
    description: 'Lorem ipsum dolor sit amet,. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    name: 'John Doe'
  },
  {
    id: 2,
    image:testimonialImg,
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    name: 'Jane Smith'
  },
  {
    id: 3,
    image: testimonialImg,
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    name: 'David Johnson'
  },
  {
    id: 4,
    image: testimonialImg,
    description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    name: 'Sarah Brown'
  },
  {
    id: 5,
    image: testimonialImg,
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    name: 'Michael Wilson'
  },
  {
    id: 6,
    image: testimonialImg,
    description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    name: 'Emily Jones'
  },
  {
    id: 7,
    image: testimonialImg,
    description: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.',
    name: 'Daniel Lee'
  },
  {
    id: 8,
    image: testimonialImg,
    description: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.',
    name: 'Jennifer Taylor'
  },
  {
    id: 9,
    image: testimonialImg,
    description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
    name: 'Robert Clark'
  },
  {
    id: 10,
    image: testimonialImg,
    description: 'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.',
    name: 'Laura Martinez'
  },
  {
    id: 11,
    image: testimonialImg,
    description: 'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.',
    name: 'Kevin Adams'
  },
  {
    id: 12,
    image: testimonialImg,
    description: 'Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
    name: 'Amanda White'
  },
  {
    id: 13,
    image: testimonialImg,
    description: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.',
    name: 'Ryan Garcia'
  },
  {
    id: 14,
    image: testimonialImg,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    name: 'Sophia Hernandez'
  },
  {
    id: 15,
    image: testimonialImg,
    description: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.',
    name: 'Matthew Miller'
  }
]

const Testimonials = () => {
  const settings = {
    dots: true,
    
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  return (
    <>
    <div className='py-14 mb-16'>
      <div className="container">
        <div className='text-center'>
          <h1 className='font-cursive font-bold text-8xl'>Testimonials</h1>
        </div>
        {/* Cards */}
        <div>
        <Slider {...settings}>
          {testimonialData.map((data,index)=>(
            <div className='my-16 max-w-[800px]'>
              <div className='flex gap-4 flex-col shadow-lg py-4 px-6 mx-4 rounded-xl bg-primary/10 relative'>
                <div className='mb-4'>
                  <img className='w-20 h-20 rounded-full'
                  src={data.image}/>
                </div>
                <div className='flex flex-col gap-4'>
                  <p className=" text-xl">{data.description}</p>
                  <h1 className='font-bold text-gray-800 text-2xl font-cursive2'>{data.name}</h1>
                </div>
              </div>
            </div>
          ))}

        </Slider>
        </div>
      </div>
    </div>
    
    
    </>
  )
}

export default Testimonials