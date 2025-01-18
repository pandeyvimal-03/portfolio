"use client"
import React from 'react'
import Link from 'next/link'

function Header() {
   const handlescroll = (id : string)=>{
      const section = document.getElementById(id)
      if(section){
         section.scrollIntoView({behavior : 'smooth' , block : 'start'})
      }
   }
  return (
    <div className=' flex items-center justify-between  px-12 py-8  text-gray-500'>
       <div className=' hidden sm:flex items-center justify-center mr-18 pr-12 w-[60%]'>
          <ul className='flex items-center justify-start   '>
             
             <li className='px-4 py-2 list-none font-bold text-md mr-3 cursor-pointer' onClick={()=>{handlescroll('about')}}>About</li>
             <li className='px-4 py-2 list-none font-bold text-md mr-3 cursor-pointer' onClick={()=>{handlescroll('exp')}}>Exp.</li>
             <li className='px-4 py-2 list-none font-bold text-md mr-3 cursor-pointer' onClick={()=>{handlescroll('skills')}}>Skills</li>
             <li className='px-4 py-2 list-none font-bold text-md mr-3 cursor-pointer' onClick={()=>{handlescroll('projects')}}>Projects</li>
             <li className='px-4 py-2 list-none font-bold text-md mr-3 cursor-pointer' onClick={()=>{handlescroll('edu')}}>Edu.</li>
             <li className='px-4 py-2 list-none font-bold text-md mr-3 cursor-pointer' onClick={()=>{handlescroll('certification')}}>Certification</li>
             <li className='px-4 py-2 list-none font-bold text-md mr-3 cursor-pointer' onClick={()=>{handlescroll('contact')}}>Connect</li>
          </ul>
       </div>

       <div className='sm:hidden'>
          <i className="ri-menu-2-line text-2xl"></i>
       </div>

       <div className='flex items-center justify-start  w-[22%] pl-18 gap-8'>
           <Link href={'https://github.com/pandeyvimal-03'}>
           <i className="ri-github-fill text-2xl"></i></Link>
           <Link href={'https://www.linkedin.com/in/vimal-pandey-910026229/?originalSubdomain=in'}>
           <i className="ri-linkedin-box-fill text-2xl"></i></Link>
           
       </div>
    </div>
  )
}

export default Header
