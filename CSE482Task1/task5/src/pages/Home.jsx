import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import ProjectCard from '../components/ProjectCard';
import ContactForm from '../components/ContactForm';
import sabaImage from '../assets/sabaimage.jpg';

export default function Home() {
  // 1. Initialize states
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showProjects, setShowProjects] = useState(true);

  // 2. Skill array for mapping
  const [skills] = useState(["React", "Tailwind CSS", "Python", "ARMv7 Assembly"]);

  return (
    <div className={isDarkMode ? "bg-gray-900 text-white min-h-screen" : "bg-white text-black min-h-screen"}>
      <Navbar isDarkMode={isDarkMode} />
      
      <header className="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <h1 className="text-7xl font-black tracking-tighter mb-4 uppercase">
            Kazi Tanzia Saba<span className="text-purple-600">.</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-xl mb-8 leading-relaxed">
            Computer Science student and Full-Stack Developer. Building 
            <span className="font-bold text-black"> Graphic Designs</span> and exploring AI.
          </p>
          
          <div className="flex gap-4">
            {/* Dark Mode Toggle */}
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="bg-purple-600 text-white px-8 py-3 rounded-full font-bold shadow-lg"
            >
              {isDarkMode ? "☀️ Light" : "🌙 Dark"}
            </button>


            {/* PROJECT TOGGLE BUTTON - Check this onClick specifically */}
            <button 
              onClick={() => setShowProjects(!showProjects)} 
              className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-full font-bold hover:bg-purple-50 transition-all"
            >
              {showProjects ? "Hide Work" : "Show Work"}
            </button>
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <div className="relative w-72 h-96 overflow-hidden rounded-[2rem] shadow-2xl border-8 border-white">
            <img 
              src={sabaImage} 
              alt="Saba" 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>
      </header>

      {/* STATS & SKILLS BAR */}
        <section className={`py-12 border-y ${isDarkMode ? "border-gray-800 bg-gray-900" : "border-gray-100 bg-gray-50"}`}>
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* 
                Requirement: Displaying data using .map() from a state array.
                We must return a JSX element for each item in the array.
            */}
            {skills.map((skill, index) => {
                return (
                <div key={index} className="text-center group">
                    <p className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-2 group-hover:text-purple-600 transition-colors">
                    Expertise
                    </p>
                    <h3 className={`text-2xl font-bold ${isDarkMode ? "text-white" : "text-black"}`}>
                    {skill}
                    </h3>
                    {/* Small decorative line under each skill */}
                    <div className="w-8 h-1 bg-purple-600 mx-auto mt-2 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform"></div>
                </div>
                );
            })}
            </div>
        </div>
        </section>

      {/* CONDITIONAL RENDERING: This section only exists if showProjects is true */}
      {showProjects && (
        <section className="container mx-auto px-6 py-24 bg-gray-50/50 rounded-[3rem] mb-20">
          <h2 className="text-4xl font-bold mb-12 tracking-tight text-black text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {/* Passing data as props */}
            <ProjectCard title="DineStack POS" tag="Web App" />
            <ProjectCard title="Moshi AI Trainer" tag="Machine Learning" />
            <ProjectCard title="Blood Segmentation and Detector" tag="Machine Learning" />
            <ProjectCard title="Music Analyzer and Creator" tag="Website and Machine Learning" />
          </div>
        </section>
      )}

      <ContactForm />
    </div>
  );
}