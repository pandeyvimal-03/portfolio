"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { fadeUpVariant } from '@/assets/variants/variants'

function Expe() {
  const exp = [
    {
      comp: "Value Innovation Labs",
      role: "Fullstack Developer",
      duration: "March 2024 - Present",
      desc: "As a Full-Stack Developer at Value Innovation Labs, I developed and maintained scalable web applications using React.js, Next.js, and JavaScript, delivering responsive and user-friendly interfaces. I created and optimized RESTful APIs with Node.js for efficient backend functionality and worked with MongoDB and SQL to design databases and manage complex datasets. By collaborating closely with cross-functional teams, I implemented end-to-end solutions, integrated frontend and backend systems, and ensured high performance and reliability. My role also involved troubleshooting, optimizing code quality, and adhering to best practices in full-stack development to deliver impactful and innovative projects."
    },
    {
      comp: "Shashwat Web Technologies",
      role: "Fullstack Developer",
      duration: "July 2024 - March 2024",
      desc: "As a Full-Stack Developer at Value Innovation Labs, I developed and maintained scalable web applications using React.js, Next.js, and JavaScript, delivering responsive and user-friendly interfaces. I created and optimized RESTful APIs with Node.js for efficient backend functionality and worked with MongoDB and SQL to design databases and manage complex datasets. By collaborating closely with cross-functional teams, I implemented end-to-end solutions, integrated frontend and backend systems, and ensured high performance and reliability. My role also involved troubleshooting, optimizing code quality, and adhering to best practices in full-stack development to deliver impactful and innovative projects."

    }
  ]

 
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      variants={fadeUpVariant}
      className='w-[100vw] sm:w-[80vw] h-auto sm:h-[80vh] pl-2 sm:pl-6 mx-auto  py-8 '
      id='exp'
    >
      <h3 className='secHead text-2xl text-center sm:ml-0 mx-auto sm:mx-0 font-bold text-gray-200 pb-12'>Experience</h3>
      <div className=' expSec w-[90%]  sm:mx-auto'>
        {
          exp.map((item, index) => {
            return (
              <motion.div
                className='step '
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className='circle'>{index + 1}</div>
                <div className='content text-white'>
                  <h2 className='text-3xl font-bold'>{item?.comp}</h2>
                  <h3 className='text-sm font-bold text-gray-300'>{item.role}&nbsp;&nbsp;&nbsp;<span className='text-gray-400'>{item.duration}</span> </h3>
                  <p className='text-gray-400'>{item?.desc}</p>
                </div>
              </motion.div>
            )
          })
        }
      </div>
    </motion.div>
  )
}

export default Expe
