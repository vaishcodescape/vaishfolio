import { ArrowUpRight } from "lucide-react"
import { WORK_EXPERIENCE, ACHIEVEMENTS, TECH_STACK, EMAIL, SOCIAL_LINKS } from "./data"
import Image from "next/image"

export default function Home() {
  return (
    <main className="space-y-12 pb-16">
      {/* Hero */}
      <section>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-3">
            <h1 className="text-3xl font-bold text-zinc-100">Aditya Vaish</h1>
            <p className="text-sm text-zinc-500">Software Engineer • ICT @ Dhirubhai Ambani University</p>
            <p className="text-sm text-zinc-300 leading-relaxed max-w-xl">
              I&apos;m a Software Engineer passionate about building scalable software and
              integrating AI/ML with DevOps. I love contributing to open source and tinkering
              with new technologies.
            </p>
          </div>
          <div className="relative h-24 w-24 shrink-0">
            <Image
              src="/profile_pic.jpeg"
              alt="Aditya Vaish"
              fill
              className="rounded-full object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Experience */}
      <section>
        <h2 className="text-xl font-bold mb-1 text-zinc-100">Experience</h2>
        <p className="text-zinc-500 text-sm mb-3">Work and campus leadership.</p>
        <div className="flex flex-col divide-y divide-zinc-800 text-sm">
          {WORK_EXPERIENCE.map((job) => (
            <article key={job.id} className="py-4 first:pt-0 last:pb-0">
              <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                <a
                  href={job.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-base text-zinc-100 hover:text-zinc-300 transition-colors inline-flex items-center gap-1"
                >
                  {job.company}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
                <p className="text-zinc-500 shrink-0 tabular-nums">
                  {job.start} — {job.end}
                </p>
              </div>
              <p className="text-zinc-400 mt-0.5">{job.title}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section>
        <h2 className="text-xl font-bold mb-1 text-zinc-100">Tech Stack</h2>
        <p className="text-zinc-500 text-sm mb-3">Languages, frameworks, and tools I use.</p>
        <div className="space-y-3">
          {TECH_STACK.map((category) => (
            <div key={category.category} className="flex flex-col sm:flex-row gap-2">
              <span className="text-sm text-zinc-500 sm:w-36 shrink-0">{category.category}</span>
              <div className="flex flex-wrap gap-1.5">
                {category.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs bg-zinc-900 text-zinc-300 px-2 py-1"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements */}
      <section>
        <h2 className="text-xl font-bold mb-1 text-zinc-100">Achievements</h2>
        <p className="text-zinc-500 text-sm mb-3">Recognition and milestones.</p>
        <div className="flex flex-col divide-y divide-zinc-800 text-sm">
          {ACHIEVEMENTS.map((achievement) => (
            <article key={achievement.uid} className="py-4 first:pt-0 last:pb-0">
              <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                <h3 className="font-bold text-zinc-100">{achievement.title}</h3>
                <span className="text-zinc-500 shrink-0">{achievement.date}</span>
              </div>
              <p className="text-zinc-300 leading-relaxed mt-1">{achievement.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Connect */}
      <section>
        <h2 className="text-xl font-bold mb-1 text-zinc-100">Connect</h2>
        <p className="text-sm text-zinc-300 leading-relaxed mb-4">
          Feel free to reach out at{" "}
          <a href={`mailto:${EMAIL}`} className="link">
            {EMAIL}
          </a>
        </p>
        <div className="flex flex-wrap gap-4">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-zinc-400 hover:text-zinc-200 transition-colors"
            >
              {link.label}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          ))}
        </div>
      </section>

      {/* Resume */}
      <section>
        <a
          href="https://drive.google.com/file/d/1YKN1f_-7CM9ZTuz79qucQjvqWYxETVF7/view?usp=sharing"
          download="Aditya Vaish Resume.pdf"
          className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-200 transition-colors border border-zinc-800 px-4 py-2"
        >
          View Resume
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </section>
    </main>
  )
}
