import React, { useState } from "react";
import { FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function Contact({ darkMode }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    fetch("https://formspree.io/f/xwplagae", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          setSubmitted(true);
          form.reset();
          setTimeout(() => setSubmitted(false), 5000);
        } else {
          alert("Hubo un error al enviar el formulario.");
        }
      })
      .catch(() => alert("Error de conexión"));
  };

  return (
    <main
      className={`pt-24 px-6 min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-[#1a1a1a] text-white" : "bg-white text-[#1a1a1a]"
      }`}
    >
      <section className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-4">¡Hablemos!</h1>
        <p className="mb-8 text-lg">
          Si tenés una idea, un proyecto, o simplemente querés charlar de diseño
          y código, escribime 👇
        </p>

        {submitted && (
          <div className="mb-6 p-4 rounded-md bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
            ¡Gracias por tu mensaje! Pronto me pondré en contacto 😊
          </div>
        )}

        <form className="grid gap-6 text-left" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Tu nombre"
            required
            className="p-3 rounded-md border border-gray-300 dark:border-gray-600 bg-transparent"
          />
          <input
            type="email"
            name="email"
            placeholder="Tu email"
            required
            className="p-3 rounded-md border border-gray-300 dark:border-gray-600 bg-transparent"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Tu mensaje"
            required
            className="p-3 rounded-md border border-gray-300 dark:border-gray-600 bg-transparent"
          ></textarea>
          <button
            type="submit"
            className="bg-[#1a1a1a] text-white py-2 px-6 rounded-md hover:bg-[#333] transition-colors dark:bg-white dark:text-[#1a1a1a] dark:hover:bg-gray-300"
          >
            Enviar
          </button>
        </form>

        <div className="flex justify-center gap-6 mt-12 text-2xl">
          <a
            href="https://www.linkedin.com/in/axel-el-hilon"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors"
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
            href="https://wa.me/5491123868058"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 transition-colors"
          >
            <FaWhatsapp />
          </a>
        </div>
      </section>
    </main>
  );
}
