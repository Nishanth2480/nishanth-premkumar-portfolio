
import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Database, Brain, Globe, ChevronDown, MapPin, Calendar, Award, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const skills = {
    languages: ['Python', 'HTML', 'CSS', 'JavaScript', 'MySQL', 'Google Looker', 'PowerBI', 'SQL', 'NOSQL'],
    tools: ['GitHub', 'Visual Studio Code', 'Figma', 'Canva', 'Microsoft Excel', 'Microsoft PowerPoint', 'Microsoft Word'],
    soft: ['Teamwork', 'Adaptability', 'Communication']
  };

  const projects = [
    {
      title: 'Restaurant Management System',
      description: 'A full-stack web application for a restaurant, designed to enhance the dining experience for both customers and restaurant staff. The application features a modern, responsive interface, allowing customers to browse the menu, place orders, and view real-time updates on order status.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MySQL'],
      github: 'https://github.com/Nishanth2480/Restaurant.git',
      icon: <Database className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Emotion Detection System',
      description: 'Built an emotion detection system using TensorFlow and Keras to identify facial expressions into emotions like happy, sad, angry. Utilized CNNs for image classification, with data preprocessing and augmentation using Python libraries such as NumPy and OpenCV.',
      tech: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'NumPy'],
      github: 'https://github.com/Nishanth2480/Emotion-Detection.git',
      icon: <Brain className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'RE-REACT Document Management',
      description: 'Implemented a document management system using MERN stack, Multer.js, and Firebase to detect and categorize sensitive PII in text, Excel, and Word documents. Enabled custom entity recognition, document uploads, and pseudonym generation with a clean and intuitive interface.',
      tech: ['React', 'Node.js', 'MongoDB', 'Firebase'],
      github: 'https://github.com/Nishanth2480/RE-DACT.git',
      icon: <Code className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Investment Portfolio Website',
      description: 'Developed a live stock trading platform using React.js, Redux, Tailwind CSS, Node.js, and Express.js. Implemented user authentication, stock detail views, owned stock listing, and a mock payment system with responsive UI.',
      tech: ['React.js', 'Redux', 'Tailwind CSS', 'Node.js', 'Express.js'],
      github: 'https://github.com/Nishanth2480/Investment-Website.git',
      icon: <Globe className="w-6 h-6" />,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const certifications = [
    { name: 'Introduction to Internet of Things', provider: 'NPTEL', icon: <Award className="w-5 h-5" /> },
    { name: 'Cloud Practitioner Essentials', provider: 'AWS', icon: <Award className="w-5 h-5" /> },
    { name: 'Microsoft Power BI Desktop', provider: 'Coursera', icon: <Award className="w-5 h-5" /> },
    { name: 'Data Analysis with Python', provider: 'IBM', icon: <Award className="w-5 h-5" /> },
    { name: 'Python Full Stack', provider: 'EdSkill', icon: <Award className="w-5 h-5" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden relative">
      {/* Interactive cursor effect */}
      <div 
        className="fixed w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full pointer-events-none z-50 opacity-50 transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
        }}
      />

      {/* Floating particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/10 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-black/20 backdrop-blur-xl border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent hover:scale-110 transition-transform duration-300">
              NP
            </div>
            <div className="hidden md:flex space-x-8">
              {['hero', 'about', 'skills', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-300 hover:text-purple-400 hover:scale-110 relative ${
                    activeSection === section ? 'text-purple-400' : 'text-white/70'
                  }`}
                >
                  {section === 'hero' ? 'Home' : section}
                  {activeSection === section && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-128 h-128 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-2xl animate-pulse delay-2000"></div>
        </div>
        
        <div className={`text-center z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-8 relative">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent animate-fade-in hover:scale-105 transition-transform duration-500">
              NISHANTH PREMKUMAR
            </h1>
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20 blur-xl -z-10 rounded-3xl" />
          </div>
          <p className="text-xl md:text-2xl text-purple-200 mb-8 animate-fade-in delay-300 font-medium">
            Artificial Intelligence and Data Science
          </p>
          <p className="text-lg text-white/70 mb-12 max-w-2xl mx-auto animate-fade-in delay-500 leading-relaxed">
            Passionate about AI/ML, data analysis, and creating innovative solutions that bridge technology and real-world applications.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center animate-fade-in delay-700">
            <Button 
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-10 py-4 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/25 text-lg font-semibold"
            >
              <Star className="w-5 h-5 mr-2" />
              View My Work
            </Button>
            <Button 
              variant="outline" 
              onClick={() => scrollToSection('contact')}
              className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-10 py-4 rounded-full transition-all duration-300 hover:scale-110 text-lg font-semibold backdrop-blur-sm"
            >
              Get In Touch
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/50" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 relative">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-20 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h3 className="text-3xl font-semibold text-purple-300 flex items-center gap-3">
                <MapPin className="w-8 h-8" />
                Education
              </h3>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10">
                <h4 className="text-2xl font-semibold mb-3">Chennai Institute Of Technology</h4>
                <p className="text-purple-200 mb-3 text-lg">B.Tech Artificial Intelligence and Data Science</p>
                <div className="flex items-center gap-2 text-white/70 mb-2">
                  <MapPin className="w-4 h-4" />
                  <span>Chennai, TN</span>
                </div>
                <div className="flex items-center gap-2 text-white/70 mb-4">
                  <Calendar className="w-4 h-4" />
                  <span>NOV 2022 - 2026</span>
                </div>
                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg p-3">
                  <p className="text-white font-semibold">CGPA: 8.6</p>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <h3 className="text-3xl font-semibold text-purple-300 flex items-center gap-3">
                <Code className="w-8 h-8" />
                Experience
              </h3>
              <div className="space-y-6">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10">
                  <h4 className="text-2xl font-semibold mb-3">ebramha</h4>
                  <p className="text-purple-200 mb-3 text-lg">Data Analyst Intern</p>
                  <div className="flex items-center gap-2 text-white/70 mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>May 2024 - Aug 2024</span>
                  </div>
                  <p className="text-white/70 leading-relaxed">
                    Contributed for analyzed and interpreted raw data to generate actionable insights and also identified trends and 
                    anomalies using SQL and Excel pivot.
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10">
                  <h4 className="text-2xl font-semibold mb-3">ettraahd</h4>
                  <p className="text-purple-200 mb-3 text-lg">Software Intern</p>
                  <div className="flex items-center gap-2 text-white/70 mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>November 2023 - December 2023</span>
                  </div>
                  <p className="text-white/70 leading-relaxed">
                    Developed and fixed bugs during the training period in IT and been oriented in basics of ICT as defined by us and he 
                    was able to present the team during the review.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 bg-black/20 relative">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-20 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/20 group">
              <CardHeader>
                <CardTitle className="text-purple-300 text-center text-2xl flex items-center justify-center gap-3">
                  <Code className="w-8 h-8 group-hover:rotate-12 transition-transform duration-300" />
                  Languages & Technologies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {skills.languages.map((skill, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className="bg-purple-500/20 text-purple-200 hover:bg-purple-500/30 transition-all duration-300 hover:scale-110 px-4 py-2 text-base font-medium border border-purple-400/30"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-pink-500/20 group">
              <CardHeader>
                <CardTitle className="text-purple-300 text-center text-2xl flex items-center justify-center gap-3">
                  <Database className="w-8 h-8 group-hover:rotate-12 transition-transform duration-300" />
                  Tools & Platforms
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {skills.tools.map((skill, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className="bg-pink-500/20 text-pink-200 hover:bg-pink-500/30 transition-all duration-300 hover:scale-110 px-4 py-2 text-base font-medium border border-pink-400/30"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-green-500/20 group">
              <CardHeader>
                <CardTitle className="text-purple-300 text-center text-2xl flex items-center justify-center gap-3">
                  <Star className="w-8 h-8 group-hover:rotate-12 transition-transform duration-300" />
                  Soft Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {skills.soft.map((skill, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className="bg-green-500/20 text-green-200 hover:bg-green-500/30 transition-all duration-300 hover:scale-110 px-4 py-2 text-base font-medium border border-green-400/30"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-20 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 group overflow-hidden">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-4 bg-gradient-to-r ${project.color} rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      {project.icon}
                    </div>
                    <CardTitle className="text-purple-300 text-2xl">{project.title}</CardTitle>
                  </div>
                  <CardDescription className="text-white/70 leading-relaxed text-lg">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="outline" 
                        className="border-purple-400/30 text-purple-200 hover:bg-purple-400/20 transition-all duration-300 hover:scale-110 px-3 py-1 text-sm font-medium"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button 
                    variant="outline" 
                    className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white transition-all duration-300 hover:scale-105 font-semibold"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="w-5 h-5 mr-2" />
                    View Code
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-24 px-6 bg-black/20 relative">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-20 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Certifications
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 group">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    {cert.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-2">{cert.name}</h3>
                    <p className="text-purple-200 text-sm">{cert.provider}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-white/70 mb-16 max-w-2xl mx-auto leading-relaxed">
            I'm always interested in new opportunities and collaborations. Let's discuss how we can work together!
          </p>
          
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center mb-16">
            <Button 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-10 py-4 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/25 text-lg font-semibold"
              onClick={() => window.open('mailto:nishanth.direct@gmail.com')}
            >
              <Mail className="w-6 h-6 mr-3" />
              nishanth.direct@gmail.com
            </Button>
          </div>

          <div className="flex justify-center gap-8">
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white rounded-full w-16 h-16 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/25"
              onClick={() => window.open('https://github.com/Nishanth2480', '_blank')}
            >
              <Github className="w-8 h-8" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white rounded-full w-16 h-16 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/25"
              onClick={() => window.open('https://www.linkedin.com/in/nishanth-premkumar-2177a1260', '_blank')}
            >
              <Linkedin className="w-8 h-8" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white rounded-full w-16 h-16 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/25"
              onClick={() => window.open('https://leetcode.com/u/Nishanth2408/', '_blank')}
            >
              <Code className="w-8 h-8" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white rounded-full w-16 h-16 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/25"
              onClick={() => window.open('https://www.codechef.com/users/nishanth_08', '_blank')}
            >
              <ExternalLink className="w-8 h-8" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10 bg-black/20">
        <div className="container mx-auto text-center">
          <p className="text-white/50 text-lg">
            © 2024 Nishanth Premkumar. Crafted with passion and innovation.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
