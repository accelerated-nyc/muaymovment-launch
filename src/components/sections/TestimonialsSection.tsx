import { ScrollReveal } from "@/components/ScrollReveal";

const testimonials = [
  {
    quote: "I spent two years being told what I couldn't do. MuayMovment showed me what I could. I'm throwing combinations now that I didn't think my body was capable of.",
    name: "Jim D.",
    desc: "Veteran, 67",
  },
  {
    quote: "For the first time in my life, a fitness program was designed around my body — not despite it. I feel seen, challenged, and genuinely stronger.",
    name: "Maria R.",
    desc: "MS Patient, 44",
  },
  {
    quote: "The progression framework is unlike anything in traditional PT. My clients are hitting milestones we didn't think possible at intake.",
    name: "Dr. Sarah K.",
    desc: "Rehabilitation Physician",
  },
];

const TestimonialsSection = () => (
  <section className="relative bg-charcoal py-28 md:py-40">
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent" />

    <div className="container mx-auto px-6 md:px-8">
      <ScrollReveal>
        <p className="text-gold/70 text-[13px] tracking-[0.3em] uppercase mb-4 font-body text-center">Testimonials</p>
        <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-semibold text-off-white mb-20 text-center">
          What They're <span className="text-gold">Saying</span>
        </h2>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <ScrollReveal key={i} delay={i * 0.12}>
            <div className="group relative p-8 md:p-10 bg-black/30 border border-white/[0.06] h-full transition-all duration-500 border-glow flex flex-col">
              {/* Gold accent bar */}
              <div className="w-6 h-px bg-gold/40 mb-8" />

              <p className="text-silver/70 text-[15px] leading-relaxed mb-8 flex-1">
                "{t.quote}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center">
                  <span className="text-xs text-gold font-heading font-semibold">{t.name.charAt(0)}</span>
                </div>
                <div>
                  <p className="text-off-white font-heading font-medium text-sm">{t.name}</p>
                  <p className="text-silver/55 text-[12px]">{t.desc}</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
