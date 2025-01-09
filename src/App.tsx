import React from 'react';
import { Facebook, Instagram, Github, Linkedin, Mail, Code2, User, Briefcase, Home as HomeIcon, ChevronDown } from 'lucide-react';

function App() {
  const skills = [
    { name: 'HTML/CSS', percentage: 50 },
    { name: 'JavaScript', percentage: 10 },
    { name: 'Pawn', percentage: 40 },
    { name: 'Node.js', percentage: 20 },
    { name: 'Python', percentage: 70 },
    { name: 'MySQL', percentage: 10 },
    { name: 'MongoDB', percentage: 5 },
    { name: 'Adobe Photoshop', percentage: 40 }

  ];

  const projects = [
    {
      title: 'Balkan Vice - SA:MP Portal',
      description: 'The website was made for the Balkan Vice SA:MP server and this is my first website made a long time ago',
      image: 'https://camo.githubusercontent.com/04e0d01cff1bcbd778093eff83ff3b1948eebd413432a138d99f3e2918b1b758/68747470733a2f2f692e696d6775722e636f6d2f5436586e6d38422e706e67'
    },
    {
      title: 'Emertus Roleplay - SA:MP Portal',
      description: 'This is my second website and it is also made for the SA:MP server under the name Emertus Roleplay',
      image: 'https://i.imgur.com/ahzKkMs.png'
    },
    {
      title: 'Login Form',
      description: 'This is a simple website that contains a login form to enter your email and password',
      image: 'https://i.imgur.com/4FxKh2U.png'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-gray-900/90 backdrop-blur-sm z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold">Portfolio</div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
              <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
              <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
              <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative">
        <div className="container mx-auto px-6 py-24 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm <span className="text-blue-400">Ivo Dev</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12">
            Frontend Developer | Backend Developer | Graphic Designer
          </p>
          <div className="flex justify-center space-x-6">
            <a href="https://facebook.com/iv0dev" className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors" target="_blank">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="https://instagram.com/iv0dev" className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors" target="_blank">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="https://github.com/iv0dev" className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors" target="_blank">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/iv0dev/" className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors" target="_blank">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:ivodev45@gmail.com" className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors" target="_blank">
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <a href="#about" className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8" />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gray-800/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300">
              I'm a beginner frontend developer who wants to learn how to make websites and gain some experience. In addition, I'm learning Adobe Photoshop so that I can do some photos properly because I'm very interested in editing and making perfect photos. I have 19 years old and in the future I would like to work in professions such as frontend development and graphic design.
              </p>
            </div>
            <div className="aspect-square rounded-full overflow-hidden">
              <img 
                src="https://i.imgur.com/4wNm9aC.png" 
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {skills.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{skill.name}</span>
                  <span>{skill.percentage}%</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full">
                  <div 
                    className="h-full bg-blue-400 rounded-full transition-all duration-500"
                    style={{ width: `${skill.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-gray-800/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.title} className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-300">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>© 2025 Ivo Dev. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;