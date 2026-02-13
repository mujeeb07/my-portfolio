import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import { educationItems } from "../data/portfolioData";

function Education() {
  return (
    <section id="education" className="section-spacing border-b border-zinc-200 bg-[#f5f5f5] dark:border-zinc-800 dark:bg-[#181818]">
      <div className="container-shell">
        <Reveal>
          <SectionTitle
            eyebrow="Education & Learning"
            title="Structured learning backed by project execution"
            description="A transition into software engineering through focused training, real projects, and continuous upskilling."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {educationItems.map((item) => (
              <article key={item.title} className="glass-card p-6">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyan-700 dark:text-cyan-400">
                  {item.organization}
                </p>
                <h3 className="mt-3 text-lg font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">{item.detail}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Education;
