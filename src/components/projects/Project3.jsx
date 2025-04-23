import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Project3({ darkMode }) {
  const theme = darkMode ? "bg-[#1a1a1a] text-white" : "bg-white text-[#1a1a1a]";

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <main className={`pt-24 px-6 min-h-screen ${theme}`}>
      <h1 className="text-4xl font-bold mb-6 text-center" data-aos="fade-down">
        🎨 Portfolio Artístico – Pame
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Wireframes */}
        <section className="p-2" data-aos="fade-up">
          <h2 className="text-2xl font-semibold mb-4">🧩 Wireframes</h2>
          <img
            src="/img/wireframe-puroarte.png"
            alt="Wireframe Desktop"
            className="rounded-md mb-4 shadow-md"
            data-aos="zoom-in"
          />
          <img
            src="/img/wireframe-mobile.png"
            alt="Wireframe Mobile"
            className="rounded-md shadow-md"
            data-aos="zoom-in"
            data-aos-delay="200"
          />
        </section>

        {/* Proceso UX/UI */}
        <section className="p-2" data-aos="fade-up" data-aos-delay="400">
          <h2 className="text-2xl font-semibold mb-4">🧠 Proceso de Diseño</h2>
          <ul className="list-disc list-inside space-y-2 text-sm">
            <li data-aos="fade-right">Empatía: Investigación de portfolios artísticos y entrevistas informales.</li>
            <li data-aos="fade-right" data-aos-delay="100">Definición: Pame necesita un portfolio que hable por sus obras.</li>
            <li data-aos="fade-right" data-aos-delay="200">HMW: ¿Cómo podríamos mostrar su estilo sin distraer del arte?</li>
            <li data-aos="fade-right" data-aos-delay="300">Ideación: Moodboards, referencias, wireframes en Figma.</li>
            <li data-aos="fade-right" data-aos-delay="400">Prototipado: Diseño UI limpio y flexible, enfocado en imágenes.</li>
            <li data-aos="fade-right" data-aos-delay="500">Testeo: Feedback de usuarios reales y ajustes visuales.</li>
          </ul>
        </section>
      </div>

      {/* Links y resultado */}
      <section className="mt-12 text-center" data-aos="fade-up">
        <h2 className="text-2xl font-semibold mb-4">🚀 Proyecto Final</h2>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <a
            href="https://puraarte-landing-git-main-axelelhilons-projects.vercel.app/?fbclid=PAZXh0bgNhZW0CMTEAAaf-OgGwMzprvNBZO_NKEATtVN1J1G01wiRiflawM-b-sHBAum8UUlzS5PQC5A_aem_aDZDTsdaYFZpp7vcoPSwdA"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#65c1e4] text-white px-6 py-3 rounded-full shadow-md hover:bg-[#4aa4c2] transition"
            data-aos="zoom-in-up"
          >
            🌐 Ver Sitio en Vivo
          </a>
          <a
            href="https://github.com/AxelElHilon/puraarte-landing.git"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 text-white px-6 py-3 rounded-full shadow-md hover:bg-gray-700 transition"
            data-aos="zoom-in-up"
            data-aos-delay="300"
          >
            💻 Ver Código en GitHub
          </a>
        </div>
      </section>
    </main>
  );
}
