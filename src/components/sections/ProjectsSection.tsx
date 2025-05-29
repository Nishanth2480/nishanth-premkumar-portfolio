
import React from 'react';
import { Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ProjectsSection = () => {
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
      title: 'RE-DACT Document Management',
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

  return (
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
                <Button variant="outline" onClick={() => window.open(project.github, '_blank')} className="full bg-black text-zinc-50 text-center">
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
