import React from 'react'
import { AiOutlineLogout, AiOutlineMail } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'

function Navbar3() {
  return (
    <div className='p-0.5 w-full flex flex-row bg-white text-black shadow-2xl rounded-3xl'>
      <div className='w-2/5 font-mono font-semibold text-3xl p-5'>COURSE Hunt</div>
      <div className='w-3/5 flex font-sans font-medium text-xl p-5 justify-end gap-10 '>
        <NavLink to="/contact" className="flex items-center gap-2">
          <AiOutlineMail size={20} /> Contact Us
        </NavLink>
        <NavLink to="/" className="flex items-center gap-2">
          <AiOutlineLogout size={20} /> Logout
        </NavLink>
      </div>
    </div>
  )
}

export default Navbar3
