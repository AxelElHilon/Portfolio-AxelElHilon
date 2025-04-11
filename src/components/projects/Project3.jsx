import React from "react";

export default function Project3() {
  return (
    <main className="pt-24 px-6 min-h-screen bg-white text-[#1a1a1a]">
      <h1 className="text-4xl font-bold mb-6">Nombre del Proyecto 3</h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">🎯 Objetivo</h2>
        <p>
          Breve descripción del objetivo del proyecto. ¿Qué buscabas resolver o mostrar con este proyecto?
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">🔍 Investigación UX</h2>
        <p>
          ¿Hiciste algún análisis de usuarios, comparaste otros sitios o apps, tomaste referencias visuales?
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">🖌️ Diseño UI</h2>
        <p>
          ¿Cómo encaraste el diseño? ¿Usaste Figma? ¿Qué estilo visual elegiste y por qué?
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">💻 Desarrollo</h2>
        <p>
          ¿Qué tecnologías usaste? ¿Tuviste algún desafío técnico? ¿Qué aprendiste haciendo este proyecto?
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">🚀 Resultado Final</h2>
        <a
          href="https://link-del-proyecto.vercel.app/"
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
