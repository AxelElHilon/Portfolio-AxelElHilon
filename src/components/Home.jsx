import React from "react";
import { Link } from "react-router-dom";
import htmlLogo from "../assets/html-logo.png";
import cssLogo from "../assets/css-logo.png";
import jsLogo from "../assets/javascript-logo.png";
import reactLogo from "../assets/react-logo.png";
import bootstrapLogo from "../assets/bootstrap-logo.png";
import tailwindLogo from "../assets/tailwind.png";
import "../App.css";

export default function Home({ darkMode }) {
  return (
    <main className={`pt-24 px-6 min-h-screen pb-32 ${darkMode ? "bg-[#1a1a1a] text-white" : "bg-white text-[#1a1a1a]"}`}>
      {/* Contenedor principal: Texto */}
        <section className="text-center mb-16" data-aos="fade-up">
          <h1 className="text-5xl font-bold mb-4">Hola, soy <span className="text-[#65c1e4]">Axel</span></h1>
          <p className="text-lg opacity-80">
            Frontend Developer & UX/UI Designer enfocado en crear interfaces claras, funcionales y con estilo propio 💻🎨
          </p>
        </section>

         {/*Tecnologías que uso */}

         <section className="mb-20" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-center mb-10">⚙️ Tecnologías que manejo</h2>
          <div className="flex flex-wrap justify-center gap-8 px-4">
            {[
              { name: "HTML", src: htmlLogo, delay: 0 },
              { name: "CSS", src: cssLogo, delay: 100 },
              { name: "JavaScript", src: jsLogo, delay: 200 },
              { name: "React", src: reactLogo, delay: 300 },
              { name: "Bootstrap", src: bootstrapLogo, delay: 400 },
              { name: "Tailwind", src: tailwindLogo, delay: 500 }
            ].map((skill) => (
              <div
                key={skill.name}
                data-aos="zoom-in"
                data-aos-delay={skill.delay}
                className="flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300"
              >
                <img
                  src={skill.src}
                  alt={skill.name}
                  className="w-16 h-16 sm:w-20 sm:h-20 object-contain drop-shadow-md hover:drop-shadow-xl"
                />
                <span className="text-sm sm:text-base font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </section>

      {/* Línea divisoria */}

        <div className="relative h-[3px] w-32 mx-auto my-12 overflow-hidden">
          <div className="absolute h-full w-1/2 bg-[#65c1e4] rounded-full animate-loading-line"></div>
        </div>

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

      {/* Línea divisoria */}

      <div className="relative h-[3px] w-32 mx-auto my-12 overflow-hidden">
        <div className="absolute h-full w-1/2 bg-[#65c1e4] rounded-full animate-loading-line"></div>
      </div>

      <section className="w-full py-10 px-6 mt-15 mb-10" data-aos="fade-up">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-[#65c1e4]">🚀 ¿Trabajamos juntos?</h2>
          <p className={`text-lg mb-8 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
        Estoy disponible para proyectos freelance, colaboraciones creativas o ideas que quieras convertir en realidad.
      </p>
      <a
        href="https://wa.me/5491123868058?text=Hola%20Axel%2C%20vi%20tu%20portfolio%20y%20me%20gustar%C3%ADa%20hablar%20sobre%20un%20proyecto.%20%F0%9F%92%AA"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-[#0C2C40] hover:bg-[#17394d] text-white font-medium py-3 px-8 rounded-full border border-[#65c1e4] transition-all duration-300 shadow-sm"
      >
        💬 Hablemos por WhatsApp
      </a>
        </div>
      </section>


    </main>
  );
}
