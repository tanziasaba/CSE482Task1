import React from 'react';

export default function Navbar({ isDarkMode }) {
  return (
    <nav className={`py-6 px-10 flex justify-between items-center sticky top-0 z-50 backdrop-blur-md ${isDarkMode ? "bg-black/80 text-white" : "bg-white/80 text-black border-b border-gray-100"}`}>
      <div className="text-2xl font-black tracking-tighter">Portfolio.</div>
      <div className="hidden md:flex gap-10 font-bold text-sm uppercase tracking-widest">
        <a href="#" className="hover:text-purple-600 transition-colors">Home</a>
          <a href="#" className="hover:text-purple-600 transition-colors">About me</a>
        <a href="#" className="hover:text-purple-600 transition-colors">Services</a>
        <a href="#" className="hover:text-purple-600 transition-colors">Contact</a>
      </div>
    </nav>
  );
}