import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/45 py-10 backdrop-blur-xl">
      <div className="container mx-auto max-w-6xl px-5 text-center md:px-8">
        <p className="text-sm text-slate-400">© {new Date().getFullYear()} Jonathan David Rosenblatt. All rights reserved. 🚀</p>
        <div className="mt-5 flex justify-center gap-3">
          <a 
            href="https://github.com/Jonathan-R0" 
            target="_blank" 
            rel="noopener noreferrer"
            className="glass-panel flex h-10 w-10 items-center justify-center rounded-full text-slate-400 transition-colors hover:text-emerald-300"
          >
            <Github size={20} />
            <span className="sr-only">GitHub</span>
          </a>
          <a 
            href="https://www.linkedin.com/in/jonathan-rosenblatt-7b38981b4/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="glass-panel flex h-10 w-10 items-center justify-center rounded-full text-slate-400 transition-colors hover:text-emerald-300"
          >
            <Linkedin size={20} />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a 
            href="mailto:jonathan@rosenblatt.com.ar"
            className="glass-panel flex h-10 w-10 items-center justify-center rounded-full text-slate-400 transition-colors hover:text-emerald-300"
          >
            <Mail size={20} />
            <span className="sr-only">Email</span>
          </a>
        </div>
        <p className="mt-5 text-sm text-slate-500">Computer Engineering Student at FIUBA 🎓</p>
      </div>
    </footer>
  )
}
