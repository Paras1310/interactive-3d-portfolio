import ContactLinkCard from "../components/cards/ContactLinkCard";
import Container from "../components/ui/Container";
import FadeInSection from "../components/ui/FadeInSection";
import SectionHeading from "../components/ui/SectionHeading";
import { contactData } from "../data/portfolioData";

function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-24 lg:py-28">
      <Container>
        <FadeInSection>
          <SectionHeading
            title={contactData.title}
            subtitle={contactData.subtitle}
            description={contactData.description}
          />
        </FadeInSection>

        <FadeInSection delay={0.1}>
          <div className="flex flex-wrap gap-3 sm:gap-4">
            {contactData.items.map((item) => (
              <ContactLinkCard
                key={item.label}
                label={item.label}
                href={item.href}
              />
            ))}
          </div>
        </FadeInSection>
      </Container>
    </section>
  );
}

export default Contact;