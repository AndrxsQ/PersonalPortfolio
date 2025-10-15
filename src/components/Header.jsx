import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo/Nombre */}
        <a href="#home" className="text-2xl font-bold text-indigo-600 hover:text-indigo-800 transition duration-300">
          [Tu Nombre]
        </a>

        {/* Menú de Navegación (Desktop) */}
        <nav className="hidden md:flex space-x-8">
          <a href="#about" className="text-gray-600 hover:text-indigo-600 font-medium transition duration-300">Sobre Mí</a>
          <a href="#projects" className="text-gray-600 hover:text-indigo-600 font-medium transition duration-300">Proyectos</a>
          <a href="#contact" className="text-gray-600 hover:text-indigo-600 font-medium transition duration-300">Contacto</a>
        </nav>

        {/* Botón de Menú (Mobile) */}
        <button
          className="md:hidden text-gray-600 hover:text-indigo-600"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
          </svg>
        </button>
      </div>

      {/* Menú Desplegable (Mobile) */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg pb-4">
          <a href="#about" onClick={() => setIsOpen(false)} className="block px-6 py-2 text-gray-600 hover:bg-gray-100">Sobre Mí</a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="block px-6 py-2 text-gray-600 hover:bg-gray-100">Proyectos</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="block px-6 py-2 text-gray-600 hover:bg-gray-100">Contacto</a>
        </div>
      )}
    </header>
  );
};

export default Header;