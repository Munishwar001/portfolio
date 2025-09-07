import Lottie from "lottie-react";
import devAnimation from "../assets/developer (1).json";
import { Typewriter } from "react-simple-typewriter";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

const Home = () => {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center bg-[#0B0C1E] text-white overflow-hidden px-6">
      <div className="absolute top-0 left-0 w-60 h-60 bg-cyan-500 opacity-20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-pink-500 opacity-20 rounded-full blur-3xl animate-pulse" />

      <div className="flex flex-col md:flex-row items-center gap-8 max-w-6xl z-10 w-full">
        <div className="flex-1 text-center md:text-left space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            Hi I'm <br />
            <span className="text-cyan-400 inline-block">
              <Typewriter
                words={[
                  "Munishwar Kalra",
                  "MERN Stack Developer",
                  "Full Stack Web Enthusiast",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h1>

          <p className="text-gray-300 text-lg">
            Let’s build something amazing together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 hover:ring-2 hover:ring-cyan-300 transition-all duration-300 backdrop-blur-md">
              <ArrowRightIcon className="w-5 h-5 animate-bounce" />
              Hire Me
            </button>

            <button className="flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 hover:ring-2 hover:ring-teal-300 transition-all duration-300 backdrop-blur-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              View Projects
            </button>
          </div>
        </div>

        <div className="flex-1 w-full max-w-sm">
          <Lottie animationData={devAnimation} loop={true} />
        </div>
      </div>
    </section>
  );
};

export default Home;
