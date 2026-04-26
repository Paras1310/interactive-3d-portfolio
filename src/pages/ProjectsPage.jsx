import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import FeaturedProjectPanel from "../components/projects/FeaturedProjectPanel";
import Container from "../components/ui/Container";
import FadeInSection from "../components/ui/FadeInSection";
import SectionHeading from "../components/ui/SectionHeading";
import { projectsData } from "../data/portfolioData";

function ProjectsPage() {
  const totalProjects = projectsData.items.length;
  const categories = [...new Set(projectsData.items.map((project) => project.category))];

  return (
    <div className="bg-[#0a0a0a] text-white">
      <Navbar />

      <section className="border-b border-blue-400/10 py-20 sm:py-24 lg:py-28">
        <Container>
          <FadeInSection>
            <div className="mb-8 flex flex-wrap items-center gap-3">
              <Link
                to="/"
                className="inline-flex items-center rounded-full border border-blue-400/15 bg-blue-400/[0.04] px-4 py-2 text-sm text-zinc-300 transition duration-300 hover:border-blue-400/30 hover:bg-blue-400/[0.08] hover:text-white"
              >
                Back to Home
              </Link>

              <span className="rounded-full border border-blue-400/15 bg-blue-400/[0.05] px-3 py-1 text-xs text-zinc-300">
                {totalProjects} Project{totalProjects > 1 ? "s" : ""}
              </span>
            </div>

            <SectionHeading
              title="Projects Archive"
              subtitle="Current project work and future additions"
              description="This archive is structured to scale as more real project work is added. It is designed to represent technical growth, implementation quality, and project progression over time."
            />
          </FadeInSection>

          {categories.length ? (
            <FadeInSection delay={0.05}>
              <div className="mb-8 flex flex-wrap gap-2">
                {categories.map((category) => (
                  <span
                    key={category}
                    className="rounded-full border border-blue-400/15 bg-blue-400/[0.05] px-3 py-1 text-xs text-zinc-300"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </FadeInSection>
          ) : null}

          <div className="space-y-8">
            {projectsData.items.map((project, index) => (
              <FadeInSection key={project.id} delay={index * 0.08}>
                <FeaturedProjectPanel
                  type={project.type}
                  category={project.category}
                  title={project.title}
                  previewLabel={project.previewLabel}
                  description={project.description}
                  tech={project.tech}
                  highlights={project.highlights}
                  githubLink={project.githubLink}
                  liveLink={project.liveLink}
                  status={project.status}
                  year={project.year}
                  alignment={index % 2 === 0 ? "left" : "right"}
                />
              </FadeInSection>
            ))}
          </div>

          <FadeInSection delay={0.12}>
            <p className="mt-10 text-sm text-zinc-400">
              {projectsData.archiveNote}
            </p>
          </FadeInSection>
        </Container>
      </section>

      <Footer />
    </div>
  );
}

export default ProjectsPage;