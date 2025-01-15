import React from "react";
import Image from "next/image";
import NamasteDev from "../assets/images/namastedev.png";
import CourseraImg from "../assets/images/coursera.png";

function Certification() {
  const certifications = [
    {
      image: CourseraImg,
      title: "Backend With Node.JS and Express",
      link: "https://coursera.org/share/b4873298122107c5768a8dda74cbc78e",
    },
    {
      image: CourseraImg,
      title: "Frontend Development",
      link: "https://coursera.org/share/07c4fa7f4dbec25ed1636b67371049bb",
    },
    {
      image: NamasteDev,
      title: "Namaste React By Akshay Saini",
      link: "https://namastedev.com/pandeyvimal2002/certificates/namaste-react",
    },
    {
      image: NamasteDev,
      title: "Namaste JavaScript By Akshay Saini",
      link: "https://namastedev.com/pandeyvimal2002/certificates/namaste-javascript",
    },
  ];

  return (
    <div className='w-[95vw] sm:w-[80vw] h-auto sm:h-[90vh] pl-6 sm:pl-8 mx-auto  pt-8 pb-4 '>
      {/* <h3 className='secHead text-4xl text-center ml-16  font-bold text-gray-300 pb-12'>Certifications</h3> */}
      <h3 className='secHead text-2xl text-center mx-auto ml-0 sm:ml-16  font-bold text-gray-200 pb-12'>Certifications</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="bg-[#111c22] w-[90%] sm:w-[280px] mx-auto rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition duration-300"
          >
            <Image
              src={cert.image}
              alt="Certification Image"
              className="h-[120px] w-full object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold text-sm text-gray-200 mb-2">
                {cert.title}
              </h3>
              <button
                onClick={() => window.open(cert.link)}
                className="rounded px-3 py-1 text-xs text-white bg-green-600 hover:bg-green-700 transition"
              >
                View Certificate
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certification;
