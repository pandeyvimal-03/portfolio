"use client"
import React from 'react'
import Image from 'next/image'
import EpmsImg from '../assets/images/emps_img.png'
import HrmsImg from '../assets/images/hrms_img.png'
import CscImg from '../assets/images/csc_image.png'
import RozgarImg from '../assets/images/rozgar_img.png'
import AtsImg from '../assets/images/ats_image.png'
import { projectItem } from '@/types/project'

const project = [
  {
     img : HrmsImg,
     name : "HR Management Software - HRMS",
     desc1 : "The images will display clearly, maintain their aspect ratio, and fit within their respective containers without distortion. Adjust the dimensions or objectFit properties if you need different behavior.",
     desc2 : "The images will display clearly, maintain their aspect ratio, and fit within their respective containers without distortion. Adjust the dimensions or objectFit properties if you need different behavior."
  },
  {
    img : EpmsImg,
    name : "Employee Management System - EPMS",
    desc1 : "The images will display clearly, maintain their aspect ratio, and fit within their respective containers without distortion. Adjust the dimensions or objectFit properties if you need different behavior.",
    desc2 : "The images will display clearly, maintain their aspect ratio, and fit within their respective containers without distortion. Adjust the dimensions or objectFit properties if you need different behavior."
  },
  {
    img : RozgarImg,
    name : "Job Porta - ROZGAR.COM",
    desc1 : "The images will display clearly, maintain their aspect ratio, and fit within their respective containers without distortion. Adjust the dimensions or objectFit properties if you need different behavior.",
    desc2 : "The images will display clearly, maintain their aspect ratio, and fit within their respective containers without distortion. Adjust the dimensions or objectFit properties if you need different behavior."
  },
  {
    img : CscImg,
    name : "AI Resume Making Tool",
    desc1 : "The images will display clearly, maintain their aspect ratio, and fit within their respective containers without distortion. Adjust the dimensions or objectFit properties if you need different behavior.",
    desc2 : "The images will display clearly, maintain their aspect ratio, and fit within their respective containers without distortion. Adjust the dimensions or objectFit properties if you need different behavior."
  },
  {
    img : AtsImg,
    name : "Resume Analyzer ",
    desc1 : "The images will display clearly, maintain their aspect ratio, and fit within their respective containers without distortion. Adjust the dimensions or objectFit properties if you need different behavior.",
    desc2 : "The images will display clearly, maintain their aspect ratio, and fit within their respective containers without distortion. Adjust the dimensions or objectFit properties if you need different behavior."
  }
]

function Projects() {
  return (
    <div className=' w-[95vw] sm:w-[82vw] h-auto pl-6 sm:pl-6 mx-auto  py-8 sm:py-24 ' id='projects'>
      
      {/* <h3 className='secHead text-4xl text-left font-bold mr-auto ml-16 text-gray-300 pb-8'>Projects</h3> */}
      <h3 className='secHead text-2xl text-center pl sm:ml-16  font-bold text-gray-200 pb-12'>Projects</h3>
      <div className=' w-[100%] flex flex-wrap justify-center gap-4 sm:gap-8 py-2 sm:py-8'>
        {
          project.map((item : projectItem , index : number)=>{
            return(
              <div key={index} className='h-auto sm:h-[35vh] w-[90%] p-2 sm:p-4 border rounded-md shadow-md border-[#008000] text-white flex flex-col sm:flex-row  justify-between items-center'>
              <Image src={item.img} alt='image' className=' h-[30%] w-[98%] sm:h-[220px] sm:w-[380px]  object-fit rounded-md object-center'></Image>
              <div className='w-[95%] sm:w-[60%]'>
                  <h2 className='font-bold text-md sm:text-xl text-gray-200 py-1 sm:py-2'>{item.name}</h2>
                  <p className='text-gray-400 text-sm'>{item.desc1}</p>
                  <br/>
                  <p className='text-gray-400 text-sm'>{item.desc2}</p>
                  <button className='w-[30%] px-4 py-2 rounded-md bg-green-700 text-white mt-2'>visit</button>
              </div>
            </div>
            )
          })
        }
       
      </div>
    </div>
  )
}

export default Projects
