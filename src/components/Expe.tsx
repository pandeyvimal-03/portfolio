import React from 'react'

function Expe() {
  let exp = [
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
    <div className='w-[95vw] sm:w-[80vw] h-auto sm:h-[80vh] pl-6 mx-auto  py-8 ' id='exp'>
      <h3 className='secHead text-2xl text-center sm:ml-0 mx-auto sm:mx-0 font-bold text-gray-200 pb-12'>Experience</h3>
      <div className=' expSec w-[90%]  sm:mx-auto'>
        {
          exp.map((item, index) => {
            return (
              <div className='step '>
                <div className='circle'>{index + 1}</div>
                <div className='content text-white'>
                  <h2 className='text-3xl font-bold'>{item?.comp}</h2>
                  <h3 className='text-sm font-bold text-gray-300'>{item.role}&nbsp;&nbsp;&nbsp;{item.duration} </h3>
                  <p className='text-gray-400'>{item?.desc}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Expe
