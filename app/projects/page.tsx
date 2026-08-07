import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      {/* Hero */}
      <section className="px-6 pb-20 pt-32 md:px-12 lg:px-20 lg:pb-28 lg:pt-40">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-[#b7ff3c]">
            Our Work
          </p>

          <h1 className="max-w-4xl text-5xl font-semibold tracking-tight md:text-6xl lg:text-7xl">
            Projects
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60 md:text-xl">
            Selected digital solutions we've designed and developed
            for real-world use cases.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="px-6 pb-24 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          {projects.length === 0 ? (
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] px-8 py-20 text-center">
              <h2 className="text-2xl font-semibold">
                Projects coming soon
              </h2>

              <p className="mx-auto mt-3 max-w-md text-white/50">
                We're currently building our portfolio of selected
                projects and case studies.
              </p>
            </div>
          ) : (
            <div className="grid gap-10 md:grid-cols-2">
              {projects.map((project) => (
                <article key={project.slug} className="group">
                  {/* Image */}
                  <Link
                    href={`/projects/${project.slug}`}
                    className="relative block overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
                  >
                    <div className="relative aspect-[16/10]">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>
                  </Link>

                  {/* Content */}
                  <div className="pt-6">
                    <p className="text-sm font-medium text-[#b7ff3c]">
                      {project.category}
                    </p>

                    <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
                      {project.title}
                    </h2>

                    <p className="mt-3 max-w-xl leading-7 text-white/55">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/60"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/projects/${project.slug}`}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white transition hover:text-[#b7ff3c]"
                    >
                      View Case Study
                      <span className="transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}