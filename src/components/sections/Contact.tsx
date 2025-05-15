import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import SectionHeader from '../ui/SectionHeader';

const Contact: React.FC = () => {
  const { theme } = useTheme();
  
  const contactInfo = [
    {
      icon: <Mail />,
      label: "Email",
      value: "jarvigpraveenkumar@gmail.com",
      link: "mailto:jarvigpraveenkumar@gmail.com"
    },
    {
      icon: <Phone />,
      label: "Phone",
      value: "+91 7448641788",
      link: "tel:+917448641788"
    },
    {
      icon: <MapPin />,
      label: "Address",
      value: "32/k, 3rd bypass cross street, Tiruvannamalai",
      link: "https://maps.google.com/?q=Tiruvannamalai"
    }
  ];
  
  return (
    <section id="contact" className="py-16 md:py-24 scroll-mt-20">
      <SectionHeader title="Get In Touch" />
      
      <div className="max-w-4xl mx-auto">
        <div className={`backdrop-blur-xl rounded-2xl overflow-hidden ${
          theme === 'dark' 
            ? 'bg-gray-800/30 border border-gray-700/50' 
            : 'bg-white/70 shadow-lg border border-gray-200/50'
        }`}>
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Contact Information */}
            <div className={`p-8 ${
              theme === 'dark' 
                ? 'bg-gradient-to-br from-blue-500/10 to-purple-500/10' 
                : 'bg-gradient-to-br from-blue-50 to-purple-50'
            }`}>
              <h3 className={`text-2xl font-bold mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className={`flex items-center p-4 rounded-xl transition-all duration-300 group ${
                      theme === 'dark' 
                        ? 'bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700/50' 
                        : 'bg-white/50 hover:bg-white border border-gray-200/50'
                    }`}
                  >
                    <div className={`p-3 rounded-lg mr-4 ${
                      theme === 'dark' 
                        ? 'bg-blue-500/20 text-blue-400' 
                        : 'bg-blue-100 text-blue-600'
                    }`}>
                      {info.icon}
                    </div>
                    <div>
                      <p className={`text-sm font-medium ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        {info.label}
                      </p>
                      <p className={`${
                        theme === 'dark' ? 'text-gray-200' : 'text-gray-900'
                      }`}>
                        {info.value}
                      </p>
                    </div>
                    <ArrowRight className={`h-4 w-4 ml-auto transition-transform duration-300 ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                    } group-hover:translate-x-1`} />
                  </a>
                ))}
                
                <div className="flex space-x-4 mt-8">
                  <a 
                    href="https://github.com/PRAVEEN-KUMAR-J" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`p-3 rounded-lg transition-colors duration-300 ${
                      theme === 'dark' 
                        ? 'bg-gray-800/50 hover:bg-gray-700/50 text-blue-400' 
                        : 'bg-white/50 hover:bg-gray-100 text-blue-600'
                    }`}
                  >
                    <Github />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/praveen-kumar-j-6b4b56299" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`p-3 rounded-lg transition-colors duration-300 ${
                      theme === 'dark' 
                        ? 'bg-gray-800/50 hover:bg-gray-700/50 text-blue-400' 
                        : 'bg-white/50 hover:bg-gray-100 text-blue-600'
                    }`}
                  >
                    <Linkedin />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="p-8">
              <h3 className={`text-2xl font-bold mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Send a Message
              </h3>
              
              <form className="space-y-4">
                <div className="space-y-2">
                  <label className={`block text-sm font-medium ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Name
                  </label>
                  <input 
                    type="text" 
                    className={`w-full px-4 py-3 rounded-xl outline-none transition-colors duration-200 ${
                      theme === 'dark' 
                        ? 'bg-gray-800/50 border border-gray-700/50 text-white focus:border-blue-500/50' 
                        : 'bg-white/50 border border-gray-200 text-gray-900 focus:border-blue-500'
                    }`}
                  />
                </div>
                
                <div className="space-y-2">
                  <label className={`block text-sm font-medium ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Email
                  </label>
                  <input 
                    type="email" 
                    className={`w-full px-4 py-3 rounded-xl outline-none transition-colors duration-200 ${
                      theme === 'dark' 
                        ? 'bg-gray-800/50 border border-gray-700/50 text-white focus:border-blue-500/50' 
                        : 'bg-white/50 border border-gray-200 text-gray-900 focus:border-blue-500'
                    }`}
                  />
                </div>
                
                <div className="space-y-2">
                  <label className={`block text-sm font-medium ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Message
                  </label>
                  <textarea 
                    rows={4}
                    className={`w-full px-4 py-3 rounded-xl outline-none transition-colors duration-200 ${
                      theme === 'dark' 
                        ? 'bg-gray-800/50 border border-gray-700/50 text-white focus:border-blue-500/50' 
                        : 'bg-white/50 border border-gray-200 text-gray-900 focus:border-blue-500'
                    }`}
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className={`w-full py-4 px-6 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
                    theme === 'dark'
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg shadow-blue-500/25'
                      : 'bg-gradient-to-r from-blue-400 to-purple-500 hover:from-blue-500 hover:to-purple-600 text-white shadow-lg shadow-blue-400/25'
                  }`}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;