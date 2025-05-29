
import React from 'react';
import { MapPin, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AboutSection = () => {
  return (
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
              <h4 className="text-xl font-semibold mb-2 text-white">Chennai Institute Of Technology</h4>
              <p className="text-blue-300 mb-2">B.Tech Artificial Intelligence and Data Science</p>
              <div className="flex items-center gap-2 text-gray-400 mb-2">
                <MapPin className="w-4 h-4" />
                <span>Chennai, TN</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 mb-4">
                <Calendar className="w-4 h-4" />
                <span>NOV 2022 - 2026</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
