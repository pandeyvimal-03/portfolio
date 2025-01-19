"use client"
import React from 'react'
import {motion} from 'framer-motion'
import { fadeUpVariant } from '@/assets/variants/variants'

function Education() {
  const exp = [
    {
      course: "Master In Computer Application - MCA",
      clg: "Uttaranchal University",
      duration: " 2024 - 2026",
    
    },
    {
      course: "Bacherlor In Computer Application",
      clg: "Allahabad State University",
      duration: "2020 - 2023"

    }
  ]
  return (
    <motion.div 
         initial="hidden"
         whileInView="show"
         viewport={{ once: true, amount: 0.5 }}
         variants={fadeUpVariant}
         className='w-[100vw] sm:w-[80vw] h-auto sm:h-[80vh] pl-2 sm:pl-6 mx-auto  py-8' 
         id='edu'
    >
        <div className="section-heading">
                <span className="line"></span>
                <span className="content text-4xl text-left font-bold text-gray-300 pb-8">Educational Qualification</span>
                <span className="line"></span>
            </div>
      <h3 className='secHead sm:hidden text-2xl text-center sm:ml-0 mx-auto sm:mx-0 font-bold text-gray-200 pb-12'>Education</h3>
      <div className=' expSec w-[90%]  mx-auto pl-8'>
      
        {
          exp.map((item, index) => {
            return (
              <motion.div 
                  className={`step ${index == 0 ? 'pt-4' : ''}`} 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                
                <div className='circle'><i className="ri-book-open-line text-xl"></i></div>
                <div className='content text-white'>
                  <h2 className=' font-bold'>{item?.course}</h2>
                  <p className=''>{item?.clg}&nbsp;&nbsp;{item?.duration}</p>
                </div>
              </motion.div>
            )
          })
        }
      </div>
    </motion.div>
  )
}

export default Education
