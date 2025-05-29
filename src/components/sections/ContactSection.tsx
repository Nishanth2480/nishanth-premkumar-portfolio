
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

const ContactSection = () => {
  return (
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

          <div className="space-y-6 mx-0 py-[39px]">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
