import { ChevronDown } from "lucide-react";
import Logo from "@/components/Logo";
import { ScrollReveal } from "@/components/ScrollReveal";

const HeroSection = () => (
  <section className="relative min-h-screen flex flex-col bg-void film-grain overflow-hidden">
    {/* Background hero image */}
    <div className="absolute inset-0">
      <img
        src="/IMG_9931.JPG"
        alt="MuayMovment group kickboxing class with heavy bags"
        className="w-full h-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black/60" />
    </div>

    {/* Diagonal gold accent line */}
    <div
      className="absolute top-0 right-[15%] w-px h-[60vh] origin-top opacity-[0.12]"
      style={{
        background: "linear-gradient(to bottom, hsl(var(--gold)), transparent)",
        transform: "rotate(15deg)",
      }}
    />

    {/* Navigation bar */}
    <nav className="relative z-10 container mx-auto px-6 md:px-8 pt-8 flex items-center justify-between">
      <Logo />
      <div className="hidden md:flex items-center gap-8">
        {["Program", "Method", "Pricing", "Book"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-[13px] text-silver/70 tracking-[0.15em] uppercase font-body hover:text-gold transition-colors duration-300"
          >
            {item}
          </a>
        ))}
      </div>
    </nav>

    {/* Hero content — centered */}
    <div className="relative z-10 flex-1 flex items-center">
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-gold/80 text-[13px] tracking-[0.3em] uppercase mb-6 font-body">
              Adaptive Muay Thai Training
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-semibold text-off-white leading-[0.95] mb-8">
              Rewiring
              <br />
              Movement.
              <br />
              <span className="text-gold text-glow-gold">Reclaiming</span>
              <br />
              Power.
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-silver text-lg md:text-xl max-w-xl mx-auto leading-relaxed mb-12 font-light">
              Muay Thai-inspired mobility training engineered for bodies the fitness industry forgot.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.35}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#book"
                className="inline-flex items-center px-10 py-4 bg-gold text-black font-heading font-semibold text-sm tracking-[0.15em] uppercase btn-shimmer transition-all duration-400 hover:shadow-[0_0_40px_hsl(var(--gold)/0.25)]"
              >
                Book a Session
              </a>
              <a
                href="#program"
                className="inline-flex items-center px-10 py-4 border border-white/10 text-off-white font-heading font-medium text-sm tracking-[0.15em] uppercase transition-all duration-400 hover:border-gold/40 hover:text-gold"
              >
                See the Program
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>

    {/* Bottom edge fade + scroll indicator */}
    <div className="relative z-10 flex justify-center pb-12">
      <ChevronDown className="w-5 h-5 text-gold/50 bounce-arrow" />
    </div>
  </section>
);

export default HeroSection;
