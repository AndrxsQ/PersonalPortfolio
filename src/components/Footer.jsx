const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="text-lg font-semibold mb-4">Connect</p>
        <div className="flex justify-center space-x-6 mb-6">
          {/* Reemplaza con tus enlaces y usa iconos SVG o de bibliotecas como React-Icons */}
          <a href="https://www.linkedin.com/in/andr%C3%A9s-quintana-b205592b4/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition duration-300">LinkedIn</a>
          <a href="https://github.com/AndrxsQ" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition duration-300">GitHub</a>
          <a href="mailto:andresquintana2004@gmail.com" className="text-gray-400 hover:text-indigo-400 transition duration-300">Email</a>
        </div>
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Andrés Quintana Alape. Developed with React and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;