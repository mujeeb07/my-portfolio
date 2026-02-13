import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import { skillCategories } from "../data/portfolioData";

function Skills() {
  return (
    <section id="skills" className="section-spacing border-b border-zinc-200 bg-[#f5f5f5] dark:border-zinc-800 dark:bg-[#181818]">
      <div className="container-shell">
        <Reveal>
          <SectionTitle
            eyebrow="Skills"
            title="Industry-aligned MERN stack capabilities"
            description="A practical mix of frontend craftsmanship, backend architecture, deployment tools, and core problem-solving fundamentals."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((category) => (
              <article key={category.title} className="glass-card p-5">
                <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-cyan-700 dark:text-cyan-400">
                  {category.title}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-md bg-zinc-200 px-3 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Skills;
