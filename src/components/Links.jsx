// src/components/Links.jsx
import { DocumentTextIcon } from '@heroicons/react/24/outline'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'
import { useState } from 'react'

export default function Links() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const links = [
    {
      title: 'Resume',
      description: 'View and download my resume.',
      icon: DocumentTextIcon,
      url: '/assets/OmarBadr_SWE_New_Grad.pdf',
      gradient: 'from-yellow-400 to-amber-500',
    },
    {
      title: 'LinkedIn',
      description: 'Connect with me on LinkedIn.',
      icon: FaLinkedin,
      url: 'https://www.linkedin.com/in/omarbadr0/',
      gradient: 'from-amber-400 to-yellow-500',
    },
    {
      title: 'GitHub',
      description: 'View my projects on GitHub.',
      icon: FaGithub,
      url: 'https://github.com/badromar00',
      gradient: 'from-yellow-500 to-amber-600',
    },
    {
      title: 'Email',
      description: 'Send me an email.',
      icon: FaEnvelope,
      url: 'mailto:badromar955@gmail.com',
      gradient: 'from-amber-500 to-yellow-600',
    }
  ]

  return (
    <div className="space-y-3">
      {links.map((link, index) => (
        <a
          key={link.title}
          href={link.url}
          className="block p-4 hover:bg-slate-700/50 rounded-lg transition-all duration-300 transform hover:-translate-x-1 hover:translate-y-1 hover:shadow-lg relative overflow-hidden"
          target={link.title !== 'Email' ? '_blank' : undefined}
          rel={link.title !== 'Email' ? 'noopener noreferrer' : undefined}
          style={{ animationDelay: `${index * 100}ms` }}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {/* Animated background gradient */}
          <div 
            className={`absolute inset-0 opacity-0 transition-opacity duration-300 bg-gradient-to-r ${link.gradient}`}
            style={{ 
              opacity: hoveredIndex === index ? 0.15 : 0,
              transform: `scale(${hoveredIndex === index ? 1.05 : 1})`,
              transition: 'opacity 0.3s, transform 0.3s'
            }}
          />
          
          <div className="flex items-center group relative">
            <div className="flex-shrink-0">
              <div 
                className={`w-12 h-12 bg-gradient-to-br ${link.gradient} rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 relative`}
                style={{
                  boxShadow: hoveredIndex === index ? `0 0 20px rgba(234,179,8,0.25)` : 'none'
                }}
              >
                <link.icon className="w-6 h-6 text-slate-800" />
              </div>
            </div>
            <div className="ml-4 relative">
              <h2 className="text-xl font-semibold text-white group-hover:text-yellow-100 transition-colors duration-300">{link.title}</h2>
              <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">{link.description}</p>
              
              {/* Animated underline */}
              <div 
                className="absolute -bottom-1 left-0 h-0.5 bg-yellow-400/40"
                style={{ 
                  width: hoveredIndex === index ? '100%' : '0%',
                  transition: 'width 0.3s ease-in-out'
                }}
              />
            </div>
          </div>
        </a>
      ))}
    </div>
  )
}