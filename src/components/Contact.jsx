import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Let’s work together</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300">Have an idea or a role in mind? I’d love to hear from you.</p>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <form className="space-y-4 rounded-2xl border border-slate-200/70 bg-white/60 p-6 shadow-xl shadow-slate-900/5 backdrop-blur-md dark:border-slate-700 dark:bg-slate-900/40">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-200">Name</label>
              <input id="name" type="text" className="mt-1 w-full rounded-xl border border-slate-200 bg-white/70 px-3 py-2 text-slate-900 shadow-sm outline-none ring-0 placeholder:text-slate-400 focus:border-slate-300 focus:ring-2 focus:ring-indigo-500/30 dark:border-slate-700 dark:bg-slate-800/60 dark:text-white" placeholder="Your name" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-200">Email</label>
              <input id="email" type="email" className="mt-1 w-full rounded-xl border border-slate-200 bg-white/70 px-3 py-2 text-slate-900 shadow-sm outline-none ring-0 placeholder:text-slate-400 focus:border-slate-300 focus:ring-2 focus:ring-indigo-500/30 dark:border-slate-700 dark:bg-slate-800/60 dark:text-white" placeholder="you@example.com" />
            </div>
            <div>
              <label htmlFor="msg" className="block text-sm font-medium text-slate-700 dark:text-slate-200">Message</label>
              <textarea id="msg" rows={4} className="mt-1 w-full rounded-xl border border-slate-200 bg-white/70 px-3 py-2 text-slate-900 shadow-sm outline-none ring-0 placeholder:text-slate-400 focus:border-slate-300 focus:ring-2 focus:ring-indigo-500/30 dark:border-slate-700 dark:bg-slate-800/60 dark:text-white" placeholder="Tell me about your project" />
            </div>
            <button type="submit" className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2.5 text-white shadow-lg shadow-slate-900/10 transition hover:shadow-slate-900/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 dark:bg-white dark:text-slate-900 dark:shadow-white/10">
              Send Message
            </button>
          </form>
          <div className="rounded-2xl border border-slate-200/70 bg-white/60 p-6 shadow-xl shadow-slate-900/5 backdrop-blur-md dark:border-slate-700 dark:bg-slate-900/40">
            <h3 className="mb-3 text-lg font-medium text-slate-900 dark:text-white">Connect</h3>
            <p className="mb-4 text-sm text-slate-600 dark:text-slate-300">Prefer email or socials? Reach out directly.</p>
            <div className="flex flex-col gap-3">
              <a href="mailto:hello@alexrivera.dev" className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">
                <Mail className="h-4 w-4" /> hello@alexrivera.dev
              </a>
              <a href="#" className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">
                <Github className="h-4 w-4" /> github.com/alexrivera
              </a>
              <a href="#" className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">
                <Linkedin className="h-4 w-4" /> linkedin.com/in/alexrivera
              </a>
            </div>
            <div className="mt-8 rounded-xl bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 p-4 text-sm text-slate-600 ring-1 ring-slate-200 dark:text-slate-300 dark:ring-slate-700">
              Color palette: Indigo 600, Cyan 600, Slate neutrals. Typography: Inter / Manrope.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
