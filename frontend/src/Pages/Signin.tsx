import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export const Signin = () => {
  const usernameRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();

  async function handleSignin() {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;

    try {
      const response = await axios.post(`${BACKEND_URL}/api/v1/signin`, {
        username,
        password,
      });
      const jwt = response.data.token;
      localStorage.setItem("token", jwt);
      navigate("/contents");
    } catch (err) {
      alert("Signin failed");
    }
  }

  return (
    <div className="w-screen h-screen bg-gradient-to-br from-zinc-900 via-black to-zinc-800 flex items-center justify-center px-4 relative overflow-hidden">
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

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-2xl shadow-xl p-6 md:p-10 w-full max-w-sm space-y-6 z-10"
      >
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">Welcome back</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">Enter your credentials to sign in</p>
        </div>

        <div className="space-y-4">
          <Input ref={usernameRef} placeholder="Username" />
          <Input ref={passwordRef} placeholder="Password" type="password" />
        </div>

        <Button onClick={handleSignin} className="w-full text-base py-6">
          Sign In
        </Button>
      </motion.div>
    </div>
  );
};
