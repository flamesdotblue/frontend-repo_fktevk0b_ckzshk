import React from 'react';

const DesignNotes = () => {
  return (
    <section id="design" className="relative py-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-2xl border border-slate-200/70 bg-white/60 p-6 shadow-xl shadow-slate-900/5 backdrop-blur-md dark:border-slate-700 dark:bg-slate-900/40">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Design System Notes</h3>
          <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <h4 className="font-medium text-slate-800 dark:text-slate-200">Layout</h4>
              <ul className="mt-2 list-disc pl-5 text-sm text-slate-600 dark:text-slate-300 space-y-1">
                <li>Generous whitespace, 8px grid, 24–32px section rhythm.</li>
                <li>Card-based sections with soft shadows and subtle borders.</li>
                <li>Smooth anchor navigation with clear section IDs.</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-slate-800 dark:text-slate-200">Color & Type</h4>
              <ul className="mt-2 list-disc pl-5 text-sm text-slate-600 dark:text-slate-300 space-y-1">
                <li>Palette: Indigo 600, Cyan 600, Slate neutrals (50–900).</li>
                <li>Typography: Inter/Manrope, 1.3 line-height for body, tighter for headings.</li>
                <li>Use gradient accents and glassmorphism for hero/CTAs.</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-slate-800 dark:text-slate-200">Interactions</h4>
              <ul className="mt-2 list-disc pl-5 text-sm text-slate-600 dark:text-slate-300 space-y-1">
                <li>Subtle hover lifts (4–6px) and soft color transitions.</li>
                <li>Reduce motion option respected via prefers-reduced-motion.</li>
                <li>Focusable, accessible controls with visible outlines.</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-slate-800 dark:text-slate-200">Inspiration</h4>
              <ul className="mt-2 list-disc pl-5 text-sm text-slate-600 dark:text-slate-300 space-y-1">
                <li>Apple Human Interface Guidelines (cleanliness, balance)</li>
                <li>Linear.app (minimal, motion, tactility)</li>
                <li>Framer templates (glassmorphism, gradients)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignNotes;
