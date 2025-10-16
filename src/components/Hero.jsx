const Hero = () => {
  return (
    <section id="home" className="bg-gray-900 py-20 md:py-32">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <p className="text-lg text-yellow-400 font-semibold mb-2">Hi, soy Andrés Quintana!</p>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-white">
            <span className="text-yellow-400">Web</span> Developer
          </h1>
          <p className="mt-4 text-xl text-gray-200 max-w-lg">
            and Systems Engineering Student. From Cartagena, Colombia. Improving my technical stack and looking forward learn new techs.
          </p>
          <div className="mt-8 flex space-x-4">
            <a href="#projects" className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow-lg hover:bg-yellow-600 transition duration-300 transform hover:scale-105">
              Explore Projects
            </a>
            <a href="#contact" className="px-6 py-3 border border-yellow-400 text-yellow-400 font-semibold rounded-lg hover:border-white hover:bg-white hover:text-black transition duration-300">
              Contact me
            </a>
          </div>
        </div>
        
        {/* Professional Picture */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-yellow-400">
            <img 
              src="/src/assets/image.jpg" 
              alt="Professional profile picture" 
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;