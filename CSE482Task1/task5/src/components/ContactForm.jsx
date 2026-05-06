import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name.length < 2) {
      setError("Please enter your full name.");
      return;
    }
    setError("");
    alert(`Success! Message received from ${formData.name}`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="max-w-xl mx-auto p-10 bg-gray-100 rounded-[2.5rem] border border-gray-200">
      <h2 className="text-3xl font-bold mb-8 text-black">Get In Touch</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input 
          type="text" placeholder="Name" className="p-4 rounded-2xl border-none ring-1 ring-gray-300 text-black focus:ring-2 focus:ring-purple-600 outline-none"
          value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required 
        />
        <input 
          type="email" placeholder="Email" className="p-4 rounded-2xl border-none ring-1 ring-gray-300 text-black focus:ring-2 focus:ring-purple-600 outline-none"
          value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required 
        />
        <textarea 
          placeholder="Message" className="p-4 rounded-2xl border-none ring-1 ring-gray-300 h-32 text-black focus:ring-2 focus:ring-purple-600 outline-none"
          value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} required
        ></textarea>
        {error && <p className="text-red-500 font-bold text-sm">{error}</p>}
        <button type="submit" className="bg-black text-white py-4 rounded-2xl font-bold hover:bg-purple-600 transition-all shadow-lg active:scale-95">
          Send Message
        </button>
      </form>
    </div>
  );
}