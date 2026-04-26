"use client"
import { 
  Mail, 
  FileText,
  Code2
} from 'lucide-react'
import { FaInstagram } from 'react-icons/fa6'
import { FaGithub } from 'react-icons/fa6'
import { FaLinkedin } from 'react-icons/fa6'
export const socialLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub className="w-5 h-5" />,
      url: 'https://github.com/Tahircode',
      color: 'text-gray-500 hover:text-red-400'
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin className="w-5 h-5" />,
      url: 'https://linkedin.com/in/tahir01',
      color: 'text-gray-500 hover:text-blue-600'
    },
    {
      name: 'LeetCode',
      icon: <Code2 className="w-5 h-5" />,
      url: 'https://leetcode.com/u/Tahir__',
      color: 'text-gray-500 hover:text-indigo-600'
    },
    {
      name: 'Email',
      icon: <Mail className="w-5 h-5" />,
      url: 'mailto:tahirazizkhan03@gmail.com',
      color: 'text-gray-500 hover:text-green-600'
    },
    {
      name: 'Instagram',
      icon: <FaInstagram className="w-5 h-5" />,
      url: 'https://instagram.com/tahir.pathan1',
      color: 'text-gray-500 hover:text-pink-600'
    },
    {
      name: 'Resume',
      icon: <FileText className="w-5 h-5" />,
      url: 'https://drive.google.com/file/d/1i_QwBtNRBrT4ej71pcKDAh33hC2ssLsd/view?usp=sharing',
      color: 'text-gray-500 hover:text-emerald-600'
    }
  ]

export default function SocialLinksVertical() {
  

  return (
    <div className="fixed right-4 md:right-15 bottom-0 z-50 flex flex-col items-center space-y-6 py-8">
      {/* Vertical line */}
      <div className="w-0.5 h-24 bg-gradient-to-b from-gray-400 to-transparent"></div>
      
      {/* Social links */}
      {socialLinks.map((link, index) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`relative transition-all duration-300 ${link.color} hover:scale-125`}
          style={{
            animationDelay: `${index * 100}ms`
          }}
          aria-label={link.name}
        >
          {link.icon}
          
          {/* Tooltip on hover */}
          <span className="absolute left-full ml-3 px-2 py-1 bg-gray-900 dark:bg-gray-700 text-white text-xs rounded 
            opacity-0 hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
            {link.name}
          </span>
        </a>
      ))}
      
      {/* Vertical line */}
      <div className="w-0.5 h-24 bg-gradient-to-t from-gray-400 to-transparent"></div>
    </div>
  )
}


















