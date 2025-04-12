import React from "react";
import { Link } from "react-router-dom";

export default function Home({ darkMode }) {
  return (
    <main className={`pt-24 px-6 min-h-screen ${darkMode ? "bg-[#1a1a1a] text-white" : "bg-white text-[#1a1a1a]"}`}>
      {/* Proyectos */}
      <section>
        <h2 className={`text-4xl font-bold mb-10 text-center transition-colors ${darkMode ? "text-white" : "text-[#1a1a1a]"}`}>
          My project
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Proyecto 1 */}
          <div
            className={`relative group rounded-xl shadow-md overflow-hidden transition-transform duration-500 ease-in-out hover:scale-105 ${darkMode ? "bg-[#2a2a2a]" : "bg-gray-100"}`}
          >
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
          <div
            className={`relative group rounded-xl shadow-md overflow-hidden transition-transform duration-500 ease-in-out hover:scale-105 ${darkMode ? "bg-[#2a2a2a]" : "bg-gray-100"}`}
          >
            <Link to="/projects/project2">
              {/* Imagen del proyecto */}
              <img
                src="/img/project2.png"
                alt="Proyecto 2"
                className="w-full h-full object-cover aspect-video transition-transform duration-300 ease-in-out"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-xl font-bold mb-2">Project 2</h3>
                
              </div>
            </Link>
          </div>

          {/* Proyecto 3 */}
          <div
            className={`relative group rounded-xl shadow-md overflow-hidden transition-transform duration-500 ease-in-out hover:scale-105 ${darkMode ? "bg-[#2a2a2a]" : "bg-gray-100"}`}
          >
            <Link to="/projects/project3">
              {/* Imagen del proyecto */}
              <img
                src="/img/project3.png"
                alt="Proyecto 3"
                className="w-full h-full object-cover aspect-video transition-transform duration-300 ease-in-out"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-xl font-bold mb-2">Project 3</h3>
                
              </div>
            </Link>
          </div>

          {/* Proyecto 4 */}
          <div
            className={`relative group rounded-xl shadow-md overflow-hidden transition-transform duration-500 ease-in-out hover:scale-105 ${darkMode ? "bg-[#2a2a2a]" : "bg-gray-100"}`}
          >
            <Link to="/projects/project4">
              {/* Imagen del proyecto */}
              <img
                src="/img/project4.png"
                alt="Proyecto 4"
                className="w-full h-full object-cover aspect-video transition-transform duration-300 ease-in-out"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-xl font-bold mb-2">Project 4</h3>
                
              </div>
            </Link>
          </div>

          {/* Proyecto 5 */}
          <div
            className={`relative group rounded-xl shadow-md overflow-hidden transition-transform duration-500 ease-in-out hover:scale-105 ${darkMode ? "bg-[#2a2a2a]" : "bg-gray-100"}`}
          >
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
          <div
            className={`relative group rounded-xl shadow-md overflow-hidden transition-transform duration-500 ease-in-out hover:scale-105 ${darkMode ? "bg-[#2a2a2a]" : "bg-gray-100"}`}
          >
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
