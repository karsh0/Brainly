import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import BrainlyImage from "../assets/brainly-image.png";
import { useState } from "react";
import { Moon, SunDim } from "lucide-react";
import { motion } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter';

export function Landing() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div
      className={`relative w-screen h-screen overflow-hidden transition-colors duration-500 ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <motion.div
        className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] rounded-full bg-purple-500 opacity-30 blur-3xl"
        animate={{ x: [0, 100, 0], y: [0, 100, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] rounded-full bg-indigo-600 opacity-20 blur-2xl"
        animate={{ x: [0, -100, 0], y: [0, -100, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />

      {/* Navigation Bar */}
      <div className="relative z-10 flex justify-between px-5 md:px-20 py-5 items-center">
        <p className="text-xl md:text-2xl font-bold">Neuron.</p>
        <div className="flex gap-4 md:gap-8 items-center">
          <div onClick={() => setDarkMode(!darkMode)} className="cursor-pointer">
            {darkMode ? <Moon /> : <SunDim />}
          </div>
          <div className="md:text-lg font-medium">
            <Link to="/signin">Signin</Link>
          </div>
          <Button variant={"destructive"} onClick={() => navigate("/signup")}>Register</Button>
        </div>
      </div>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full flex justify-center mt-12 md:mt-20 px-4"
      >
        <div className="w-full md:w-3/4 lg:w-1/2 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tighter">
            Get your life organized with Neuron.
          </h1>
         <motion.p
  className="md:text-xl text-gray-400 mb-10"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.5, duration: 0.6 }}
>
  Neuron is an all-in-one Notion system that tracks your{" "}
  <span className="text-indigo-400 font-semibold">
    <Typewriter
      words={['goals.', 'projects.', 'notes.', 'tasks.', 'thoughts.']}
      loop={0}
      cursor
      cursorStyle="|"
      typeSpeed={60}
      deleteSpeed={60}
      delaySpeed={1000}
    />
  </span>
</motion.p>
          <img
            src={BrainlyImage}
            alt="Brainly Demo"
            className="rounded-xl mx-auto max-w-full w-[95%] md:w-[700px]"
          />
        </div>
      </motion.div>

      <div className="absolute bottom-0 z-10 w-full flex gap-4 justify-end px-6 md:px-10 pb-4 md:pb-6 mt-10">
        <a href="https://github.com/karsh0/Brainly" target="_blank" rel="noopener noreferrer">
          <img
            src={
              darkMode
                ? "https://cdn-icons-png.flaticon.com/128/11378/11378534.png"
                : "https://cdn-icons-png.flaticon.com/128/25/25657.png"
            }
            className="w-6 md:w-8"
            alt="GitHub"
          />
        </a>
        <a href="https://x.com/Karan_tw" target="_blank" rel="noopener noreferrer">
          <img
            src="https://cdn-icons-png.flaticon.com/128/5969/5969020.png"
            className="w-6 md:w-8"
            alt="Twitter"
          />
        </a>
      </div>
    </div>
  );
}
