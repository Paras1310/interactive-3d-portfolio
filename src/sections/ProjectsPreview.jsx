import FeaturedProjectPanel from "../components/projects/FeaturedProjectPanel";
import ProjectsArchiveCta from "../components/projects/ProjectsArchiveCta";
import Container from "../components/ui/Container";
import FadeInSection from "../components/ui/FadeInSection";
import SectionHeading from "../components/ui/SectionHeading";
import { projectsData } from "../data/portfolioData";

function ProjectsPreview() {
  const featuredProjects = projectsData.items
    .filter((project) => project.featured)
    .slice(0, 3);

  const hasMoreProjects = projectsData.items.length > featuredProjects.length;

  return (
    <section
      id="projects"
      className="border-b border-blue-400/10 py-20 sm:py-24 lg:py-28"
    >
      <Container>
        <FadeInSection>
          <SectionHeading
            title={projectsData.title}
            subtitle="Featured work and practical execution"
            description="This section highlights selected project work. The homepage stays focused by showing featured projects only, while the archive is ready to grow as more work is added."
          />
        </FadeInSection>

        <div className="space-y-8">
          {featuredProjects.map((project, index) => (
            <FadeInSection key={project.id} delay={index * 0.1}>
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
                alignment={project.alignment}
              />
            </FadeInSection>
          ))}

          {hasMoreProjects ? (
            <FadeInSection delay={0.12}>
              <ProjectsArchiveCta
                totalProjects={projectsData.items.length}
                featuredCount={featuredProjects.length}
              />
            </FadeInSection>
          ) : null}
        </div>
      </Container>
    </section>
  );
}

export default ProjectsPreview;