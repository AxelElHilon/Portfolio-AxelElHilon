import React from "react";
import { FaLinkedin, FaEnvelope, FaGithub, FaGlobe } from "react-icons/fa";

export default function Footer({ darkMode }) {
  return (
    <footer
      className={`mt-12 py-10 px-6 border-t text-sm ${
        darkMode
          ? "bg-[#111] text-gray-400 border-gray-800"
          : "bg-gray-100 text-gray-700 border-gray-300"
      }`}
    >
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">
        {/* About */}
        <div>
          <h4 className="text-base font-semibold mb-2">Axel Adrian El Hilon</h4>
          <p>
            Frontend Developer especializado en React, UX/UI y creación de experiencias web modernas. Apasionado por el diseño, la accesibilidad y los detalles que marcan la diferencia.
          </p>
        </div>

        {/* Links de contacto */}
        <div>
          <h4 className="text-base font-semibold mb-2">Contacto</h4>
          <ul className="space-y-1">
            <li>
              <a href="mailto:axelelhilon@gmail.com" className="hover:underline">
                📩 axelelhilon@gmail.com
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/axel-el-hilon" target="_blank" rel="noopener noreferrer" className="hover:underline">
                💼 LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/AxelElHilon" target="_blank" rel="noopener noreferrer" className="hover:underline">
                🖥️ GitHub
              </a>
            </li>
          </ul>
        </div>

        {/* Redes Sociales */}
        <div>
          <h4 className="text-base font-semibold mb-2">Redes</h4>
          <div className="flex justify-center md:justify-start gap-4 text-xl">
            <a
              href="https://www.linkedin.com/in/axel-el-hilon"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:axelelhilon@gmail.com"
              className="hover:text-red-500 transition-colors"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://github.com/AxelElHilon"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-800 dark:hover:text-white transition-colors"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      {/* Línea final */}
      <div className="mt-8 text-center text-xs text-gray-500 dark:text-gray-600">
        © {new Date().getFullYear()} Axel Adrian El Hilon · Hecho con amor, código y café ☕
      </div>
    </footer>
  );
}
