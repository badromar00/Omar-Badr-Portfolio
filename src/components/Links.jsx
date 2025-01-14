// src/components/Links.jsx
import { DocumentTextIcon } from '@heroicons/react/24/outline'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'

export default function Links() {
  const links = [
    {
      title: 'Resume',
      description: 'View and download my resume.',
      icon: DocumentTextIcon,
      url: '/assets/Omar-Badr-Software-Engineer-Resume-2025.pdf',
      gradient: 'from-emerald-400 to-cyan-400',
    },
    {
      title: 'LinkedIn',
      description: 'Connect with me on LinkedIn.',
      icon: FaLinkedin,
      url: 'https://www.linkedin.com/in/omarbadr0/',
      gradient: 'from-blue-400 to-blue-600',
    },
    {
      title: 'GitHub',
      description: 'View my projects on GitHub.',
      icon: FaGithub,
      url: 'https://github.com/badromar00',
      gradient: 'from-purple-400 to-pink-400',
    },
    {
      title: 'Email',
      description: 'Send me an email.',
      icon: FaEnvelope,
      url: 'mailto:badromar955@gmail.com',
      gradient: 'from-orange-400 to-red-400',
    }
  ]

  return (
    <div className="space-y-3">
      {links.map((link, index) => (
        <a
          key={link.title}
          href={link.url}
          className="block p-4 hover:bg-gray-700/50 rounded-lg transition-all duration-300 transform hover:-translate-x-1 hover:translate-y-1 hover:shadow-lg"
          target={link.title !== 'Email' ? '_blank' : undefined}
          rel={link.title !== 'Email' ? 'noopener noreferrer' : undefined}
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="flex items-center group">
            <div className="flex-shrink-0">
              <div className={`w-12 h-12 bg-gradient-to-br ${link.gradient} rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                <link.icon className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="ml-4">
              <h2 className="text-xl font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">{link.title}</h2>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{link.description}</p>
            </div>
          </div>
        </a>
      ))}
    </div>
  )
}