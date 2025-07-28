import React, { useEffect, useRef, useState } from "react";
import "../index.css"; // Make sure this is linked to your global CSS file

const EyeScanner: React.FC = () => {
  const [access, setAccess] = useState(false);
  const laserRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setAccess(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!laserRef.current) return;

    // Animate the red laser line
    laserRef.current.animate(
      [
        { top: "0%" },
        { top: "100%" }
      ],
      {
        duration: 2000,
        iterations: Infinity,
        easing: "linear"
      }
    );
  }, []);

  return (
    <div className="flex flex-col items-center justify-center bg-black text-white space-y-8">
      {/* SCANNER CONTAINER */}
      <div className="relative w-[300px] h-[300px] rounded-full overflow-hidden border-[2px] border-gray-700 shadow-[0_0_30px_#1f2937] bg-gradient-to-br from-gray-900 via-black to-gray-900">

        {/* RED LASER LINE (manual animation) */}
        <div
          ref={laserRef}
          style={{
            position: "absolute",
            width: "100%",
            height: "2px",
            backgroundColor: "red",
            opacity: 0.9,
            zIndex: 30,
            top: 0
          }}
        />

           {/* Outer Glowing Rings */}
        <div className="absolute inset-0 rounded-full border-2 border-gray-500 animate-pulse-slow blur-sm" />
        
        <div className="absolute inset-2 rounded-full border border-gray-700 opacity-30" />
        
        <div className="absolute inset-4 rounded-full border border-gray-800 opacity-20" />

        {/* Iris */}
       
        <div className="absolute inset-[25%] w-[50%] h-[50%] bg-gradient-radial from-gray-400 via-gray-900 to-black rounded-full shadow-[inset_0_0_30px_gray] z-20" />

        {/* Glossy Reflection */}
        <div className="absolute top-[90px] left-[110px] w-8 h-8 rounded-full bg-white opacity-10 blur-md rotate-45 z-30" />

        {/* Central Ring Around Iris */}
        <div className="absolute inset-[20%] w-[60%] h-[60%] border border-gray-300 rounded-full blur-[0.5px] z-10" />
      </div>


      {/* STATUS TEXT */}
      <div className="text-lg font-mono text-gray-400">
        {access ? (
          <span className="text-green-500 animate-blink">ACCESS GRANTED</span>
        ) : (
          "SCANNING EYE..."
        )}
      </div>
    </div>
  );
};

export default EyeScanner;