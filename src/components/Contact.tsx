import React from 'react'

function Contact() {
    return (
        <div className='w-[95vw] sm:w-[82vw] h-auto pl-6 mx-auto pt-8 py-16 sm:py-16 sm:pt-0 pb-16'>
            <h3 className='secHead sm:hidden text-2xl text-left mx-auto sm:ml-16 font-bold text-gray-300 pb-8'>Let's Connect</h3>
            <div className="section-heading">
                <span className="line"></span>
                <span className="content text-4xl text-left font-bold text-gray-300 pb-8">Let's Connect</span>
                <span className="line"></span>
            </div>
            <div className=' w-[100%] sm:w-auto flex items-center justify-center'>
                <form action="" className='sm:px-4 py-2 w-[100%] sm:w-[80%]  flex flex-col sm:flex-row flex-wrap gap-4 items-center justify-center'>
                    <label htmlFor='name' className='text-gray-400 w-[95%] sm:w-[40%] flex flex-col flex-wrap'>
                        <span>Name</span>
                        <input type="text" id='name' className=" w-[100%] outline-none  bg-transparent border rounded-md px-4 py-2 bg-none border-green-500" />
                    </label>
                    <label htmlFor='email' className='text-gray-400 w-[95%] sm:w-[40%] flex flex-col'>
                        <span>Email</span>
                        <input type="text" id='email' className=" w-[100%] outline-none  bg-transparent border rounded-md px-4 py-2 bg-none border-green-500" />
                    </label>
                    <label htmlFor='msg' className='text-gray-400 w-[95%] sm:w-[82%] flex flex-col'>
                        <span>Message</span>
                        <textarea  id='msg' rows={8} className=" w-[100%]  outline-none  bg-transparent border  border-green-500 rounded-md px-8 py-2 bg-none" />
                    </label>
                    <div className='w-[80%] text-left'>
                       <button className=' w-[95%] sm:w-[20%] px-4 py-2 text-white bg-green-700 rounded-md'>Send Message</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Contact
