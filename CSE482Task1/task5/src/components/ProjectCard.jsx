import React from 'react';

export default function ProjectCard({ title, tag }) {
  return (
    <div className="p-8 bg-white border border-gray-200 rounded-3xl shadow-sm hover:shadow-xl transition-all">
      <span className="text-xs font-bold text-purple-600 uppercase tracking-widest">{tag}</span>
      <h3 className="text-2xl font-bold mt-2 mb-4 text-black">{title}</h3>
      <p className="text-gray-500 mb-6">Built with React and Tailwind CSS for the portfolio lab.</p>
      <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center">→</div>
    </div>
  );
}