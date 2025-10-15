const Projects = () => {
  // Datos de ejemplo para los proyectos
  const projectData = [
    {
      title: 'Plataforma de E-Learning',
      description: 'Una aplicación de aprendizaje en línea con autenticación, seguimiento de progreso y pasarela de pago.',
      tech: ['React', 'Redux', 'Node.js', 'PostgreSQL'],
      link: '#',
    },
    {
      title: 'Landing Page para Startup',
      description: 'Diseño y desarrollo de una landing page optimizada para conversión usando animaciones sutiles y un diseño moderno.',
      tech: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
      link: '#',
    },
    {
      title: 'API de Gestión de Tareas',
      description: 'Desarrollo de una API RESTful robusta y documentada para la gestión de tareas y usuarios.',
      tech: ['Express.js', 'MongoDB', 'JWT'],
      link: '#',
    },
  ];

  const ProjectCard = ({ project }) => (
    <div className="bg-white rounded-xl shadow-xl hover:shadow-2xl transition duration-500 overflow-hidden border-t-4 border-indigo-600">
      <div className="p-6">
        <h4 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h4>
        <p className="text-gray-600 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((t, i) => (
            <span key={i} className="text-xs font-semibold px-3 py-1 bg-gray-200 text-gray-700 rounded-full">
              {t}
            </span>
          ))}
        </div>

        <a 
          href={project.link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-indigo-600 font-semibold hover:text-indigo-800 transition duration-300 flex items-center"
        >
          Ver Proyecto 
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </a>
      </div>
    </div>
  );

  return (
    <section id="projects" className="bg-white py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-14">
          Proyectos Destacados 🚀
        </h2>

        {/* Grid de Proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;