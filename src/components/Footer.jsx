const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="text-lg font-semibold mb-4">Conéctate</p>
        <div className="flex justify-center space-x-6 mb-6">
          {/* Reemplaza con tus enlaces y usa iconos SVG o de bibliotecas como React-Icons */}
          <a href="[URL_LINKEDIN]" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition duration-300">LinkedIn</a>
          <a href="[URL_GITHUB]" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition duration-300">GitHub</a>
          <a href="mailto:[TU_CORREO]" className="text-gray-400 hover:text-indigo-400 transition duration-300">Email</a>
        </div>
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} [Tu Nombre]. Desarrollado con React y Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;