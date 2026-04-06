import "@/assets/css/tomorrow.css";
import { FlipWords } from "@/components/ui/flip-words";
import Meteors from "@/components/ui/meteors";
import SparklesText from "@/components/ui/sparkles-text";
import PortfolioPage from "@/pages/About/About";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import { useEffect, useState } from "react";

// Grid Background
const GridBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <rect
          width="40"
          height="40"
          fill="none"
          stroke="white"
          strokeWidth="0.5"
          className="opacity-40 animate-gridPulse"
        />
      </pattern>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  </div>
);

export default function Hero() {
  const words = [
    "Flutter Mobile App Developer | Clean Architecture",
    "Dart & Riverpod Enthusiast",
    "Firebase, Node.js & PostgreSQL",
    "Full-Stack Development & UI/UX Focus",
    "Problem Solver & Clean Code Advocate",
  ];

  const [code] = useState(`
const profile = {
    name: 'Goutom Roy',
    title: 'Flutter Mobile App Developer | Clean Architecture | Problem Solver',
    skills: [
        'Flutter', 'Dart', 'Riverpod', 'Firebase', 'REST API Integration',
        'Dio', 'Freezed', 'Clean Architecture', 'Node.js', 'Sequelize ORM',
        'PostgreSQL', 'Google Maps Integration', 'Drift / SQLite', 'Git', 'Linux'
    ],
    hardWorker: true,
    quickLearner: true,
    problemSolver: true,
    cleanCodeAdvocate: true,
    yearsOfExperience: 3,
    hireable: function () {
        return (
            this.hardWorker &&
            this.problemSolver &&
            this.skills.length >= 6 &&
            this.yearsOfExperience >= 3
        );
    }
};
`);

  useEffect(() => {
    Prism.highlightAll();

    const style = document.createElement("style");
    style.textContent = `
      @keyframes gridPulse {
        0%, 100% { opacity: 0.1; }
        50% { opacity: 0.3; }
      }
      @keyframes dotPulse {
        0%, 100% { opacity: 0.2; transform: scale(0.8); }
        50% { opacity: 0.5; transform: scale(1.2); }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, [code]);

  return (
    <main className="bg-[#020617] text-white min-h-screen relative">
      {/* Hero Section */}
      <section className="hero min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8 py-10 md:py-16 lg:py-0">
        <GridBackground />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Meteors number={10} />
        </div>

        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10 py-8 md:py-10 lg:py-12">
          {/* Left Column - Text */}
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0 relative space-y-6 animate__animated animate__fadeInLeft">
            <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 mb-6">
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
              <span className="text-gray-300 text-xs font-medium">
                Welcome to my universe
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
              <SparklesText text="Hello" />
              <span className="relative inline-block">I&apos;m Goutom Roy</span>
            </h1>

            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500/10 to-teal-500/10 border border-blue-500/20 backdrop-blur-sm">
              <FlipWords
                className="text-lg sm:text-xl text-blue-400 font-medium"
                words={words}
              />
            </div>

            <p className="text-base sm:text-xl text-gray-300/90 leading-relaxed">
              Passionate developer crafting modern web and mobile applications
              with clean, maintainable code. Focused on UI/UX, Flutter, Dart,
              and full-stack solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <a
                href="https://github.com/roySuzon"
                className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-teal-400 text-white font-medium hover:scale-105 transition-all duration-300"
              >
                Learn More <i className="fas fa-arrow-right"></i>
              </a>
              <a
                href="https://drive.google.com/file/d/10EUZ34hiWil5yfeIaNFLHO31-VF8rQ5t/view"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gray-900 border border-gray-700/50 text-gray-300 font-medium hover:text-white hover:scale-105 transition-all duration-300"
              >
                Get Resume <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
          {/* Right Column - Code */}
          <div className="w-full lg:w-1/2 animate__animated animate__fadeInDown">
            <div className="gradient-border rounded-lg">
              <div className="code-window bg-[#091121] rounded-lg">
                <div className="window-header flex items-center gap-2 p-2">
                  <div className="window-dot bg-red-500 rounded-full w-3 h-3"></div>
                  <div className="window-dot bg-yellow-500 rounded-full w-3 h-3"></div>
                  <div className="window-dot bg-green-500 rounded-full w-3 h-3"></div>
                  <span className="ml-2 text-sm text-gray-400 flex items-center gap-2">
                    <i className="fas fa-code"></i> developer.js
                  </span>
                </div>
                <pre className="language-javascript p-4 overflow-x-auto">
                  <code className="language-javascript">{code}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce flex flex-col items-center gap-2">
          <span className="text-gray-400 text-sm flex items-center gap-2">
            <i className="fas fa-mouse text-blue-400"></i> About me
          </span>
          <i className="fas fa-chevron-down text-blue-400 text-xl"></i>
        </div>
      </section>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce flex flex-col items-center gap-2">
        <span className="text-gray-400 text-sm flex items-center gap-2">
          <i className="fas fa-mouse text-blue-400"></i>
          About me
        </span>
        <i className="fas fa-chevron-down text-blue-400 text-xl"></i>
      </div>
      <PortfolioPage />
    </main>
  );
}