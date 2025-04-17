import React from "react";

export default function About({ darkMode }) {
  return (
    <main
    className={`pt-24 px-6 pb-20 min-h-screen transition-colors duration-300 ${
      darkMode ? "bg-[#1a1a1a] text-white" : "bg-white text-[#1a1a1a]"
    }`}
  >
      <section className="max-w-5xl mx-auto">
        {/* Contenedor principal: Imagen + Texto */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
          {/* Imagen */}
          <img
            src="/img/axel.jpg"
            alt="Axel Adrian El Hilon"
            className="w-40 h-40 rounded-full object-cover shadow-lg"
          />

          {/* Texto */}
          <div className="flex flex-col items-center gap-2 ">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight">
              Axel Adrian El Hilon
            </h1>
            <h2
              className={`text-md md:text-lg font-medium ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              UX/UI Designer & Front End Developer
            </h2>

            {/* Mini biografía en párrafos separados */}
            <p
              className={`text-lg max-w-xl mt-2 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Soy diseñador UX/UI y desarrollador Frontend con pasión por crear
              experiencias digitales que realmente conecten con las personas.
            </p>
            <p
              className={`text-lg max-w-xl ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Me especializo en React, JavaScript, HTML y CSS.
            </p>
            <p
              className={`text-lg max-w-xl ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Actualmente estoy desarrollando proyectos propios mientras sigo
              creciendo como profesional.
            </p>
          </div>
        </div>

        <div className="w-16 h-[2px] bg-[#65c1e4] mx-auto my-10"></div>

        {/* Certificaciones */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-6">Certificaciones</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 place-items-center">
            {/* Carrera Front End */}
            <a
              href="https://pub.coderhouse.com/legacy-certificates/67f4b9102431e2a8168d8ae5?lang=es"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 transition-transform hover:scale-105"
            >
              <img
                src="/img/coderhouse-logo.png"
                alt="CoderHouse"
                className="w-16 h-16"
              />
              <span className="text-sm hover:underline">Carrera Front End</span>
            </a>

            {/* Desarrollo Web */}
            <a
              href="https://pub.coderhouse.com/legacy-certificates/6764a0cb9f7020f0171959f9?lang=es"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 transition-transform hover:scale-105"
            >
              <img
                src="/img/coderhouse-logo.png"
                alt="CoderHouse"
                className="w-16 h-16"
              />
              <span className="text-sm hover:underline">Desarrollo Web</span>
            </a>

            {/* JavaScript */}
            <a
              href="https://pub.coderhouse.com/legacy-certificates/67a7d8589f7020f017195edf?lang=es"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 transition-transform hover:scale-105"
            >
              <img
                src="/img/coderhouse-logo.png"
                alt="CoderHouse"
                className="w-16 h-16"
              />
              <span className="text-sm hover:underline">JavaScript</span>
            </a>

            {/* React JS */}
            <a
              href="https://pub.coderhouse.com/legacy-certificates/67f469d5395778cf5f777c20?lang=es"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 transition-transform hover:scale-105"
            >
              <img
                src="/img/coderhouse-logo.png"
                alt="CoderHouse"
                className="w-16 h-16"
              />
              <span className="text-sm hover:underline">React JS</span>
            </a>

            {/* Google UX */}
            <a
              href="https://coursera.org/share/42d6706deb897c3bad2102b75b4ddb68"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 transition-transform hover:scale-105"
            >
              <img
                src="/img/google-logo.png"
                alt="Google"
                className="w-16 h-16"
              />
              <span className="text-sm hover:underline">
                Fundamentos de UX
              </span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
