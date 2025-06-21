import React from 'react';
import { Shield, Rocket, Heart, Code, Database, Server, Award, MapPin, Phone, Mail, Calendar, ExternalLink, Github, Linkedin } from 'lucide-react';

const Portfolio = () => {
  const skills = [
    {
      icon: <Code className="h-8 w-8 text-blue-400" />,
      title: "Frontend Development",
      description: "React.js with Material UI for responsive and interactive interfaces"
    },
    {
      icon: <Server className="h-8 w-8 text-green-400" />,
      title: "Backend Development",
      description: "Node.js, Express.js, REST APIs with microservices architecture"
    },
    {
      icon: <Database className="h-8 w-8 text-purple-400" />,
      title: "Database Management",
      description: "MySQL, MongoDB with Prisma ORM for efficient data operations"
    },
    {
      icon: <Shield className="h-8 w-8 text-yellow-400" />,
      title: "Full Stack Solutions",
      description: "End-to-end development with modern technologies and best practices"
    }
  ];

  const stats = [
    { number: "8.3", label: "MCA CGPA", icon: <Award className="h-6 w-6" /> },
    { number: "8.73", label: "BCA CGPA", icon: <Award className="h-6 w-6" /> },
    { number: "1+", label: "Years Experience", icon: <Calendar className="h-6 w-6" /> },
    { number: "10+", label: "Technologies", icon: <Code className="h-6 w-6" /> }
  ];

  const projects = [
    {
      name: "Airline Services",
      role: "Full Stack Developer",
      tech: "Node.js, Express, MySQL, AWS, REST API",
      content: "Developed a scalable backend service for airline booking system using microservices architecture. Deployed on AWS with MySQL for efficient data management and reliable performance.",
      year: "2024"
    },
    {
      name: "Voting System",
      role: "Web Developer",
      tech: "HTML, CSS3, JavaScript, PHP, MySQL",
      content: "Created an online voting web application that simplifies and secures candidate selection for various elections, including student councils and community polls.",
      year: "2020"
    },
    {
      name: "MERN Stack Projects",
      role: "MERN Developer",
      tech: "React, Node.js, Express, MongoDB",
      content: "Built reactive and interactive user interfaces using React.js with Material UI, developed RESTful APIs, and managed database operations using modern ORMs.",
      year: "2025"
    }
  ];

  const experience = [
    {
      company: "Current Role",
      position: "MERN Stack Developer",
      duration: "Feb 2025 - Present",
      description: "Working as a MERN Stack Developer handling both frontend and backend development with React.js, Node.js, and MySQL."
    },
    {
      company: "HashedBit Innovations",
      position: "Backend Developer Intern",
      duration: "May 2024 - Dec 2024",
      description: "Focused on REST APIs, user authentication, CRUD operations, and issue resolution in a professional environment."
    }
  ];

  const technologies = [
    "React.js", "Node.js", "Express.js", "MySQL", "MongoDB", "TypeScript", 
    "REST API", "Prisma ORM", "Material UI", "AWS", "Git", "GitHub", "JEST", "Jira"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="w-[90%] mx-auto pt-20 pb-16">
        <div className="grid lg:grid-cols-1 gap-12 items-center">
          <div className="space-y-8">
            <div className="rounded-2xl p-8 shadow-[0_20px_25px_-5px_rgba(0,0,0,0.3)]">
              <div className="border-l-4 border-gradient-to-b from-blue-400 to-purple-500 pl-8">
                <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                  Devanand Kumar
                  <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"> Rana</span>
                </h1>
                <p className="text-xl text-gray-300 mb-4 leading-relaxed">
                  MERN Stack Developer specializing in full-stack web development with modern technologies
                </p>
                <p className="text-lg text-gray-400 mb-4">
                  Building scalable applications with React.js, Node.js, and cloud technologies
                </p>
                
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-2 text-gray-300">
                    <MapPin className="h-5 w-5 text-blue-400" />
                    <span>Ranchi, Jharkhand</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Phone className="h-5 w-5 text-green-400" />
                    <span>+91-9304266642</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Mail className="h-5 w-5 text-purple-400" />
                    <span>devanandrana168@gmail.com</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                    <Github className="h-5 w-5" />
                    GitHub Profile
                  </button>
                  <button className="bg-white/10 hover:bg-white/20 border border-white/30 hover:border-white/50 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2">
                    <Linkedin className="h-5 w-5" />
                    LinkedIn
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="w-[90%] mx-auto py-16">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <div className="text-blue-400">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="w-[90%] mx-auto py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Technical Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-4 text-lg">Specialized skills in modern web development</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-[1.02] group">
              <div className="bg-white/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 text-center">{skill.title}</h3>
              <p className="text-gray-300 text-center leading-relaxed">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Education Section */}
      <div className="w-[90%] mx-auto py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="flex items-center mb-4">
              <Award className="h-6 w-6 text-blue-400 mr-2" />
              <span className="text-blue-400 font-semibold">2023 - 2025</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Master of Computer Applications</h3>
            <p className="text-gray-300 mb-2">Quantum University, Roorkee, Uttarakhand</p>
            <p className="text-green-400 font-semibold">CGPA: 8.3</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="flex items-center mb-4">
              <Award className="h-6 w-6 text-purple-400 mr-2" />
              <span className="text-purple-400 font-semibold">2020 - 2023</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Bachelor of Computer Applications</h3>
            <p className="text-gray-300 mb-2">Dr. Shyama Prasad Mukherjee University, Ranchi, JH</p>
            <p className="text-green-400 font-semibold">CGPA: 8.73</p>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="w-[90%] mx-auto py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-4 text-lg">Real-world applications and solutions</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <span className="text-blue-400 font-semibold">{project.year}</span>
                <ExternalLink className="h-5 w-5 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{project.name}</h3>
              <p className="text-purple-400 text-sm mb-3">{project.tech}</p>
              <p className="text-gray-300 mb-4 leading-relaxed">{project.content}</p>
              <div className="text-gray-400 text-sm">{project.role}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Section */}
      <div className="w-[90%] mx-auto py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Work Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="space-y-8">
          {experience.map((exp, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">{exp.position}</h3>
                  <p className="text-blue-400">{exp.company}</p>
                </div>
                <span className="text-purple-400 font-semibold">{exp.duration}</span>
              </div>
              <p className="text-gray-300 leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Technologies Section */}
      <div className="w-[90%] mx-auto py-16">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Technologies & Tools</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {technologies.map((tech, index) => (
              <span key={index} className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full text-white border border-white/20 hover:border-white/40 transition-all duration-300">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-[90%] mx-auto py-16">
        <div className="bg-gradient-to-r from-blue-500/20 to-purple-600/20 backdrop-blur-md rounded-2xl p-12 shadow-2xl border border-white/20 text-center">
          <Rocket className="h-16 w-16 text-white mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-4">Let`s Work Together</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Ready to bring your ideas to life with modern web technologies? 
            Let`s discuss your next project and create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl">
              Contact Me
            </button>
            <button className="bg-white/10 hover:bg-white/20 border border-white/30 hover:border-white/50 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 backdrop-blur-sm">
              Download Resume
            </button>
          </div>
        </div>
      </div>

      {/* Volunteer Experience */}
      <div className="w-[90%] mx-auto py-16">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Volunteer Experience</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <Heart className="h-6 w-6 text-red-400" />
              <div>
                <h3 className="text-xl font-semibold text-white">Quantum University Volunteer</h3>
                <p className="text-blue-400">Computer Hardware Maintenance Workshop</p>
                <p className="text-gray-400 text-sm">October 2023</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Helped set up workshops, guided participants through hands-on activities, provided technical guidance, 
              and ensured smooth program execution. Assisted in troubleshooting hardware issues and facilitated 
              communication between instructors and participants for an enhanced learning experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;