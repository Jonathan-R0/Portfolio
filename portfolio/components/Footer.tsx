import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-800 py-8">
      <div className="container mx-auto px-4 text-center">
        <p>© {new Date().getFullYear()} Jonathan David Rosenblatt. All rights reserved. 🚀</p>
        <div className="mt-4 flex justify-center space-x-4">
          <a 
            href="https://github.com/Jonathan-R0" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-green-400 transition-colors"
          >
            <Github size={20} />
            <span className="sr-only">GitHub</span>
          </a>
          <a 
            href="https://www.linkedin.com/in/jonathan-rosenblatt-7b38981b4/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-green-400 transition-colors"
          >
            <Linkedin size={20} />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a 
            href="mailto:jonathan@rosenblatt.com.ar"
            className="text-gray-400 hover:text-green-400 transition-colors"
          >
            <Mail size={20} />
            <span className="sr-only">Email</span>
          </a>
        </div>
        <p className="mt-4 text-sm text-gray-400">Computer Engineering Student at FIUBA 🎓</p>
      </div>
    </footer>
  )
}

