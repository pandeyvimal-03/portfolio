"use client"
import React, { useState } from 'react'
import {motion} from 'framer-motion'
import { leftAnimation , rightAnimation } from '@/assets/variants/variants'
import Image from 'next/image'
import PImage from "../assets/images/portfolio_v_image_m.png"
import { Typewriter } from 'react-simple-typewriter'
import { Document, Page } from "react-pdf";
import  "../assets/css/herosec.css"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogTitle,
    DialogDescription,
} from '@/components/ui/dialog'

function HeroSection() {
    const [isOpen, setIsOpen] = useState(false)
    const [numPages, setNumPages] = useState(null);

    // Handle PDF loading success
    const onDocumentLoadSuccess = ({ numPages }: any) => {
        setNumPages(numPages);
    };

   

    return (
        <div className='herosec h-[60vh] sm:h-[80vh] w-[95vw] sm:w-[100%]  flex items-center justify-around ' id='about'>
            <motion.div 
                variants={leftAnimation}
                initial="hidden"
                animate="show"
               className=''
            >
                <div>
                    <h2 className='text-center sm:text-left font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white'>Hey, I'm Vimal Pandey </h2>
                    <h3 className='text-center sm:text-left text-2xl font-extrabold sm:text-3xl text-green-500'>I'm a
                        <Typewriter
                            words={[' Fullstack Developer', ' Frontend Developer', ' Backend Developer']}
                            loop={0}
                            cursorStyle="<span style='color: green;'>|</span>"
                            cursorColor='green'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </h3>
                    <br />
                    <p className='text-center sm:text-left text-gray-400 font-bold mb-4 text-md'>I've spent the last 2 years building and scaling software for same preety cool <br /> companies. I also teach people to paint online.</p>
                </div>
                <div className='text-center sm:text-left'>
                    <button className='px-6 py-2 border border-green-600 rounded-sm font-bold text-white mr-2 hover:bg-[#101c26] hover:text-white' onClick={() => setIsOpen(true)}>View Resume</button>
                    {/* <button className='px-6 py-2 border border-green-600 rounded-sm font-bold text-white hover:bg-[#101c26] hover:text-white transition-all'>Download Resume</button> */}
                    <a href="/resume.pdf" download="Vimal_Pandey_Resume.pdf">
                        <button className='px-6 py-2 border border-green-600 rounded-sm font-bold text-white hover:bg-[#101c26] hover:text-white transition-all'>
                            Download Resume
                        </button>
                    </a>
                </div>
            </motion.div>
            <motion.div
               variants={rightAnimation}
               initial="hidden"
               animate="show" 
               className=''
            >
                <Image src={PImage} alt="" className='h-[270px] w-[270px] rounded-full border-green-500 border-2 mx-auto shadow-[0_0_20px_rgba(34,197,94,0.8)]' />
            </motion.div>

            {/* Dialgo section */}
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent className="DialogContent bg-[#0b131a] text-white sm:p-6 rounded-md shadow-lg border border-green-700 max-w-[95vw] sm:max-w-[550px] h-[60vh] sm:h-[90vh] ">
                    <DialogTitle className="text-2xl font-bold">My Resume</DialogTitle>
                    <DialogDescription className="mt-2 text-gray-300">
                        Here's a preview of my resume. You can download it for more details!
                    </DialogDescription>
                    <div className="max-h-[50vh] overflow-auto">
                        {/* Replace with your resume content */}
                        {/* <p className="text-gray-400">[Resume Preview Content Goes Here]</p> */}
                        <Document file='/resume.pdf' onLoadSuccess={onDocumentLoadSuccess}>

                            <Page
                                key={1}
                                pageNumber={1}
                                renderTextLayer={false}
                                renderAnnotationLayer={false}
                                className="w-auto max-h-[55vh] object-contain overflow-auto"
                                scale={0.8}
                            />

                        </Document>
                    </div>
                    <div className='w-[100%] '>
                        <DialogClose asChild>
                            <button
                                className="mt-2 px-8 py-2 bg-green-600 text-white rounded hover:bg-green-500"
                                onClick={() => setIsOpen(false)}
                            >
                                Close
                            </button>
                        </DialogClose>
                        {/* <button className="mt-2 mx-4 px-8 py-2 bg-green-600 text-white rounded hover:bg-green-500">Download</button> */}
                        <a href="/resume.pdf" download="Vimal_Pandey_Resume.pdf">
                        <button className="mt-2 mx-4 px-8 py-2 bg-green-600 text-white rounded hover:bg-green-500">
                            Download Resume
                        </button>
                    </a>
                    </div>

                </DialogContent>
            </Dialog>

        </div>
    )
}

export default HeroSection
