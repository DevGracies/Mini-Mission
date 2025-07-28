import React, { useEffect, useRef, useState } from "react";
import "../index.css";

const EyeScanner: React.FC = () => {
  const [access, setAccess] = useState(false);
  const laserRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const getCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error("Camera access error:", error);
      }
    };
    getCamera();
  }, []);

  useEffect(() => {
    if (!laserRef.current) return;
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

  // Simulate access granted after 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => setAccess(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center bg-black text-white space-y-8">

      <div className="relative w-[300px] h-[300px] rounded-full overflow-hidden border-[2px] border-gray-700 shadow-[0_0_30px_#1f2937] bg-black">

        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          className="absolute w-full h-full object-cover"
        />

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

        <div className="absolute inset-0 rounded-full border-2 border-gray-500 animate-pulse-slow blur-sm z-10" />
        <div className="absolute inset-2 rounded-full border border-gray-700 opacity-30 z-10" />
        <div className="absolute inset-4 rounded-full border border-gray-800 opacity-20 z-10" />

        <div className="absolute inset-[25%] w-[50%] h-[50%] bg-gradient-radial from-gray-400 via-gray-900 to-black rounded-full shadow-[inset_0_0_50px_gray] z-20" />


        <div className="absolute top-[90px] left-[110px] w-8 h-8 rounded-full bg-white opacity-10 blur-md rotate-45 z-30" />

        <div className="absolute inset-[20%] w-[60%] h-[60%] border border-gray-300 rounded-full blur-[0.5px] z-10" />
      </div>

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
