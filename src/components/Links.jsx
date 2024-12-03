// src/components/Links.jsx
import { DocumentTextIcon } from '@heroicons/react/24/outline'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'

export default function Links() {
  const links = [
    {
      title: 'Resume',
      description: 'View and download my resume.',
      icon: DocumentTextIcon,
      url: '/assets/Omar-Badr-Software-Engineer-Resume.pdf',
    },
    {
      title: 'LinkedIn',
      description: 'Connect with me on LinkedIn.',
      icon: FaLinkedin,
      url: 'https://www.linkedin.com/in/omarbadr0/',
    },
    {
      title: 'GitHub',
      description: 'View my projects on GitHub.',
      icon: FaGithub,
      url: 'https://github.com/badromar00',
    },
    {
      title: 'Email',
      description: 'Send me an email.',
      icon: FaEnvelope,
      url: 'mailto:badromar955@gmail.com',
    }
  ]

  return (
    <div className="space-y-3">
      {links.map((link) => (
        <a
          key={link.title}
          href={link.url}
          className="block p-4 hover:bg-gray-700/50 rounded-lg transition duration-200"
          target={link.title !== 'Email' ? '_blank' : undefined}
          rel={link.title !== 'Email' ? 'noopener noreferrer' : undefined}
        >
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                <link.icon className="w-6 h-6 text-blue-400" />
              </div>
            </div>
            <div className="ml-4">
              <h2 className="text-xl font-semibold text-white">{link.title}</h2>
              <p className="text-gray-400">{link.description}</p>
            </div>
          </div>
        </a>
      ))}
    </div>
  )
}