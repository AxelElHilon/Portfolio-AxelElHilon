import React from "react";
import mockupImage from "../../assets/ema-cell.png";

export default function Project4({ darkMode }) {
  return (
    <main
      className={`pt-24 px-6 min-h-screen ${
        darkMode ? "bg-[#1a1a1a] text-white" : "bg-white text-[#1a1a1a]"
      }`}
    >
      <h1 className="text-4xl font-bold mb-6">Landing Page - Emanuel Spahn (Entrenador Personal)</h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">🎯 Objetivo</h2>
        <p>
          Desarrollar una landing page clara, moderna y funcional para Emanuel Spahn, un entrenador personal que busca ofrecer planes de entrenamiento personalizados. El objetivo fue presentar sus servicios, generar confianza con una identidad visual profesional y facilitar el contacto directo por WhatsApp.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">🔍 Investigación UX</h2>
        <p>
          Analicé sitios de entrenadores personales y servicios de fitness para entender qué tipo de estructura, lenguaje y jerarquía visual conectan mejor con usuarios interesados en salud. También consideré las necesidades de Emanuel y sus clientes: claridad en los planes, enfoque accesible, y facilidad de contacto desde dispositivos móviles.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">🖌️ Diseño UI</h2>
        <p>
          El diseño se realizó priorizando la simplicidad y el impacto visual. Utilicé una paleta basada en azul oscuro y naranja para transmitir profesionalismo y energía. Se usó tipografía moderna, iconografía clara, y elementos con bordes redondeados para reforzar una imagen cercana y profesional. El diseño fue trabajado desde cero en HTML y TailwindCSS, con un enfoque mobile-first.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">💻 Desarrollo</h2>
        <p>
          Desarrollado con Vite, HTML, JavaScript y TailwindCSS, el sitio incluye animaciones suaves, un sistema dinámico de paquetes con categorías y subniveles, carrito local, y generación automática de links personalizados de WhatsApp. Todo el código fue modularizado y optimizado para performance. Además, se implementaron efectos de scroll con AOS para mejorar la experiencia de navegación.
        </p>
      </section>
      {/* SECCIÓN MOCKUP*/}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">📱 Vista Mobile (Mockup)</h2>
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
          {/* Texto */}
          <div className="lg:w-1/2">
            <p className="mb-4">
              A continuación se muestra cómo luce la página en su versión móvil.
              Se utilizó un mockup con fondo transparente para resaltar la interfaz en
              diferentes contextos visuales, reforzando la estética profesional del diseño.
            </p>
            <p>
              Este tipo de presentación ayuda a visualizar la experiencia real del usuario final
              en dispositivos móviles, donde el enfoque mobile-first cobra protagonismo.
            </p>
          </div>

          {/* Imagen animada */}
          <div
            className="lg:w-1/2 transition-all duration-700 ease-in-out"
            data-aos="fade-left"
          >
            <img
              src={mockupImage}
              alt="Vista mobile de la landing"
              className="w-full max-w-md md:max-w-lg mx-auto rounded-xl drop-shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">🚀 Resultado Final</h2>
        <div className="flex flex-col gap-2">
          <a
            href="https://emanuel-personaltrainer.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#65c1e4] underline"
          >
            🔗 Ver proyecto en vivo
          </a>
          <a
            href="https://github.com/AxelElHilon/emanuel-personaltrainer.git"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#65c1e4] underline"
          >
            💻 Ver repositorio en GitHub
          </a>
        </div>
      </section>
    </main>
  );
}
