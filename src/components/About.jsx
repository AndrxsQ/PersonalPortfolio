const About = () => {
  // Lista de habilidades para mostrar con estilo de badges
  const skills = [
    'React', 'JavaScript (ES6+)', 'Tailwind CSS', 'Node.js', 
    'Express', 'MongoDB', 'Git', 'Redux', 'APIs REST'
  ];

  return (
    <section id="about" className="bg-gray-100 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Sobre Mí 🤓
        </h2>

        <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-xl">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Soy un desarrollador full-stack apasionado con **5 años de experiencia** transformando ideas complejas en interfaces de usuario intuitivas y robustas. Mi enfoque principal es el desarrollo front-end con **React.js**, donde busco la optimización del rendimiento y la mejor experiencia de usuario.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            He trabajado en proyectos que van desde pequeñas startups hasta plataformas empresariales, siempre manteniendo un alto estándar de calidad en el código y siguiendo las mejores prácticas de desarrollo ágil.
          </p>
          
          <h3 className="text-2xl font-semibold text-gray-900 mb-4 border-b pb-2 border-indigo-200">
            Habilidades Clave (Tech Stack)
          </h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span 
                key={index} 
                className="px-4 py-1 text-sm font-medium text-indigo-700 bg-indigo-100 rounded-full shadow-md"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;