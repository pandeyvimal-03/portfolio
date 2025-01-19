import React from 'react'
import '@/assets/css/loader.css'

function Loader() {
    return (
        // <div className='flex w-[100vw] h-[100vh] items-center justify-center'>
        //      <h2 className='font-bold text-white text-2xl text-center'>Loading....</h2>
        // </div>
        <div className="loader">
            <div className='loader-ring'>
                <p className="loader-text">Preparing to Launch</p>
                <div className='loader-ring-light'></div>
                <div className='loader-ring-track'></div>
            </div>
        </div>
    )
}

export default Loader
