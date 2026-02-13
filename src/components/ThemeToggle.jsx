import { MoonIcon, SunIcon } from "./icons";

function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 text-xs font-medium text-zinc-700 transition hover:border-cyan-600 hover:text-cyan-700 dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-cyan-500 dark:hover:text-cyan-300"
    >
      {isDark ? <SunIcon className="h-4 w-4" /> : <MoonIcon className="h-4 w-4" />}
      <span className="hidden sm:inline">{isDark ? "Light Mode" : "Dark Mode"}</span>
    </button>
  );
}

export default ThemeToggle;
