import React from 'react'
import { Link } from 'react-router-dom'
import { FaPlusSquare } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className=''>
        <div className='w-full h-20 text-cyan-600 flex justify-center items-center font-bold text-2xl xl:gap-[75rem]'>
            <Link to='/'>
                <h1>Product Store</h1>
            </Link>
            <Link to="/create">
              <FaPlusSquare size={40} />
            </Link>
        </div>
    </div>
  )
}

export default Navbar;