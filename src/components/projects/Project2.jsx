import React from "react";
import mockupImage from "../../assets/hypegear-mockup.png";

export default function Project2({ darkMode }) {
  return (
    <main
      className={`pt-24 px-6 min-h-screen ${
        darkMode ? "bg-[#1a1a1a] text-white" : "bg-white text-[#1a1a1a]"
      }`}
    >
      <h1 className="text-4xl font-bold mb-6">🧢 Hype Gear - E-commerce de moda urbana</h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">🎯 Objetivo</h2>
        <p>
          Crear una tienda online moderna, rápida y accesible para vender ropa urbana bajo la marca Hype Gear.
          El foco estuvo en lograr una experiencia clara para el usuario, con navegación fluida, catálogo intuitivo
          y una estética visual fuerte ligada a la identidad de marca.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">🔍 Investigación UX</h2>
        <p>
          Se analizaron e-commerces como Nike, Adidas y marcas de streetwear independientes para identificar
          patrones exitosos: uso del espacio, organización de productos, información destacada y experiencia mobile-first.
          También se consultaron referencias visuales en Behance y Dribbble para definir el tono visual.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">🖌️ Diseño UI</h2>
        <p>
          Se usó un diseño minimalista con contraste alto, tipografía fuerte y estructura clara. La paleta se centró en blanco, negro y gris, 
          con toques sutiles en botones y promociones. Se diseñaron los wireframes de las secciones clave (inicio, catálogo, sobre nosotros, carrito)
          y se pensó en responsive desde el principio.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">💻 Desarrollo</h2>
        <p>
          El proyecto fue desarrollado con React y Vite, integrando React Router para la navegación de secciones.
          Se utilizó Tailwind CSS para estilado rápido y flexible. Se implementó un sistema de carrito con contexto,
          se integraron imágenes optimizadas, y se adaptó el menú hamburguesa para mobile. También se resolvieron errores
          en el build y se organizó el proyecto para un deploy limpio en Vercel.
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
        <p>
          Hype Gear ya está online, listo para escalar con nuevas funcionalidades como wishlist, login y gestión de órdenes.
          El código está limpio, modular y optimizado para escalar en el futuro. Las decisiones de diseño UX/UI aplicadas
          lograron un sitio visualmente atractivo y funcional.
        </p>
        <a
          href="https://hypegear-ecommerce.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#65c1e4] underline block mt-2"
        >
          Ver proyecto en vivo
        </a>
        <a
          href="https://github.com/AxelElHilon/hypegear-ecommerce.git"
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
