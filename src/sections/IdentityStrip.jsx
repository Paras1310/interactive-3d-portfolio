import { identityData } from "../data/portfolioData";
import Container from "../components/ui/Container";
import FadeInSection from "../components/ui/FadeInSection";

function IdentityStrip() {
  return (
    <section className="border-b border-blue-400/10 py-6 sm:py-8">
      <Container>
        <FadeInSection>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {identityData.map((item) => (
              <div
                key={item.label}
                className="rounded-[1.25rem] border border-blue-400/10 bg-blue-400/[0.03] px-4 py-4 backdrop-blur-sm"
              >
                <p className="text-[11px] uppercase tracking-[0.3em] text-zinc-500 sm:text-xs">
                  {item.label}
                </p>
                <p className="mt-2 text-sm font-medium text-white sm:text-base">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </FadeInSection>
      </Container>
    </section>
  );
}

export default IdentityStrip;