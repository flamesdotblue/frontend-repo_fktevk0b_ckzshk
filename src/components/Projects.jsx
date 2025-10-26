import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';

const projects = [
  {
    title: 'NeonFrame — Generative UI Kit',
    desc: 'A component library powered by LLMs that adapts layout and content in real-time.',
    tags: ['React', 'LLM', 'Design System'],
    link: '#',
    repo: '#',
  },
  {
    title: 'Vista — 3D Data Explorer',
    desc: 'WebGL-powered visual analytics for high-dimensional datasets with fluid interactions.',
    tags: ['WebGL', 'Three.js', 'Analytics'],
    link: '#',
    repo: '#',
  },
  {
    title: 'PromptPaper — AI Research Notes',
    desc: 'A minimal knowledge garden with prompt templates and semantic search.',
    tags: ['Next.js', 'Vector DB', 'UX'],
    link: '#',
    repo: '#',
  },
];

const Card = ({ p }) => (
  <motion.a
    href={p.link}
    whileHover={{ y: -6 }}
    className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/70 bg-white/60 p-6 shadow-xl shadow-slate-900/5 backdrop-blur-md transition-colors hover:bg-white/80 dark:border-slate-700 dark:bg-slate-900/40 dark:hover:bg-slate-900/50"
  >
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{p.title}</h3>
        <span className="rounded-full bg-indigo-500/10 p-2 text-indigo-600 shadow-sm ring-1 ring-indigo-500/20 group-hover:bg-indigo-500/15 dark:text-indigo-300">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
      <p className="text-sm text-slate-600 dark:text-slate-300">{p.desc}</p>
    </div>
    <div className="mt-4 flex items-center justify-between">
      <div className="flex flex-wrap gap-2">
        {p.tags.map((t) => (
          <span key={t} className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] text-slate-700 ring-1 ring-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:ring-slate-700">
            {t}
          </span>
        ))}
      </div>
      <a href={p.repo} onClick={(e) => e.stopPropagation()} className="inline-flex items-center gap-1 text-sm text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">
        <Github className="h-4 w-4" />
        <span className="hidden sm:inline">Code</span>
      </a>
    </div>
    <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-400/0 via-transparent to-cyan-400/0 opacity-0 transition-opacity group-hover:opacity-100" />
  </motion.a>
);

const Projects = () => {
  return (
    <section id="projects" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Featured Projects</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300">Selected work that blends engineering, ML, and design.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <Card key={p.title} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
