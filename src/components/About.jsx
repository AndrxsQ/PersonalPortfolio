const About = () => {
  // Lista de habilidades para mostrar con estilo de badges
  const skills = [
    'HTML5', 'CSS3', 'JavaScript (ES6+)', 'React', 'Vue', 'Tailwind CSS', 'Node.js', 
    'Go', 'Gin', 'Python', 'PostgreSQL', 'MongoDB', 'APIs REST', 'Git/GitHub'
  ];

  return (
    <section id="about" className="bg-gray-800 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-yellow-400 mb-12">
          About Me
        </h2>

        <div className="max-w-4xl mx-auto bg-gray-800 border-2 border-yellow-400 p-8 rounded-xl shadow-xl">
          <p className="text-lg text-white leading-relaxed mb-6">
            Andrés Quintana here, though everyone calls me Anki. I began my journey in programming at 14 as a self-taught enthusiast. I'm currently advancing my education in Systems Engineering at the University of Cartagena.
          </p>
          <p className="text-lg text-white leading-relaxed mb-8">
            My formal studies have cemented my understanding of programming logic, but I primarily developed my expertise as a Web Developer through personal initiative. The skills and experience I possess come directly from building the projects displayed on this site. I also ensure my university projects align with web development to continuously apply my knowledge and acquire valuable experience in project delivery.
          </p>
          
          <h3 className="text-2xl font-semibold text-yellow-400 mb-4 border-b pb-2 border-yelow-400">
            Technical Skills (Tech Stack)
          </h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span 
                key={index} 
                className="px-4 py-1 text-sm border-1 border-yellow-400 font-medium text-yellow-400 bg-black rounded-full shadow-md"
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