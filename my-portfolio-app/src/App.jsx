import { useState } from "react";
import reactLogo from "./assets/react.svg";
// import viteLogo from '/vite.svg'
import "./App.css";
import Home from "./components/hero";
import Nav from "./components/navbar";
function App() {
  return (
    <>
      <div>
        <Nav />
        <Home />
        <section id="about" className="min-h-screen bg-gray-200">
          About Section
        </section>
        <section id="projects" className="min-h-screen bg-gray-300">
          Projects Section
        </section>
        <section id="experience" className="min-h-screen bg-gray-400">
          Experience Section
        </section>
        <section id="contact" className="min-h-screen bg-gray-500">
          Contact Section
        </section>
      </div>
    </>
  );
}

export default App;
