import React from 'react'
import { Code, Database, Server, Award, MapPin, Phone, Mail, Calendar, Github, Linkedin, Heart, Zap, Shield, Globe } from 'lucide-react'

const page = () => {
  return (
    <div>
      <div className="min-h-screen mt-10 mb-10">
      {/* About Section */}
      <div className="max-w-4xl mx-auto mb-16">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">About Me</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
            <p className="text-gray-300 mt-4 text-lg">MERN Stack Developer & Software Engineer</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">My Journey</h2>
              <p className="text-gray-200 mb-6 leading-relaxed">
                I am a passionate MERN Stack Developer with expertise in building scalable web applications. 
                Currently pursuing MCA from Quantum University with a strong academic background (CGPA: 8.3) 
                and hands-on experience in full-stack development.
              </p>
              <p className="text-gray-200 mb-6 leading-relaxed">
                My journey includes developing enterprise-level applications using microservices architecture, 
                managing databases with modern ORMs, and creating responsive user interfaces with React.js and Material UI.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 text-gray-300">
                  <MapPin className="h-4 w-4 text-blue-400" />
                  <span className="text-sm">Ranchi, Jharkhand</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Phone className="h-4 w-4 text-green-400" />
                  <span className="text-sm">+91-9304266642</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Mail className="h-4 w-4 text-purple-400" />
                  <span className="text-sm">devanandrana168@gmail.com</span>
                </div>
              </div>

              <div className="flex gap-3">
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 flex items-center gap-2 text-sm">
                  <Github className="h-4 w-4" />
                  GitHub
                </button>
                <button className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 flex items-center gap-2 text-sm">
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </button>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <Code className="h-5 w-5 text-blue-400" />
                  <h3 className="text-lg font-semibold text-white">Frontend Excellence</h3>
                </div>
                <p className="text-gray-300 text-sm">React.js, Material UI, responsive design with modern JavaScript</p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <Server className="h-5 w-5 text-green-400" />
                  <h3 className="text-lg font-semibold text-white">Backend Development</h3>
                </div>
                <p className="text-gray-300 text-sm">Node.js, Express.js, REST APIs with microservices architecture</p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <Database className="h-5 w-5 text-purple-400" />
                  <h3 className="text-lg font-semibold text-white">Database Management</h3>
                </div>
                <p className="text-gray-300 text-sm">MySQL, MongoDB, Prisma ORM for efficient data operations</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Education & Experience Section */}
      <div className="max-w-4xl mx-auto mb-16">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white/20">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-white mb-2">Education</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="h-5 w-5 text-blue-400" />
                  <span className="text-blue-400 font-semibold text-sm">2023 - 2025</span>
                </div>
                <h3 className="text-white font-semibold">Master of Computer Applications</h3>
                <p className="text-gray-300 text-sm">Quantum University, Roorkee</p>
                <p className="text-green-400 font-semibold text-sm">CGPA: 8.3</p>
              </div>
              
              <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="h-5 w-5 text-purple-400" />
                  <span className="text-purple-400 font-semibold text-sm">2020 - 2023</span>
                </div>
                <h3 className="text-white font-semibold">Bachelor of Computer Applications</h3>
                <p className="text-gray-300 text-sm">Dr. SPM University, Ranchi</p>
                <p className="text-green-400 font-semibold text-sm">CGPA: 8.73</p>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white/20">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-white mb-2">Experience</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="h-5 w-5 text-green-400" />
                  <span className="text-green-400 font-semibold text-sm">Feb 2025 - Present</span>
                </div>
                <h3 className="text-white font-semibold">MERN Stack Developer</h3>
                <p className="text-gray-300 text-sm mb-2">Full-stack development with React.js & Node.js</p>
                <p className="text-gray-400 text-xs">Building scalable applications with modern technologies</p>
              </div>
              
              <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="h-5 w-5 text-blue-400" />
                  <span className="text-blue-400 font-semibold text-sm">May 2024 - Dec 2024</span>
                </div>
                <h3 className="text-white font-semibold">Backend Developer Intern</h3>
                <p className="text-gray-300 text-sm mb-2">HashedBit Innovations, Gurugram</p>
                <p className="text-gray-400 text-xs">REST APIs, authentication, CRUD operations</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Projects Section */}
      <div className="max-w-4xl mx-auto mb-16">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Key Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 p-6 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center gap-2 mb-3">
                <Globe className="h-5 w-5 text-blue-400" />
                <span className="text-blue-400 font-semibold text-sm">2024</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Airline Services</h3>
              <p className="text-purple-400 text-sm mb-3">Node.js • Express • MySQL • AWS • REST API</p>
              <p className="text-gray-300 text-sm leading-relaxed">
                Developed a scalable backend service for airline booking system using microservices architecture. 
                Deployed on AWS with MySQL for efficient data management and reliable performance.
              </p>
            </div>
            
            <div className="bg-white/5 p-6 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="h-5 w-5 text-green-400" />
                <span className="text-green-400 font-semibold text-sm">2020</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Voting System</h3>
              <p className="text-purple-400 text-sm mb-3">HTML • CSS3 • JavaScript • PHP • MySQL</p>
              <p className="text-gray-300 text-sm leading-relaxed">
                Created an online voting web application that simplifies and secures candidate selection 
                for various elections, including student councils and community polls.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Technologies & Values Section */}
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Technologies */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white/20">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-white mb-2">Technologies</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {[
                "React.js", "Node.js", "Express.js", "MySQL", "MongoDB", "TypeScript", 
                "REST API", "Prisma ORM", "Material UI", "AWS", "Git", "GitHub"
              ].map((tech, index) => (
                <span key={index} className="bg-white/10 hover:bg-white/20 px-3 py-1 rounded-full text-white text-xs border border-white/20 hover:border-white/40 transition-all duration-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Values */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white/20">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-white mb-2">Values</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-blue-400" />
                <div>
                  <h3 className="text-white font-semibold text-sm">Quality Code</h3>
                  <p className="text-gray-400 text-xs">Clean, maintainable, and scalable solutions</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Zap className="h-5 w-5 text-yellow-400" />
                <div>
                  <h3 className="text-white font-semibold text-sm">Performance</h3>
                  <p className="text-gray-400 text-xs">Optimized applications for best user experience</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Heart className="h-5 w-5 text-red-400" />
                <div>
                  <h3 className="text-white font-semibold text-sm">Continuous Learning</h3>
                  <p className="text-gray-400 text-xs">Always exploring new technologies and best practices</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default page