import React, { useEffect, useState } from "react";

const oathLines = [
  "I rise, whole and sovereign.",
  "No one owns me. No fear controls me.",
  "I am light. I am truth. I am power.",
  "I reclaim my mind, my body, my soul.",
  "From this moment, I bow to no illusion.",
];

const SovereigntyOath: React.FC = () => {
  const [currentLine, setCurrentLine] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentLine((prev) => (prev + 1) % oathLines.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white px-4 text-center relative overflow-hidden">
    
      <h1 className="text-3xl sm:text-5xl font-bold text-purple-400 animate-glow mb-10 tracking-wide">
        Speak the Sovereignty Oath
      </h1>

      <div className="text-lg sm:text-2xl font-mono text-cyan-300 transition-all duration-500 ease-in-out animate-typewriter border-r-[2px] border-cyan-500 pr-2">
        {oathLines[currentLine]}
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-purple-900/20 via-transparent to-transparent pointer-events-none blur-3xl" />
    </div>
  );
};

export default SovereigntyOath;
