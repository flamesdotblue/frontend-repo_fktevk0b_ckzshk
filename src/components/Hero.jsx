import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] w-full overflow-hidden text-white"
    >
      {/* Full-width interactive Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/O-AdlP9lTPNz-i8a/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Non-blocking gradient overlays for readability and vibe */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        {/* subtle vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/50" />
        {/* white-to-orange accent wash near bottom for the fintech/travel theme */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-orange-500/20 via-orange-400/10 to-transparent" />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-24 pb-14">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/90 shadow-sm backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for projects
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">
            Hi, I’m <span className="bg-gradient-to-r from-white to-orange-300 bg-clip-text text-transparent">Alex Rivera</span> —
            crafting elegant AI-driven experiences.
          </h1>
          <p className="mt-4 max-w-xl text-base sm:text-lg leading-relaxed text-white/80">
            A creative engineer focused on building delightful interfaces and robust systems. I blend design, AI, and engineering to create products that feel effortless.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-white/90 px-4 py-2.5 text-slate-900 shadow-lg shadow-black/10 transition hover:bg-white"
            >
              View Projects
              <ArrowDown className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-black/40 px-4 py-2.5 text-white ring-1 ring-white/20 shadow-sm backdrop-blur-md transition hover:bg-black/50"
            >
              Contact Me
            </a>
          </div>
          <div className="mt-4 text-sm text-white/70">
            Based in San Francisco • Remote friendly
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
