import react from "react"
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import Service from "./components/Service/Service"
import Banner from "./components/Banner/Banner"
import AppStore from "./components/AppStore/AppStore"
import Testimonials from "./components/Testimonials/Testimonials"
import Footer from "./components/Footer/Footer"



function App() {
  

  return (
    <>
      <Navbar/>
      <Hero/>
      <Service/>
      <Banner/>
      <AppStore/>
      <Testimonials/>
<Footer/>
    </>
  )
}

export default App
