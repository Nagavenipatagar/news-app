// import ThemeToggle from "./theme/ThemeToggle";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-800 bg-white dark:bg-gray-900 flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-700">
      <Link href="/" className="flex items-center gap-2 shrink-0">
        <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold">
          N
        </div>
        <span className="hidden sm:block font-semibold text-lg text-gray-900 dark:text-white">
          News App
        </span>
      </Link>
      {/* <ThemeToggle /> */}
    </header>
  );
}
