import React from 'react';
import { Code, Database, Settings, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const SkillsSection = () => {
  const skillCategories = {
    languages: [
      { name: 'Python', category: 'Intermediate' },
      { name: 'JavaScript', category: 'Beginner' },
      { name: 'HTML/CSS', category: 'Advanced' },
      { name: 'MySQL', category: 'Intermediate' },
      { name: 'MongoDB', category: 'Beginner' },
      { name: 'Java', category: 'Beginner' }
    ],
    frameworks: [
      { name: 'React.js', category: 'Beginner' },
      { name: 'Node.js', category: 'Intermediate' },
      { name: 'Express.js', category: 'Beginner' },
      { name: 'TensorFlow', category: 'Intermediate' },
      { name: 'Scikit-learn', category: 'Beginner' },
      { name: 'Selenium', category: 'Intermediate' }
    ],
    tools: [
      { name: 'Git/GitHub', category: 'Beginner' },
      { name: 'VS Code', category: 'Intermediate' },
      { name: 'Figma', category: 'Intermediate' },
      { name: 'PowerBI', category: 'Intermediate' },
      { name: 'Google Looker', category: 'Expert' },
      { name: 'Snowflake', category: 'Intermediate' }
    ],
    soft: [
      { name: 'Problem Solving', category: 'Expert' },
      { name: 'Team Collaboration', category: 'Expert' },
      { name: 'Communication', category: 'Advanced' },
      { name: 'Adaptability', category: 'Expert' },
      { name: 'Leadership', category: 'Advanced' }
    ]
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Expert':
        return 'bg-green-500';
      case 'Advanced':
        return 'bg-blue-500';
      case 'Intermediate':
        return 'bg-yellow-500';
      case 'Beginner':
        return 'bg-gray-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <section id="skills" className="py-24 px-6 bg-slate-800/30">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-white">Technical Expertise</h2>
        <p className="text-center text-gray-400 mb-16 max-w-3xl mx-auto">
          A comprehensive overview of my technical skills and proficiency levels across different domains
        </p>
        <div className="grid lg:grid-cols-2 gap-8">
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
  );
};

export default SkillsSection;
