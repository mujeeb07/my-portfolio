import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import { projects } from "../data/portfolioData";

function Projects() {
  return (
    <section id="projects" className="section-spacing border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-[#111111]">
      <div className="container-shell">
        <Reveal>
          <SectionTitle
            eyebrow="Featured Projects"
            title="Selected work focused on real-world product development"
            description="Projects built end-to-end with authentication, payments, admin workflows, and scalable architecture."
          />

          <div className="mt-10 space-y-6">
            {projects.map((project) => (
              <article key={project.title} className="glass-card p-6 sm:p-8">
                <h3 className="text-xl font-semibold tracking-tight">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {project.description}
                </p>

                <ul className="mt-5 space-y-2 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-700 dark:bg-cyan-400" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-zinc-300 px-3 py-1 text-xs text-zinc-700 dark:border-zinc-700 dark:text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  {project.actions.map((action, index) => {
                    const isPrimary = index === 0;
                    const isExternal = action.href.startsWith("http");

                    return (
                      <a
                        key={action.label}
                        href={action.href}
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noreferrer" : undefined}
                        className={isPrimary ? "btn-primary" : "btn-secondary"}
                      >
                        {action.label}
                      </a>
                    );
                  })}
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Projects;
