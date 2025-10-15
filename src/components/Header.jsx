import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo/Name */}
        <a href="#home" className="text-2xl font-bold text-yellow-400 hover:text-yellow-600 transition duration-300">
          Andrés Quintana
        </a>

        {/* Navigation Menu (Desktop) */}
        <nav className="hidden md:flex space-x-8">
          <a href="#about" className="text-gray-300 hover:text-yellow-400 font-medium transition duration-300">About Me</a>
          <a href="#projects" className="text-gray-300 hover:text-yellow-400 font-medium transition duration-300">Projects</a>
          <a href="#contact" className="text-gray-300 hover:text-yellow-400 font-medium transition duration-300">Contact</a>
        </nav>

        {/* Menu Button (Mobile) */}
        <button
          className="md:hidden text-gray-300 hover:text-yellow-400"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
          </svg>
        </button>
      </div>

      {/* Dropdown Menu (Mobile) */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 shadow-lg pb-4">
          <a href="#about" onClick={() => setIsOpen(false)} className="block px-6 py-2 text-gray-300 hover:bg-yellow-300">About Me</a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="block px-6 py-2 text-gray-300 hover:bg-yellow-300">Projects</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="block px-6 py-2 text-gray-300 hover:bg-yellow-300">Contact</a>
        </div>
      )}
    </header>
  );
};

export default Header;