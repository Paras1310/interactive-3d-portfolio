import RoadmapCard from "../components/cards/RoadmapCard";
import Container from "../components/ui/Container";
import FadeInSection from "../components/ui/FadeInSection";
import SectionHeading from "../components/ui/SectionHeading";
import { futureData } from "../data/portfolioData";

function Future() {
  return (
    <section
      id="future"
      className="border-b border-blue-400/10 py-20 sm:py-24 lg:py-28"
    >
      <Container>
        <FadeInSection>
          <SectionHeading
            title={futureData.title}
            subtitle={futureData.subtitle}
            description={futureData.description}
          />
        </FadeInSection>

        <div className="grid gap-5 sm:gap-6 md:grid-cols-2">
          {futureData.items.map((item, index) => (
            <FadeInSection key={item.title} delay={index * 0.1}>
              <RoadmapCard title={item.title} description={item.description} />
            </FadeInSection>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Future;