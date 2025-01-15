import React from 'react'

function Education() {
  let exp = [
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
    <div className='w-[95vw] sm:w-[80vw] h-auto sm:h-[80vh] pl-6 mx-auto  py-8'>
        <div className="section-heading">
                <span className="line"></span>
                <span className="content text-4xl text-left font-bold text-gray-300 pb-8">Educational Qualification</span>
                <span className="line"></span>
            </div>
      <h3 className='secHead text-2xl text-center sm:ml-0 mx-auto sm:mx-0 font-bold text-gray-200 pb-12'>Education</h3>
      <div className=' expSec w-[90%]  mx-auto pl-8'>
        {
          exp.map((item, index) => {
            return (
              <div className='step '>
                <div className='circle'>{index + 1}</div>
                <div className='content text-white'>
                  <h2 className='text-2xl font-bold'>{item?.course}</h2>
                  <p className=''>{item?.clg}&nbsp;&nbsp;{item?.duration}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Education
