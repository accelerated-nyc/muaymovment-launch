import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ScrollReveal, LineDraw } from "@/components/ScrollReveal";

const cards = [
  {
    num: "01",
    title: "Seated Foundations",
    desc: "For clients with significant motor limitation — wheelchair-accessible entry point.",
  },
  {
    num: "02",
    title: "Standing Progressions",
    desc: "Balance, weight transfer, and controlled striking patterns.",
  },
  {
    num: "03",
    title: "Full Combination Work",
    desc: "Pad work, defensive movement, and power generation.",
  },
];

const GoldBar = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <div ref={ref} className="h-px mb-6 overflow-hidden">
      <motion.div
        className="h-full bg-gold/50"
        initial={{ width: 0 }}
        animate={isInView ? { width: 32 } : {}}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
};

const MethodSection = () => {
  const quoteRef = useRef(null);
  const quoteInView = useInView(quoteRef, { once: true, margin: "-40px" });

  return (
    <section id="method" className="relative bg-charcoal film-grain py-28 md:py-40 overflow-hidden">
      <div
        className="absolute bottom-0 left-[8%] w-px h-[50vh] origin-bottom opacity-[0.08]"
        style={{
          background: "linear-gradient(to top, hsl(var(--gold)), transparent)",
          transform: "rotate(-10deg)",
        }}
      />

      <div className="container mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div>
            <ScrollReveal>
              <p className="text-gold/70 text-[13px] tracking-[0.3em] uppercase mb-6 font-body">The Method</p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-semibold text-off-white leading-[1.05] mb-8">
                Ancient discipline.
                <br />
                Modern rehabilitation.
                <br />
                <span className="text-gold">One system.</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-silver/70 text-lg leading-relaxed max-w-lg mb-10">
                Muay Thai's eight-limbed framework emphasizes balance, rhythm, rotational hip mobility, and progressive resistance — the exact biomechanical pillars that motor function rehabilitation requires.
              </p>
            </ScrollReveal>

            <LineDraw className="my-10 max-w-sm" />

            {/* Blockquote with animated left border */}
            <div ref={quoteRef} className="relative pl-6">
              <motion.div
                className="absolute left-0 top-0 w-[2px] bg-gold/30"
                initial={{ height: 0 }}
                animate={quoteInView ? { height: "100%" } : {}}
                transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              />
              <ScrollReveal delay={0.3}>
                <blockquote className="text-2xl md:text-3xl font-heading font-light text-off-white/90 leading-snug max-w-lg">
                  "From limited motor function to full power.{" "}
                  <span className="text-gold font-medium">The spectrum is the program.</span>"
                </blockquote>
              </ScrollReveal>
            </div>
          </div>

          {/* Right column: progression cards — slide-in from right */}
          <div className="flex flex-col gap-4">
            {cards.map((card, i) => (
              <ScrollReveal key={i} delay={0.15 + i * 0.1} direction="right">
                <div className="group relative p-8 bg-black/40 border border-white/[0.06] transition-all duration-500 hover:border-gold/30 hover:shadow-[0_0_30px_hsl(var(--gold)/0.06)] border-glow">
                  <span className="absolute top-8 right-8 text-5xl font-heading font-semibold text-white/[0.03] group-hover:text-gold/[0.08] transition-colors duration-500">
                    {card.num}
                  </span>
                  <div className="relative z-10">
                    <GoldBar />
                    <h3 className="font-heading text-xl font-medium text-off-white mb-3 group-hover:text-gold transition-colors duration-300">
                      {card.title}
                    </h3>
                    <p className="text-silver/70 text-sm leading-relaxed">{card.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
