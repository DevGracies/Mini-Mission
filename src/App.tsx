
import './index.css'
import React from "react";
import EyeScanner from "./components/EyeScanner";
import SovereigntyOath from "./components/SovereigntyOath";
import LockIn from "./components/LockIn";

const App: React.FC = () => {
  return (
  <div>
<div className="flex items-center justify-center">
  <div className="text-white text-3xl font-semibold animate-pulse border-white rounded-xl p-6 m-10 shadow-lg">
    {/* Look into the camera */}
  </div>
</div>
  <EyeScanner />
  <SovereigntyOath />
  br
  <LockIn />
  </div> )
};

export default App;
