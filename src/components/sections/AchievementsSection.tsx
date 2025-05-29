
import React from 'react';
import { Code, Award, Globe, FileText } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const AchievementsSection = () => {
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

  return (
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
  );
};

export default AchievementsSection;
