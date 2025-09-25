import React from "react";

import { logo } from "../assets";
import newLogo from "../assets/new.png";


const Hero = () => {
  return (
  <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3 px-6">
        <img src={newLogo} alt="sumz_logo" className="w-32 h-16 object-contain drop-shadow-lg" />
        <button
          type="button"
          onClick={() => window.open("https://github.com/Aryann-vermaa", "_blank")}
          className="glass-btn"
        >
          GitHub
        </button>
      </nav>

  <div className="glass-hero fade-in p-8 rounded-3xl shadow-xl flex flex-col items-center backdrop-blur-md">
        <h1 className="head_text text-cyan-400 drop-shadow-lg">
          Summarize Articles with <br className="max-md:hidden" />
          <span className="cyan_gradient">OpenAI GPT-4</span>
        </h1>
        <h2 className="desc text-cyan-200 mt-4">
          <span style={{ fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 700, letterSpacing: '1px' }}>Briefly</span> makes reading easier by using AI to summarize lengthy content into clear, concise summaries.
        </h2>
      </div>
    </header>
  );
};

export default Hero;
