import React from 'react';
import { Calendar } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
const ExperienceSection = () => {
  return <section id="experience" className="py-24 px-6">
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
                <span>May 2024 - June 2024</span>
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
    </section>;
};
export default ExperienceSection;