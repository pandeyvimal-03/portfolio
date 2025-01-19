"use client"
import React, { useEffect, useState } from "react"
import { pdfjs } from "react-pdf";
import HeroSection from "@/components/HeroSection";
import Header from "@/components/Header";
import Expe from "@/components/Expe";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certification from "@/components/Certification";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Loader from "@/components/Loader";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function Home() {
     const [showLoader, setLoader] = useState(true)
     useEffect(() => {
          const tId = setTimeout(() => {
               setLoader(false)
          }, 3000)

          return () => {
               clearTimeout(tId)
          }
     })

     return (
          <React.Fragment>
               <div className=" main w-[100vw]">
                    {
                         showLoader ? <Loader /> : (
                              <>
                                   <Header />
                                   <HeroSection />
                                   <Expe />
                                   <Skills />
                                   <Projects />
                                   <Education />
                                   <Certification />
                                   <Contact />
                              </>
                         )
                    }

               </div>
          </React.Fragment>
     );
}
