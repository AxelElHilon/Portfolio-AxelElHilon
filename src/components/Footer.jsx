import React from "react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer({ darkMode }) {
  return (
    <footer
    className={`mt-12 py-6 text-center border-t ${
      darkMode
        ? "bg-[#111] text-gray-400 border-gray-800"
        : "bg-gray-100 text-gray-600 border-gray-300"
    }`}
  >
      <div className="max-w-4xl mx-auto px-4">
        <p className="text-sm mb-2">
          © {new Date().getFullYear()} Axel Adrian El Hilon · Todos los derechos reservados.
        </p>
        <div className="flex justify-center gap-6 mt-2 text-xl">
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
        </div>
      </div>
    </footer>
  );
}
