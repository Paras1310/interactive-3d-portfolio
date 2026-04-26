import SkillCategoryCard from "../components/cards/SkillCategoryCard";
import Container from "../components/ui/Container";
import FadeInSection from "../components/ui/FadeInSection";
import SectionHeading from "../components/ui/SectionHeading";
import { skillsData } from "../data/portfolioData";

function Skills() {
  return (
    <section
      id="skills"
      className="border-b border-blue-400/10 py-20 sm:py-24 lg:py-28"
    >
      <Container>
        <FadeInSection>
          <SectionHeading
            title={skillsData.title}
            subtitle={skillsData.subtitle}
            description={skillsData.description}
          />
        </FadeInSection>

        <div className="grid gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillsData.items.map((skill, index) => (
            <FadeInSection key={skill.title} delay={index * 0.08}>
              <SkillCategoryCard title={skill.title} items={skill.items} />
            </FadeInSection>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Skills;