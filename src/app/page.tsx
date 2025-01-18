"use client"
import React  from "react"
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

  return (
   <React.Fragment>
      <div className="w-[100vw]">
           <Header  />
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
