import React from "react";

export default function Project2() {
  return (
    <main className="pt-24 px-6 min-h-screen bg-white text-[#1a1a1a]">
      <h1 className="text-4xl font-bold mb-6">🎧 XWave - Landing Page Mobile First (En desarrollo)</h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">🎯 Objetivo</h2>
        <p>
          El objetivo de este proyecto es desarrollar una landing page responsive para promocionar los auriculares XWave,
          con especial énfasis en dispositivos móviles. El enfoque está en combinar una experiencia de usuario clara
          con un diseño visual atractivo y moderno.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">🔍 Investigación UX</h2>
        <p>
          Se realizó un análisis de páginas de producto similares en el mercado de tecnología (como JBL y Sony), observando
          cómo presentan sus productos, cómo estructuran la información y qué recursos visuales utilizan. También se tomó
          inspiración de sitios con diseños minimalistas y mobile-first.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">🖌️ Diseño UI</h2>
        <p>
          La interfaz utiliza una paleta de colores suaves y botones con acento azul (#007BFF), buscando generar
          contraste y claridad visual. Se aplicó tipografía Poppins y se cuidó el espaciado para garantizar legibilidad.
          El diseño está siendo iterado en Figma, con mejoras constantes.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">💻 Desarrollo</h2>
        <p>
          El proyecto se encuentra en desarrollo con tecnologías como HTML5, CSS3 y JavaScript puro. Ya se implementó
          una navegación fluida, un modal interactivo y animaciones que mejoran la experiencia del usuario. Se están
          sumando elementos de accesibilidad y preparando la integración con funcionalidades más avanzadas.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">🚀 Resultado Final</h2>
        <p>
          Esta es una versión en progreso. El proyecto continúa en desarrollo y seguirá recibiendo mejoras de diseño,
          usabilidad y performance.
        </p>
        <a
          href="https://x-wave-mini-project.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#65c1e4] underline block mt-2"
        >
          Ver proyecto en vivo (versión actual)
        </a>
        <a
          href="https://github.com/AxelElHilon/XWave-MiniProject"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#65c1e4] underline block mt-2"
        >
          Ver repositorio en GitHub
        </a>
      </section>
    </main>
  );
}
