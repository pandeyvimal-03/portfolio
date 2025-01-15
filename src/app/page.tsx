"use client"
import React , {useRef} from "react"
import Image from "next/image";
import { pdfjs } from "react-pdf";
import HeroSection from "@/components/HeroSection";
import Header from "@/components/Header";
import Expe from "@/components/Expe";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certification from "@/components/Certification";
import Contact from "@/components/Contact";
import Education from "@/components/Education";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function Home() {

 
  const aboutRef = useRef(null)
  const projRef = useRef(null)
  const skillRef = useRef(null)
  const expRef = useRef(null)
  const eduRef = useRef(null)

  const handlescroll = (section : any)=>{
       switch(section){
          
           case "about" : 
           break;

           case "skill" : 
           break;

           case "projects" : 
           break;

           case "education" : 
           break;

           case "exp" : 
           break;

           case  "contact" : 
           break;

       }
  }
  return (
   <React.Fragment>
      <div className="w-[100vw]">
           <Header handlescroll={handlescroll} />
           <HeroSection/>
           <Expe/>
           <Skills/>
           <Projects/>
           <Education/>
           <Certification/>
           <Contact/>
      </div>
   </React.Fragment>
  );
}
