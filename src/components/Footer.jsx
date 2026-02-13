import { profile } from "../data/portfolioData";

function Footer({ year, name }) {
  return (
    <footer className="border-t border-zinc-200/80 bg-[#f8f8f8] py-6 dark:border-zinc-800 dark:bg-[#0a0a0a]">
      <div className="container-shell flex flex-col items-start justify-between gap-3 text-xs text-zinc-600 sm:flex-row sm:items-center dark:text-zinc-400">
        <p>
          {year} {name}. All rights reserved.
        </p>
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="transition hover:text-cyan-700 dark:hover:text-cyan-300"
        >
          Built with React + Tailwind CSS
        </a>
      </div>
    </footer>
  );
}

export default Footer;
