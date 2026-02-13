import { useState } from "react";
import { navLinks, profile } from "../data/portfolioData";
import ThemeToggle from "./ThemeToggle";
import { CloseIcon, MenuIcon } from "./icons";

function Navbar({ theme, onToggleTheme }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMenu = () => {
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-[#f8f8f8]/90 backdrop-blur-xl dark:border-zinc-800 dark:bg-[#0a0a0a]/90">
      <nav className="container-shell flex h-16 items-center justify-between">
        <a
          href="#home"
          className="text-sm font-semibold tracking-wide text-zinc-900 dark:text-zinc-100"
        >
          {profile.name}
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm text-zinc-600 transition hover:text-cyan-700 dark:text-zinc-400 dark:hover:text-cyan-300"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            type="button"
            onClick={() => setMobileOpen((state) => !state)}
            aria-label="Toggle navigation menu"
            className="inline-flex rounded-lg border border-zinc-300 p-2 text-zinc-700 transition hover:border-cyan-600 hover:text-cyan-700 md:hidden dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-cyan-500 dark:hover:text-cyan-300"
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="container-shell border-t border-zinc-200/80 py-3 md:hidden dark:border-zinc-800">
          <ul className="space-y-2">
            {navLinks.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={closeMenu}
                  className="block rounded-lg px-3 py-2 text-sm text-zinc-700 transition hover:bg-zinc-100 hover:text-cyan-700 dark:text-zinc-300 dark:hover:bg-zinc-900 dark:hover:text-cyan-300"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;
