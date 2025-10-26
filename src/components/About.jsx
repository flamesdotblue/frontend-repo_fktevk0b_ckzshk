import React from 'react';
import { User, Award, BookOpen, Star } from 'lucide-react';

const Badge = ({ children }) => (
  <span className="inline-flex items-center rounded-full bg-white/70 px-3 py-1 text-xs text-slate-700 ring-1 ring-slate-200 shadow-sm backdrop-blur-md dark:bg-slate-800/50 dark:text-slate-200 dark:ring-slate-700">
    {children}
  </span>
);

const About = () => {
  return (
    <section id="about" className="relative py-20">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-indigo-200/40 blur-3xl dark:bg-indigo-500/10" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-center gap-2 text-slate-900 dark:text-white">
          <User className="h-5 w-5" />
          <h2 className="text-2xl font-semibold">About Me</h2>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-5 rounded-2xl border border-slate-200/70 bg-white/60 p-6 shadow-xl shadow-slate-900/5 backdrop-blur-md dark:border-slate-700 dark:bg-slate-900/40">
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              I’m a product-focused engineer with a background in computational design. I specialize in building polished web apps that combine <span className="font-medium text-slate-900 dark:text-white">AI, creative tooling,</span> and thoughtful UX.
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              My process blends rapid prototyping with design systems thinking. Recently, I’ve led projects in generative UI, data visualization, and design automation.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <Badge>AI + LLM Apps</Badge>
              <Badge>Design Systems</Badge>
              <Badge>WebGL/3D</Badge>
              <Badge>Data Viz</Badge>
              <Badge>Accessibility</Badge>
            </div>
          </div>
          <div className="space-y-4">
            <div className="rounded-2xl border border-slate-200/70 bg-white/60 p-5 shadow-xl shadow-slate-900/5 backdrop-blur-md dark:border-slate-700 dark:bg-slate-900/40">
              <div className="mb-3 flex items-center gap-2 text-slate-900 dark:text-white">
                <Award className="h-4 w-4" />
                <h3 className="font-medium">Highlights</h3>
              </div>
              <ul className="list-disc pl-5 text-sm text-slate-600 dark:text-slate-300 space-y-2">
                <li>10+ years building products across startups and studios</li>
                <li>Shipped 30+ projects for AI/creative teams</li>
                <li>Talks at local meetups on AI x UX</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200/70 bg-white/60 p-5 shadow-xl shadow-slate-900/5 backdrop-blur-md dark:border-slate-700 dark:bg-slate-900/40">
              <div className="mb-3 flex items-center gap-2 text-slate-900 dark:text-white">
                <BookOpen className="h-4 w-4" />
                <h3 className="font-medium">Blog (selected)</h3>
              </div>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white underline decoration-slate-300/60 hover:decoration-slate-500">Designing with AI: Patterns for Trust</a>
                </li>
                <li>
                  <a href="#" className="text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white underline decoration-slate-300/60 hover:decoration-slate-500">Glassmorphism in Real Products</a>
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200/70 bg-white/60 p-5 shadow-xl shadow-slate-900/5 backdrop-blur-md dark:border-slate-700 dark:bg-slate-900/40">
              <div className="mb-3 flex items-center gap-2 text-slate-900 dark:text-white">
                <Star className="h-4 w-4" />
                <h3 className="font-medium">Testimonials</h3>
              </div>
              <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
                <li>
                  “Alex elevates every project with a rare mix of craft and velocity.” — Product Lead, Creative Tech
                </li>
                <li>
                  “Our team shipped faster—and with better UX—thanks to Alex’s systems thinking.” — Engineering Manager
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
