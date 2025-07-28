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
    <div className="flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black px-4 py-10 ">
      {/*The Lock In Button */}
<button
  onClick={handleLockIn}
  className="px-20 py-12 bg-transparent text-black rounded-3xl shadow-2xl hover:scale-105 transition duration-300 font-extrabold tracking-[0.3em] uppercase"
  style={{ fontSize: "1rem" }} 
>
  LOCK IN
</button>
<br />
      {isLocked && data && (
       <div className="mt-10 max-w-md bg-gray-900/70 backdrop-blur-lg rounded-2xl p-6 shadow-lg animate-fadeIn">
          <h3 className="text-purple-300 text-lg font-semibold mb-4">Data Saved Successfully</h3>
          <div className="space-y-2 text-sm sm:text-base font-mono text-gray-200">
            <div className="flex gap-6">
              <span className="text-gray-400"> "Name": </span>
              <span>{` "${data.name}"`}</span>
            </div>
            <div className="flex gap-5">
              <span className="text-gray-400"> "Date": </span>
              <span>{`"${data.date}"`}</span>
            </div>
            <div className="flex gap-5">
              <span className="text-gray-400"> "Time": </span>
              <span>{`"${data.time}"`}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LockIn;
