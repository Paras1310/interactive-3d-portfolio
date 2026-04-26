import Container from "../components/ui/Container";
import FadeInSection from "../components/ui/FadeInSection";
import SectionHeading from "../components/ui/SectionHeading";
import TimelineItem from "../components/timeline/TimelineItem";
import { timelineData } from "../data/portfolioData";

function Timeline() {
  return (
    <section
      id="timeline"
      className="border-b border-white/10 py-20 sm:py-24 lg:py-28"
    >
      <Container>
        <FadeInSection>
          <SectionHeading
            title={timelineData.title}
            subtitle={timelineData.subtitle}
            description={timelineData.description}
          />
        </FadeInSection>

        <div className="space-y-6">
          {timelineData.items.map((item, index) => (
            <FadeInSection key={item.title} delay={index * 0.08}>
              <TimelineItem
                phase={item.phase}
                title={item.title}
                description={item.description}
                isLast={index === timelineData.items.length - 1}
              />
            </FadeInSection>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Timeline;