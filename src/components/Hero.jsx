const Hero = () => {
  return (
    <section id="home" className="bg-white py-20 md:py-32">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Contenido de Texto */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <p className="text-lg text-indigo-600 font-semibold mb-2">¡Hola, soy [Tu Nombre] 👋</p>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-900">
            Desarrollador <span className="text-indigo-600">[Tu Especialidad]</span>
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-lg">
            Creando soluciones web modernas y eficientes usando la pila **React, Node.js y Tailwind CSS**.
          </p>
          <div className="mt-8 flex space-x-4">
            <a href="#projects" className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300 transform hover:scale-105">
              Ver Proyectos
            </a>
            <a href="#contact" className="px-6 py-3 border border-indigo-600 text-indigo-600 font-semibold rounded-lg hover:bg-indigo-50 transition duration-300">
              Contáctame
            </a>
          </div>
        </div>
        
        {/* Imagen Profesional */}
        <div className="md:w-1/2 flex justify-center">
          {/* Reemplaza el 'src' con la URL de tu foto profesional. */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-indigo-500">
            <img 
              src="[URL_DE_TU_FOTO]" 
              alt="Foto de perfil profesional" 
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;