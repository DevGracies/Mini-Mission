import React, { useState, useEffect } from "react";

type MockEntry = {
  name: string;
  date: string;
  time: string;
};

const generateFakeData = (): MockEntry => {
  const names = ["Nova Skye", "Liam Sol", "Zara Flux", "Kai Vortex", "Nyra Storm"];
  const now = new Date();
  return {
    name: names[Math.floor(Math.random() * names.length)],
    date: now.toLocaleDateString(),
    time: now.toLocaleTimeString(),
  };
};

const LockIn: React.FC = () => {
  const [data, setData] = useState<MockEntry | null>(null);
  const [isLocked, setIsLocked] = useState(false);

  useEffect(() => {
    const mock = generateFakeData();
    setData(mock);
  }, []);

  const handleLockIn = () => {
    setIsLocked((prev) => !prev);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black px-4 py-10 text-white">
      {/*The Lock In Button */}
      <button
        onClick={handleLockIn}
        className=" text-white text-10xl px-12 py-6 rounded duration-300 font-bold tracking-widest "
      >
        LOCK IN
      </button>
<br />
      {isLocked && data && (
        <div className="mt-10 w-20px max-w-md bg-gray-900/70 backdrop-blur-lg border border-purple-600 rounded-2xl p-6 shadow-lg animate-fadeIn">
          <h3 className="text-purple-300 text-lg font-semibold mb-4">Data Saved Successfully</h3>
          <div className="space-y-2 text-sm sm:text-base font-mono text-gray-200">
            <div className="flex justify-between">
              <span className="text-gray-400">👤 Name:</span>
              <span>{data.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">📅 Date:</span>
              <span>{data.date}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">⏰ Time:</span>
              <span>{data.time}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LockIn;
