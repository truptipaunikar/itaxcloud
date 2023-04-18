import React from 'react'
import {Link} from "react-router-dom"
// import {tailwindConfig} from '../../../tailwind.config'

function Navbar() {
  return (
    <div>
        <nav className='px-6 py-4 '>
            <ul className='flex justify-between text-white text-lg'>
            <li className=' text-2xl font-semibold opacity-95'>iTaxCloud</li>
             <Link  style={{borderRadius:"4px", padding:"8px"}} className=' opacity-95 bg-white text-black px-3 py-0 font-mono' to='/form'>Login</Link>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar