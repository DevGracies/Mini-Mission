import type { Config } from 'tailwindcss';

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 5s linear infinite',
        'laser-move': 'laserMove 2s ease-in-out infinite',
        'blink': 'blinkText 1.2s steps(2, start) infinite',
         glow: "glow 2s ease-in-out infinite",
        typewriter: "typewriter 3s steps(40, end) infinite",
        glowPulse: "glowPulse 2s ease-in-out infinite",
      },
      keyframes: {
        laserMove: {
          '0%': { transform: 'translateY(0%)' },
          '50%': { transform: 'translateY(95%)' },
          '100%': { transform: 'translateY(0%)' },
        },
        blinkText: {
          '0%, 100%': { opacity: 0 },
          '50%': { opacity: 1 },
        },
          glow: {
          "0%, 100%": { textShadow: "0 0 10px #a855f7, 0 0 20px #a855f7" },
          "50%": { textShadow: "0 0 20px #9333ea, 0 0 30px #9333ea" },
        },
        typewriter: {
          "0%": { width: "0ch" },
          "100%": { width: "100%" },
        },
         glowPulse: {
          "0%, 100%": { boxShadow: "0 0 15px #a855f7" },
          "50%": { boxShadow: "0 0 30px #a855f7" },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};

export default config;
