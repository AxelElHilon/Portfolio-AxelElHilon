import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Moon, Sun, Menu, X } from "lucide-react";
import logoBlanco from "/img/logo-blanco.png";
import logoNegro from "/img/logo-negro.png";


export default function Navbar({ darkMode, setDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleTheme = () => setDarkMode(!darkMode);

  const bgColor = darkMode ? "bg-[#1a1a1a]" : "bg-white";
  const textColor = darkMode ? "text-white" : "text-[#1a1a1a]";
  const hoverColor = "hover:text-[#65c1e4]";
  const navBgColor = darkMode ? "bg-[#1a1a1a]" : "bg-white";

  return (
    <header className={`${bgColor} ${textColor} fixed w-full z-50 shadow-md`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo + título */}
        <div className="flex items-center space-x-3">
           <img src={darkMode ? logoBlanco : logoNegro} alt="Logo AAEH" className="w-10 h-10 object-contain"/>
             {/* Línea divisoria */}
           <div className="w-px h-6 bg-gray-400 opacity-50"></div>
              <span className="text-sm">
             Designer UX/UI & Front End Developer
           </span>
    
        </div>

          {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 font-medium">
          <Link to="/"className={`relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-[#65c1e4] after:transition-all after:duration-300 hover:after:w-full transition-colors ${textColor}`}>Home</Link>
          <Link to="/about" className={`relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-[#65c1e4] after:transition-all after:duration-300 hover:after:w-full transition-colors ${textColor}`}>About Me</Link>
          <Link to="/contact" className={`relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-[#65c1e4] after:transition-all after:duration-300 hover:after:w-full transition-colors ${textColor}`}>Contact</Link>
          <button onClick={toggleTheme} className="ml-4">
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>

        {/* Burger Menu Icon */}
        <div className="md:hidden flex items-center gap-4">
          <button onClick={toggleTheme}>
            {darkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
          <button onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className={`md:hidden ${navBgColor} ${textColor} px-6 pb-4 flex flex-col gap-4`}>
          <Link to="/" onClick={toggleMenu} className={`${hoverColor} transition-colors`}>Home</Link>
          <Link to="/about" onClick={toggleMenu} className={`${hoverColor} transition-colors`}>About Me</Link>
          <Link to="/contact" onClick={toggleMenu} className={`${hoverColor} transition-colors`}>Contact</Link>
        </nav>
      )}
    </header>
  );
}


 


