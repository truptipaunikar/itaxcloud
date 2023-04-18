import React from 'react'
import Navbar from './Navbar'
import Services from './Services'
import Contact from './Contact'
import Footer from './Footer'
import {Link} from "react-router-dom"

function Home() {
  return (
    <div>
    <div style={{background:"url(https://i.pcmag.com/imagery/articles/00tLYTqwmgFvacZlYPc5ecO-8..v1583853669.jpg)", backgroundAttachment:"fixed"  }}> 
     <div className=' inset-0 bg-gray-600 bg-opacity-70 '>
      <Navbar/>
        <div className=" mt-56">
         <h2 className='text-white text-4xl  p-3 font-mono opacity-95'><b> iTaxEasy Cloud. A new home for your <br/> files.</b></h2>
          <p className='text-white text-lg mb-14 font-mono opacity-95'>Register or Login now to upload, backup, manage and access your 
          files on any device, <br/> from anywhere, free. </p>
        <button  style={{borderRadius:"40px"}} className=' opacity-95 bg-blue-600 font-bold  p-4 w-56 text-white border-e-white m-16 '><Link to="/form">Sign in Now</Link> </button >
        </div>
        </div>
    </div>
        <Services/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home