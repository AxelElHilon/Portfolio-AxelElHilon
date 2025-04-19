import React from "react";

export default function Project3({ darkMode }) {
  return (
    <main
      className={`pt-24 px-6 min-h-screen ${
        darkMode ? "bg-[#1a1a1a] text-white" : "bg-white text-[#1a1a1a]"
      }`}
    >
      <h1 className="text-4xl font-bold mb-6">Portfolio Artístico – Pame</h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">🎯 Objetivo</h2>
        <p>
          Crear una landing page profesional para Pame, una artista visual
          especializada en murales y cuadros personalizados. El objetivo fue mostrar su obra de forma visualmente atractiva, brindar
          contacto directo y reflejar su estilo artístico único.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">🔍 Investigación UX</h2>
        <p>
          Se analizaron portfolios de artistas contemporáneos para entender cómo
          presentan su trabajo. También se exploraron sitios de ilustradores y muralistas,
          priorizando una navegación simple, foco en imágenes y una estructura clara.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">🖌️ Diseño UI</h2>
        <p>
          Se diseñó una interfaz limpia y moderna, con paleta neutra que realza los colores vibrantes de sus obras.
          Se cuidó el espaciado y la jerarquía visual para que cada pieza respire. Las tipografías acompañan el estilo elegante y
          amigable de la artista. El diseño fue pensado en Figma antes de codificar.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">💻 Desarrollo</h2>
        <p>
          El sitio fue desarrollado con HTML, CSS puro y un poco de JavaScript para interacciones simples.
          Se utilizó Vite para mejorar el rendimiento y estructura del proyecto. Todo fue responsive desde el inicio, 
          pensando en celulares. Se organizaron los archivos en carpetas limpias: assets, components, styles.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">🚀 Resultado Final</h2>
        <a
          href="https://pame-spahn.vercel.app/"
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
