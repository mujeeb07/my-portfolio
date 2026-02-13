import { profile } from "../data/portfolioData";
import Reveal from "./Reveal";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./icons";
import image from "../public/img.jpeg"

function Hero() {
  return (
    <section id="home" className="section-spacing border-b border-zinc-200 bg-[#f8f8f8] pt-24 dark:border-zinc-800 dark:bg-[#0a0a0a] sm:pt-28">
      <div className="container-shell">
        <Reveal className="grid items-center gap-10 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <p className="inline-flex items-center rounded-full border border-cyan-800/40 bg-cyan-900/10 px-3 py-1 font-mono text-xs uppercase tracking-[0.18em] text-cyan-700 dark:text-cyan-400">
              Open to Opportunities
            </p>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-100">
              {profile.name}
            </h1>
            <p className="mt-3 text-lg font-medium text-zinc-700 dark:text-zinc-300">
              {profile.title}
            </p>
            <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
              {profile.summary}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="btn-primary">
                View Projects
              </a>
              <a href={profile.resumeLink} download className="btn-secondary">
                Download Resume
              </a>
              <a href="#contact" className="btn-secondary">
                Contact Me
              </a>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
                className="inline-flex rounded-full border border-zinc-300 p-2 text-zinc-700 transition hover:border-cyan-600 hover:text-cyan-700 dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-cyan-500 dark:hover:text-cyan-300"
              >
                <GitHubIcon />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                className="inline-flex rounded-full border border-zinc-300 p-2 text-zinc-700 transition hover:border-cyan-600 hover:text-cyan-700 dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-cyan-500 dark:hover:text-cyan-300"
              >
                <LinkedInIcon />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Send email"
                className="inline-flex rounded-full border border-zinc-300 p-2 text-zinc-700 transition hover:border-cyan-600 hover:text-cyan-700 dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-cyan-500 dark:hover:text-cyan-300"
              >
                <MailIcon />
              </a>
            </div>
          </div>

          <aside className="glass-card animate-float overflow-hidden rounded-full w-80 h-80 mx-auto">
            <img
              src={image}
              alt="image"
              className="h-full w-full object-cover scale-100"
              loading="eager"
            />
          </aside>
        </Reveal>
      </div>
    </section>
  );
}

export default Hero;
