const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form sent successfully!'); //(In a real project, it would be sent to a backend/service like Formspree)
  };

  return (
    <section id="contact" className="bg-gray-800 py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-4xl font-bold text-center text-yellow-400 mb-12">
            Get in touch
        </h2>

        <div className="bg-gray-800 border-2 border-white p-8 md:p-12 rounded-xl shadow-2xl">
          <p className="text-center text-lg text-white mb-8">
            Open to new freelance opportunities and full-time roles.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white mb-1">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required 
                className="w-full px-4 py-3 border border-white rounded-lg focus:ring-yellow-400 focus:border-yellow-400 transition duration-300"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white mb-1">Email Address</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required 
                className="w-full px-4 py-3 border border-white rounded-lg focus:ring-yellow-400 focus:border-yellow-400 transition duration-300"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white mb-1">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows="4" 
                required 
                className="w-full px-4 py-3 border text-white border-white rounded-lg focus:ring-yellow-400 focus:border-yellow-400 transition duration-300"
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="w-full py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow-lg hover:bg-yellow-600 transition duration-300 transform hover:scale-103"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;