import { motion } from "framer-motion";
import HeroScene from "../components/three/HeroScene";
import Button from "../components/ui/Button";
import Container from "../components/ui/Container";
import { heroData } from "../data/portfolioData";

function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden border-b border-white/10 py-20 sm:py-24"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-[14%] h-40 w-40 rounded-full bg-blue-400/10 blur-3xl sm:h-64 sm:w-64" />
        <div className="absolute bottom-[10%] right-[8%] h-44 w-44 rounded-full bg-cyan-400/10 blur-3xl sm:h-72 sm:w-72" />
      </div>

      <Container className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <motion.div
            className="order-2 max-w-4xl lg:order-1"
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="mb-4 text-[11px] uppercase tracking-[0.35em] text-zinc-500 sm:text-xs">
              {heroData.eyebrow}
            </p>

            <h1 className="max-w-5xl text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl xl:text-7xl">
              {heroData.headlineTop}{" "}
              <span className="text-blue-400">{heroData.headlineAccent}</span>{" "}
              {heroData.headlineBottom}
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-zinc-300 sm:text-base md:text-lg">
              {heroData.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {heroData.meta.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-blue-400/20 bg-blue-400/[0.06] px-3 py-1 text-xs text-zinc-300"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              {heroData.buttons.map((button, index) => (
                <motion.div
                  key={button.label}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.2 + index * 0.1,
                    ease: "easeOut",
                  }}
                  className="w-full sm:w-auto"
                >
                  <Button
                    href={button.href}
                    variant={button.variant}
                    className="w-full sm:w-auto"
                  >
                    {button.label}
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className="order-1 relative lg:order-2"
          >
            <div className="absolute inset-0 rounded-full bg-blue-400/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-blue-400/15 bg-gradient-to-b from-blue-400/[0.06] to-white/[0.02] p-3 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-md sm:p-4">
              <div className="absolute left-5 top-5 z-10 rounded-full border border-blue-400/20 bg-black/40 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-zinc-300 backdrop-blur-sm sm:text-xs">
                System Identity
              </div>
              <HeroScene />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;