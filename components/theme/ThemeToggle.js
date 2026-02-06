import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="shrink-0 px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-sm cursor-pointer font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
    >
      {theme === "light" ? "🌙 " : "☀️ "}
    </button>
  );
}
