import Lottie from "lottie-react";
import devAnimation from "../assets/developer (1).json";
import "./hero.css"
const Home = () => {
  return (
    <section className="flex justify-center items-center min-h-screen bg-gradient-to-b from-white via-gray-100 to-white">
      <div className="text-center px-4">
        <h1 className="relative text-2xl sm:text-4xl font-bold text-gray-800 mb-4 mx-auto">
          <span className="whitespace-nowrap overflow-hidden border-r-4 border-black animate-typing block w-[22ch]">
            Hi, I'm Munishwar Kalra
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-6">
          MERN Stack Developer | Full Stack Web Enthusiast
        </p>
        <div className="w-[300px] h-[300px] mx-auto">
          <Lottie animationData={devAnimation} loop={true} />
        </div>
      </div>
    </section>
  );
};

export default Home;
