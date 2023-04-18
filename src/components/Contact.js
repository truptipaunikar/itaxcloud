import React from 'react'
import {Link} from "react-router-dom"

function Contact() {

  return (
    <div className=' bg-slate-600 text-white p-16 mt-0'>
      <h1 className=' text-4xl mb-14'>Get started with iTaxCloud</h1>
      <Link className=' border border-spacing-1 p-3  font-bold' to='/form'>Get Your Clould Space</Link>
    </div>
  )
}

export default Contact