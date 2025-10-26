import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Sparkles } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-50">
      <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 dark:bg-slate-900/60 border-b border-slate-200/60 dark:border-slate-800">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <a href="#home" className="inline-flex items-center gap-2 font-semibold">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600 to-cyan-600 text-white shadow-md">
              <Sparkles className="h-4 w-4" />
            </span>
            Alex Rivera
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600 dark:text-slate-300">
            <a href="#about" className="hover:text-slate-900 dark:hover:text-white">About</a>
            <a href="#projects" className="hover:text-slate-900 dark:hover:text-white">Projects</a>
            <a href="#contact" className="hover:text-slate-900 dark:hover:text-white">Contact</a>
          </nav>
          <a href="#contact" className="hidden sm:inline-flex rounded-xl bg-slate-900 px-3 py-2 text-sm text-white shadow-sm hover:shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 dark:bg-white dark:text-slate-900">Hire me</a>
        </div>
      </header>

      <main className="scroll-smooth">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <footer className="py-10">
        <div className="mx-auto max-w-7xl px-6 text-sm text-slate-500 dark:text-slate-400">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} Alex Rivera. All rights reserved.</p>
            <p className="text-center sm:text-right">Built with React, Tailwind, Framer Motion, and a playful Spline scene.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
