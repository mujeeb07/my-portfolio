import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import { aboutPoints } from "../data/portfolioData";

function About() {
  return (
    <section id="about" className="section-spacing border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-[#111111]">
      <div className="container-shell">
        <Reveal>
          <SectionTitle
            eyebrow="About Me"
            title="Commerce to Code: A focused transition into software engineering"
            description="I approach software development with practical problem-solving, architecture-first thinking, and continuous iteration."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {aboutPoints.map((point) => (
              <article key={point} className="glass-card p-5 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
                {point}
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default About;
