import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-white via-white to-slate-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl dark:bg-indigo-500/20" />
        <div className="absolute right-0 bottom-10 h-72 w-72 rounded-full bg-cyan-200/40 blur-3xl dark:bg-cyan-500/20" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-20 pb-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/60 bg-white/60 px-3 py-1 text-xs text-slate-600 shadow-sm backdrop-blur-md dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-300">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Available for projects
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 dark:text-white">
            Hi, I’m <span className="bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">Alex Rivera</span> —
            crafting elegant AI-driven experiences.
          </h1>
          <p className="max-w-xl text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            A creative engineer focused on building delightful interfaces and robust systems. I blend design, AI, and engineering to create products that feel effortless.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-white shadow-lg shadow-slate-900/10 transition hover:shadow-slate-900/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 dark:bg-white dark:text-slate-900 dark:shadow-white/10">
              View Projects
              <ArrowDown className="h-4 w-4" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-white/70 px-4 py-2.5 text-slate-700 ring-1 ring-slate-200 shadow-sm backdrop-blur-md transition hover:bg-white dark:bg-slate-800/60 dark:text-slate-200 dark:ring-slate-700">
              Contact Me
            </a>
          </div>
          <div className="text-sm text-slate-500 dark:text-slate-400">
            Based in San Francisco • Remote friendly
          </div>
        </div>
        <div className="relative h-[420px] sm:h-[520px] lg:h-[560px] rounded-2xl">
          <div className="absolute inset-0 rounded-2xl border border-white/20 bg-white/10 shadow-2xl shadow-slate-900/10 backdrop-blur-md dark:border-slate-700/60 dark:bg-slate-800/30" />
          <div className="relative h-full w-full rounded-2xl overflow-hidden">
            <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/40 dark:from-slate-900/30 dark:to-slate-900/60" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
