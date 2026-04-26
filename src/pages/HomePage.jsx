import Footer from "../components/layout/Footer";
import Hero from "../sections/Hero";
import IdentityStrip from "../sections/IdentityStrip";
import Timeline from "../sections/Timeline";
import ProjectsPreview from "../sections/ProjectsPreview";
import Skills from "../sections/Skills";
import Future from "../sections/Future";
import Contact from "../sections/Contact";

function HomePage() {
  return (
    <>
      <Hero />
      <IdentityStrip />
      <Timeline />
      <ProjectsPreview />
      <Skills />
      <Future />
      <Contact />
      <Footer />
    </>
  );
}

export default HomePage;