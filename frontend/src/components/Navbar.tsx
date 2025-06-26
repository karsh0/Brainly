import { Moon, Sun } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { useTheme } from "../hooks/theme-provider";

export function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="w-full h-20 flex justify-between items-center px-10 py-5 border-b border-gray-200 dark:border-gray-600 shadow-sm bg-white dark:bg-zinc-900">
      <div className="w-full flex items-center gap-4">
        <SidebarTrigger />
        <span className="text-xl font-semibold text-black dark:text-white">Neuron</span>
      </div>
      <button onClick={toggleTheme} className="text-black dark:text-white">
        {theme === "dark" ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
      </button>
    </div>
  );
}
