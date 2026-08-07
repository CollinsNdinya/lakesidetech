import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      {/* Back */}
      <section className="px-6 pt-28 md:px-12 lg:px-20 lg:pt-36">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/projects"
            className="text-sm text-white/50 transition hover:text-[#b7ff3c]"
          >
            ← Back to Projects
          </Link>
        </div>
      </section>

      {/* Hero */}
      <section className="px-6 pb-16 pt-12 md:px-12 lg:px-20 lg:pb-20 lg:pt-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#b7ff3c]">
            {project.category}
          </p>

          <h1 className="mt-5 max-w-5xl text-5xl font-semibold tracking-tight md:text-6xl lg:text-7xl">
            {project.title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/60 md:text-xl">
            {project.description}
          </p>
        </div>
      </section>

      {/* Main Image */}
      <section className="px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-white/10">
          <div className="relative aspect-[16/9]">
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="px-6 py-20 md:px-12 lg:px-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-[1fr_2fr]">
          {/* Sidebar */}
          <aside>
            <div>
              <p className="text-sm uppercase tracking-[0.15em] text-white/40">
                Services
              </p>

              <ul className="mt-4 space-y-2 text-white/70">
                {project.services.map((service) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
            </div>

            <div className="mt-10">
              <p className="text-sm uppercase tracking-[0.15em] text-white/40">
                Technologies
              </p>

              <ul className="mt-4 space-y-2 text-white/70">
                {project.technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Case Study */}
          <div className="space-y-16">
            <section>
              <p className="text-sm font-medium uppercase tracking-[0.15em] text-[#b7ff3c]">
                The Challenge
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                Solving a real business problem
              </h2>

              <p className="mt-5 leading-8 text-white/55">
                Every project begins with understanding the problem,
                the users, and the business goals. We design solutions
                around those requirements rather than simply adding
                technology for the sake of it.
              </p>
            </section>

            <section>
              <p className="text-sm font-medium uppercase tracking-[0.15em] text-[#b7ff3c]">
                The Solution
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                Designed around the people using it
              </h2>

              <p className="mt-5 leading-8 text-white/55">
                We combined thoughtful interface design with reliable
                technology to create a solution that is practical,
                responsive, and built around the needs of the business.
              </p>
            </section>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 px-6 py-24 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-medium uppercase tracking-[0.15em] text-[#b7ff3c]">
            Have a project in mind?
          </p>

          <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
            Let's build something that works for your business.
          </h2>

          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-full bg-[#b7ff3c] px-6 py-3 font-medium text-black transition hover:opacity-90"
          >
            Start a Project →
          </Link>
        </div>
      </section>
    </main>
  );
}