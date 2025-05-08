import React from "react";
import { Link } from "react-router-dom";

export default function Home({ darkMode }) {
  return (
    <main className={`pt-24 px-6 min-h-screen ${darkMode ? "bg-[#1a1a1a] text-white" : "bg-white text-[#1a1a1a]"}`}>
      {/* Proyectos */}
      <section  data-aos="fade-up">
        <h2  data-aos="fade-down" className={`text-4xl font-bold mb-10 text-center transition-colors ${darkMode ? "text-white" : "text-[#1a1a1a]"}`}>
          My project
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Proyecto 1 */}
          <div  data-aos="zoom-in" data-aos-delay="0" className={`relative group rounded-xl shadow-md overflow-hidden transition-transform duration-500 ease-in-out hover:scale-105 ${darkMode ? "bg-[#2a2a2a]" : "bg-gray-100"}`}>
            <Link to="/projects/project1">
              {/* Imagen del proyecto */}
              <img
                src="/img/bralotattoo.png"
                alt="Proyecto Bralo Tattoo"
                className="w-full h-full object-cover aspect-video transition-transform duration-300 ease-in-out"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-xl font-bold mb-2">Bralo Tattoo</h3>
               </div>
            </Link>
          </div>

          {/* Proyecto 2 */}
          <div data-aos="zoom-in" data-aos-delay="100" className={`relative group rounded-xl shadow-md overflow-hidden transition-transform duration-500 ease-in-out hover:scale-105 ${darkMode ? "bg-[#2a2a2a]" : "bg-gray-100"}`}>
            {/* Link al proyecto */}                             
            <Link to="/projects/project2">
              {/* Imagen del proyecto */}
              <img
                src="/img/hype-gear-ecommerce.png"
                alt="Imagen Hype Gear - Ecommerce"
                className="w-full h-full object-cover aspect-video transition-transform duration-300 ease-in-out"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-xl font-bold mb-2">Hype Gear - Ecommerce</h3>
                
              </div>
            </Link>
          </div>

          {/* Proyecto 3 */}
          <div data-aos="zoom-in" data-aos-delay="200"  className={`relative group rounded-xl shadow-md overflow-hidden transition-transform duration-500 ease-in-out hover:scale-105 ${darkMode ? "bg-[#2a2a2a]" : "bg-gray-100"}`}>
            {/* Link al proyecto */}
            <Link to="/projects/project3">
              {/* Imagen del proyecto */}
              <img
                src="/img/pagina-puroarte.png"
                alt="Proyecto 3"
                className="w-full h-full object-cover aspect-video transition-transform duration-300 ease-in-out"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-xl font-bold mb-2">Puro Arte - Landing Page</h3>
                
              </div>
            </Link>
          </div>

          {/* Proyecto 4 */}
          <div data-aos="zoom-in" data-aos-delay="300" className={`relative group rounded-xl shadow-md overflow-hidden transition-transform duration-500 ease-in-out hover:scale-105 ${darkMode ? "bg-[#2a2a2a]" : "bg-gray-100"}`}>
            {/* Link al proyecto */}
            <Link to="/projects/project4">
              {/* Imagen del proyecto */}
              <img
                src="/img/emanuel-png.png"
                alt="Emanuel Personal Trainer"
                className="w-full h-full object-cover aspect-video transition-transform duration-300 ease-in-out"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-xl font-bold mb-2">Emanuel F. Spanh - Personal Trainer</h3>
                
              </div>
            </Link>
          </div>

          {/* Proyecto 5 */}
          <div  data-aos="zoom-in" data-aos-delay="300" className={`relative group rounded-xl shadow-md overflow-hidden transition-transform duration-500 ease-in-out hover:scale-105 ${darkMode ? "bg-[#2a2a2a]" : "bg-gray-100"}`}>
            {/* Link al proyecto */}
            <Link to="/projects/project5">
              {/* Imagen del proyecto */}
              <img
                src="/img/project5.png"
                alt="Proyecto 5"
                className="w-full h-full object-cover aspect-video transition-transform duration-300 ease-in-out"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-xl font-bold mb-2">Project 5</h3>
                
              </div>
            </Link>
          </div>

          {/* Proyecto 6 */}
          <div data-aos="zoom-in" data-aos-delay="300" data-aos-duration="1000" className={`relative group rounded-xl shadow-md overflow-hidden transition-transform duration-500 ease-in-out hover:scale-105 ${darkMode ? "bg-[#2a2a2a]" : "bg-gray-100"}`}>
            {/* Link al proyecto */}
            <Link to="/projects/project6">
              {/* Imagen del proyecto */}
              <img
                src="/img/project6.png"
                alt="Proyecto 6"
                className="w-full h-full object-cover aspect-video transition-transform duration-300 ease-in-out"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-xl font-bold mb-2">Project 6</h3>
                
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
