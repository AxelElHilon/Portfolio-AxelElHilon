import React from "react";

export default function Project1({ darkMode }) {
  return (
    <main
      className={`pt-24 px-6 min-h-screen ${
        darkMode ? "bg-[#1a1a1a] text-white" : "bg-white text-[#1a1a1a]"
      }`}
    >
      <h1 className="text-4xl font-bold mb-6">Bralo Tattoo</h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">🎯 Objetivo</h2>
        <p>
          Crear una landing page para Bralo Tattoo, un tatuador especializado en
          estilos Japonés Tradicional y Old School. El sitio busca mostrar sus
          cuadros a la venta y ofrecer contacto directo a través de WhatsApp.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">🔍 Investigación UX</h2>
        <p>
          Se analizaron otras webs de tatuadores, especialmente aquellos con
          enfoque en estilo tradicional. Se buscó un diseño simple que no
          compita con las obras del artista, priorizando la estética limpia y
          accesos directos a sus redes sociales.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">🖌️ Diseño UI</h2>
        <p>
          La interfaz fue pensada con colores neutros y oscuros que enmarquen
          las imágenes de los cuadros. Se incluyó el logo original de Bralo y
          se planificó aplicar TailwindCSS al final para modernizar el diseño.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">💻 Desarrollo</h2>
        <p>
          Utilicé React.js para crear componentes reutilizables, como una
          galería de cuadros, íconos de contacto directo y estructura responsive.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">🚀 Resultado Final</h2>
        <a
          href="https://tattoo-bralo.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#65c1e4] underline"
        >
          Ver proyecto en vivo
        </a>
      </section>
    </main>
  );
}
