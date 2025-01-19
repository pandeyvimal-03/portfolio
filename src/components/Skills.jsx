"use client"
import React from 'react'
import "../assets/css/skills.css"

function Skills() {
    let skillAr1 = ["React", "NextJS", "Javascript", "Node JS",  "HTML", "CSS", "Tailwind CSS", "MUI", "Bootstrap", "Shadcn", "Accertinity UI", "HTML5", "React", "NextJS", "Javascript", "Node JS",  "HTML", "CSS", "Tailwind CSS", "MUI", "Bootstrap", "Shadcn", "Accertinity UI", "HTML5"]

    let skillAr2 = ["Docker", "AWS", "MongoDB", "SQL", "PostgreSQL", "MySQL", "Express", "BullMQ", "Nginx", "Linux", "AWS S3", "Jenkins", "CI/CD", "Docker", "AWS", "MongoDB", "SQL", "PostgreSQL", "MySQL", "Express", "BullMQ", "Nginx", "Linux", "AWS S3", "Jenkins", "CI/CD"]

    return (
        <div className='w-[100vw] sm:w-[82vw] h-auto pl-2 sm:pl-6 mx-auto  sm:py-20  mt-8 ' id='skills'>
            <div className="section-heading ">
                <span className="line"></span>
                <span className="content text-4xl text-left font-bold text-gray-300 pb-8">Skills</span>
                <span className="line"></span>
            </div>
            <h3 className='secHead sm:hidden text-2xl text-left mx-auto sm:ml-16 font-bold text-gray-300 pb-8'>Skills</h3>
            <div className=''>
                <div className="rc-carousel " style={{ "--tiles": skillAr1.length }}>
                    <div className="rc-carousel-strip">
                        <div className="rc-carousel-box">

                            {
                                skillAr1?.map((item) => {
                                    return (
                                        <div className="rc-carousel-item ">
                                            <span className="rc-carousel-item-image  flex items-center justify-center font-bold text-md bg-[#008000] text-white rounded-sm text-center">{item}</span>
                                        </div>
                                    )
                                })
                            }

                            {
                                skillAr1?.map((item) => {
                                    return (
                                        <div className="rc-carousel-item " area-hidden="true">
                                            <span className="rc-carousel-item-image  flex items-center justify-center font-bold text-md bg-[#008000] text-white rounded-sm text-center">{item}</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

                {/* row - 2 */}
                <div className="rc-carousel  mt-2" style={{ "--tiles": skillAr2.length }}>
                    <div className="rc-carousel-strip reverse">
                        <div className="rc-carousel-box">
                            {
                                skillAr2?.map((item) => {
                                    return (
                                        <div className="rc-carousel-item ">
                                            <span className="rc-carousel-item-image  flex items-center justify-center font-bold text-md bg-[#008000] text-white rounded-sm text-center">{item}</span>
                                        </div>
                                    )
                                })
                            }

                            {
                                skillAr2?.map((item) => {
                                    return (
                                        <div className="rc-carousel-item " area-hidden="true">
                                            <span className="rc-carousel-item-image  flex items-center justify-center font-bold text-md bg-[#008000] text-white rounded-sm text-center">{item}</span>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>

                {/* ---------- row 3 --------------- */}
                <div className="rc-carousel " style={{ "--tiles": skillAr1.length }}>
                    <div className="rc-carousel-strip">
                        <div className="rc-carousel-box">

                            {
                                skillAr1?.map((item) => {
                                    return (
                                        <div className="rc-carousel-item ">
                                            <span className="rc-carousel-item-image  flex items-center justify-center font-bold text-md bg-[#008000] text-white rounded-sm text-center">{item}</span>
                                        </div>
                                    )
                                })
                            }

                            {
                                skillAr1?.map((item) => {
                                    return (
                                        <div className="rc-carousel-item " area-hidden="true">
                                            <span className="rc-carousel-item-image  flex items-center justify-center font-bold text-md bg-[#008000] text-white rounded-sm text-center">{item}</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Skills
