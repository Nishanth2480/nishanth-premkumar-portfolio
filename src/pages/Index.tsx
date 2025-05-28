import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Database, Brain, Globe, MapPin, Calendar, Award, Star, Settings, FileText, Users, Target, Lightbulb, MessageSquare, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { ChevronDown } from 'lucide-react';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'achievements', 'contact'];
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

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const skillCategories = {
    languages: [
      { name: 'Python', category: 'Intermediate' },
      { name: 'JavaScript', category: 'Beginner' },
      { name: 'HTML/CSS', category: 'Advanced' },
      { name: 'MySQL', category: 'Intermediate' },
      { name: 'Java', category: 'Beginner' }
    ],
    frameworks: [
      { name: 'React.js', category: 'Intermediate' },
      { name: 'Node.js', category: 'Intermediate' },
      { name: 'Express.js', category: 'Intermediate' },
      { name: 'TensorFlow', category: 'Intermediate' },
      { name: 'Scikit-learn', category: 'Intermediate' }
    ],
    tools: [
      { name: 'Git/GitHub', category: 'Beginner' },
      { name: 'VS Code', category: 'Intermediate' },
      { name: 'Figma', category: 'Intermediate' },
      { name: 'PowerBI', category: 'Intermediate' },
      { name: 'Google Looker', category: 'Expert' }
    ],
    soft: [
      { name: 'Problem Solving', category: 'Expert' },
      { name: 'Team Collaboration', category: 'Expert' },
      { name: 'Communication', category: 'Advanced' },
      { name: 'Adaptability', category: 'Expert' },
      { name: 'Leadership', category: 'Advanced' }
    ]
  };

  const projects = [
    {
      id: 'RMS',
      title: 'Restaurant Management System',
      shortTitle: 'RMS',
      description: 'A full-stack web application for a restaurant, designed to enhance the dining experience for both customers and restaurant staff. The application features a modern, responsive interface, allowing customers to browse the menu, place orders, and view real-time updates on order status.',
      tech: ['HTML', 'CSS', 'React.js', 'Node.js', 'Express', 'MySQL'],
      additionalTech: ['Responsive Design'],
      github: 'https://github.com/Nishanth2480/Restaurant.git',
      gradient: 'from-orange-400 to-red-500'
    },
    {
      id: 'EDS',
      title: 'Emotion Detection System',
      shortTitle: 'EDS',
      description: 'Built an emotion detection system using TensorFlow and Keras to identify facial expressions into emotions like happy, sad, angry. Utilized CNNs for image classification, with data preprocessing and augmentation using Python libraries such as NumPy and OpenCV.',
      tech: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'CNN', 'NumPy'],
      github: 'https://github.com/Nishanth2480/Emotion-Detection.git',
      gradient: 'from-blue-400 to-purple-500'
    },
    {
      id: 'RDM',
      title: 'RE-REACT Document Management',
      shortTitle: 'RDM',
      description: 'Built a document management system using React.js and Microsoft Prebuilt to detect and manipulate sensitive PII in text, Excel, and Word documents. Enabled custom entity recognition, document uploads, and pseudonym generation with a clean and intuitive interface.',
      tech: ['React.js', 'TensorFlow', 'OpenCV', 'Document Processing'],
      additionalTech: ['Entity Recognition'],
      github: 'https://github.com/Nishanth2480/RE-DACT.git',
      gradient: 'from-green-400 to-blue-500'
    },
    {
      id: 'IPW',
      title: 'Investment Portfolio Website',
      shortTitle: 'IPW',
      description: 'Developed a live stock trading platform using React.js, Redux, TailwindCSS, Node.js, and Express.js. Implemented user authentication, stock detail views, owned stock linking, and a smooth persistent system with responsive UI.',
      tech: ['React.js', 'Redux', 'TailwindCSS', 'Node.js', 'Express.js'],
      github: 'https://github.com/Nishanth2480/Investment-Website.git',
      gradient: 'from-pink-400 to-purple-500'
    }
  ];

  const achievements = [
    {
      title: 'LeetCode Problem Solver',
      category: 'Competitive Programming',
      description: 'Solved 250+ problems on LeetCode, demonstrating strong problem-solving skills in data structures and algorithms. Additionally completed top-month data analyst internship at AppScuba.',
      icon: <Code className="w-6 h-6" />
    },
    {
      title: 'AI/ML Certifications',
      category: 'Certifications',
      description: 'Completed multiple certifications including Introduction to Internet of Things (NPTEL), Cloud Practitioner Essentials (AWS), Microsoft Power BI Desktop (Coursera), and Machine Learning (Coursera).',
      icon: <Award className="w-6 h-6" />
    },
    {
      title: 'Full-Stack Development',
      category: 'Development',
      description: 'Successfully developed and deployed multiple full-stack applications including restaurant management systems, emotion detection systems, and investment portfolio platforms.',
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: 'Python Full Stack Certification',
      category: 'Certification',
      description: 'Earned comprehensive Python Full Stack certification from Skill Vertex, demonstrating proficiency in both frontend and backend development using Python technologies.',
      icon: <FileText className="w-6 h-6" />
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Expert': return 'bg-green-500';
      case 'Advanced': return 'bg-blue-500';
      case 'Intermediate': return 'bg-yellow-500';
      case 'Beginner': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-slate-900/90 backdrop-blur-xl border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition-colors">
              Nishanth
            </div>
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'hero', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'skills', label: 'Skills' },
                { id: 'experience', label: 'Experience' },
                { id: 'projects', label: 'Projects' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-all duration-300 hover:text-blue-400 ${
                    activeSection === item.id ? 'text-blue-400' : 'text-white/70'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center text-center px-6 relative">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            Hi, I'm <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Nishanth Premkumar
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Artificial Intelligence and Data Science
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Passionate about Artificial Intelligence, Data Science, and Full-Stack Development.<br />
            Currently pursuing Computer Science with a focus on creating innovative solutions.
          </p>
          
          <div className="flex justify-center gap-6 mb-12">
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-blue-400 bg-blue-400/10 text-blue-400 hover:bg-blue-400 hover:text-white rounded-full w-16 h-16 transition-all duration-300"
              onClick={() => window.open('https://github.com/Nishanth2480', '_blank')}
            >
              <Github className="w-8 h-8" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-blue-400 bg-blue-400/10 text-blue-400 hover:bg-blue-400 hover:text-white rounded-full w-16 h-16 transition-all duration-300"
              onClick={() => window.open('https://www.linkedin.com/in/nishanth-premkumar-2177a1260', '_blank')}
            >
              <Linkedin className="w-8 h-8" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-blue-400 bg-blue-400/10 text-blue-400 hover:bg-blue-400 hover:text-white rounded-full w-16 h-16 transition-all duration-300"
              onClick={() => window.open('https://leetcode.com/u/Nishanth2408/', '_blank')}
            >
              <ExternalLink className="w-8 h-8" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-blue-400 bg-blue-400/10 text-blue-400 hover:bg-blue-400 hover:text-white rounded-full w-16 h-16 transition-all duration-300"
              onClick={() => window.open('https://www.codechef.com/users/nishanth_08', '_blank')}
            >
              <ExternalLink className="w-8 h-8" />
            </Button>
          </div>

          <div className="flex flex-col md:flex-row gap-6 justify-center mb-8">
            <Button 
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              onClick={() => scrollToSection('contact')}
              className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-full"
            >
              Get In Touch
            </Button>
          </div>

          {/* Get In Touch Section */}
          <div className="mt-8">
            <p className="text-gray-400 mb-4">Get in touch with me</p>
            <div className="flex justify-center gap-6 text-gray-400">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>nishanth.direct@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+91 7200192408</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/50" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">Passionate Computer Science Student</h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  I'm currently pursuing my Computer Science degree at Chennai Institute of Technology, where I'm developing expertise in Artificial Intelligence, Machine Learning, and Data Science.
                </p>
                <p>
                  My journey in technology has led me to work on exciting projects involving fraud detection, stock trading platforms, and restaurant management systems. I'm passionate about using technology to solve real-world problems and create meaningful impact.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, participating in coding competitions, or working on innovative projects that push the boundaries of what's possible with AI and machine learning.
                </p>
              </div>
            </div>
            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-blue-400 flex items-center gap-3">
                  <MapPin className="w-6 h-6" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                <h4 className="text-xl font-semibold mb-2">Chennai Institute Of Technology</h4>
                <p className="text-blue-300 mb-2">B.Tech Artificial Intelligence and Data Science</p>
                <div className="flex items-center gap-2 text-gray-400 mb-2">
                  <MapPin className="w-4 h-4" />
                  <span>Chennai, TN</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400 mb-4">
                  <Calendar className="w-4 h-4" />
                  <span>NOV 2022 - 2026</span>
                </div>
                <div className="bg-blue-500/20 rounded-lg p-3">
                  <p className="text-white font-semibold">CGPA: 8.6</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 bg-slate-800/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">Technical Expertise</h2>
          <p className="text-center text-gray-400 mb-16 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels across different domains
          </p>
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Programming Languages */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-blue-400 flex items-center gap-3">
                  <Code className="w-6 h-6" />
                  Programming Languages
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {skillCategories.languages.map((skill, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-white font-medium">{skill.name}</span>
                    <Badge className={`${getCategoryColor(skill.category)} text-white text-xs px-2 py-1`}>
                      {skill.category}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Frameworks & Libraries */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-purple-400 flex items-center gap-3">
                  <Database className="w-6 h-6" />
                  Frameworks & Libraries
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {skillCategories.frameworks.map((skill, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-white font-medium">{skill.name}</span>
                    <Badge className={`${getCategoryColor(skill.category)} text-white text-xs px-2 py-1`}>
                      {skill.category}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Tools & Technologies */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-green-400 flex items-center gap-3">
                  <Settings className="w-6 h-6" />
                  Tools & Technologies
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {skillCategories.tools.map((skill, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-white font-medium">{skill.name}</span>
                    <Badge className={`${getCategoryColor(skill.category)} text-white text-xs px-2 py-1`}>
                      {skill.category}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Soft Skills */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-orange-400 flex items-center gap-3">
                  <Users className="w-6 h-6" />
                  Soft Skills
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {skillCategories.soft.map((skill, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-white font-medium">{skill.name}</span>
                    <Badge className={`${getCategoryColor(skill.category)} text-white text-xs px-2 py-1`}>
                      {skill.category}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Experience</h2>
          <div className="space-y-8 max-w-4xl mx-auto">
            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-blue-400">ebramha</CardTitle>
                <CardDescription className="text-lg text-gray-300">Data Analyst Intern</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-gray-400 mb-4">
                  <Calendar className="w-4 h-4" />
                  <span>May 2024 - Aug 2024</span>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Contributed for analyzed and interpreted raw data to generate actionable insights and also identified trends and 
                  anomalies using SQL and Excel pivot.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-blue-400">ebramha</CardTitle>
                <CardDescription className="text-lg text-gray-300">Software Intern</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-gray-400 mb-4">
                  <Calendar className="w-4 h-4" />
                  <span>November 2023 - December 2023</span>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Developed and fixed bugs during the training period in IT and been oriented in basics of ICT as defined by us and he 
                  was able to present the team during the review.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-slate-800/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">Featured Projects</h2>
          <div className="grid lg:grid-cols-2 gap-8 mt-16">
            {projects.map((project, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 overflow-hidden">
                <div className={`h-24 bg-gradient-to-r ${project.gradient} flex items-center justify-center`}>
                  <h3 className="text-2xl font-bold text-white">{project.shortTitle}</h3>
                </div>
                <CardHeader>
                  <CardTitle className="text-white">{project.title}</CardTitle>
                  <CardDescription className="text-gray-300 leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="bg-blue-500/20 text-blue-300 text-xs px-2 py-1">
                        {tech}
                      </Badge>
                    ))}
                    {project.additionalTech?.map((tech, techIndex) => (
                      <Badge key={`additional-${techIndex}`} variant="secondary" className="bg-purple-500/20 text-purple-300 text-xs px-2 py-1">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button 
                    variant="outline" 
                    className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white w-full"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements & Certifications */}
      <section id="achievements" className="py-24 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">
            Achievements & <span className="text-blue-400">Certifications</span>
          </h2>
          <div className="grid lg:grid-cols-2 gap-8 mt-16">
            {achievements.map((achievement, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-500/20 rounded-lg">
                      {achievement.icon}
                    </div>
                    <div>
                      <CardTitle className="text-white">{achievement.title}</CardTitle>
                      <Badge className="bg-blue-500 text-white mt-2">{achievement.category}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 leading-relaxed">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-slate-800/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">
            Get In <span className="text-blue-400">Touch</span>
          </h2>
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, exciting projects, or just having a chat about technology.
          </p>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-white">Let's Connect</h3>
              <p className="text-gray-300 mb-8">
                Whether you have a project in mind, want to collaborate, or just want to say hello, 
                I'd love to hear from you. Feel free to reach out through any of the channels below:
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-lg">
                  <Mail className="w-6 h-6 text-blue-400" />
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-gray-400">nishanth.direct@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-lg">
                  <Phone className="w-6 h-6 text-blue-400" />
                  <div>
                    <p className="text-white font-medium">Phone</p>
                    <p className="text-gray-400">+91 7200192408</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-lg">
                  <MapPin className="w-6 h-6 text-blue-400" />
                  <div>
                    <p className="text-white font-medium">Location</p>
                    <p className="text-gray-400">Chennai, Tamil Nadu, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="bg-slate-800/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
                />
                <input 
                  type="email" 
                  placeholder="your.email@example.com" 
                  className="bg-slate-800/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
                />
              </div>
              <input 
                type="text" 
                placeholder="What's this about?" 
                className="w-full bg-slate-800/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
              />
              <textarea 
                placeholder="Tell me about your project or just say hello!" 
                rows={6}
                className="w-full bg-slate-800/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 resize-none"
              />
              <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3">
                <MessageSquare className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-700 bg-slate-900">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Nishanth Premkumar. Built with ❤️ using React and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
