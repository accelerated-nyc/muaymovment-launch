import { ScrollReveal, useCountUp, LineDraw } from "@/components/ScrollReveal";

const stats = [
  { value: 61, suffix: "M", label: "Adults with mobility-limiting conditions" },
  { value: 78, suffix: "%", label: "Report no access to adaptive fitness programming" },
  { value: 63, suffix: "%", label: "Of PT patients plateau without progressive training" },
];

const StatCard = ({ value, suffix, label, delay }: { value: number; suffix: string; label: string; delay: number }) => {
  const { count, ref } = useCountUp(value, 2000);
  return (
    <ScrollReveal delay={delay} className="flex-1 min-w-[200px]">
      <div ref={ref} className="text-center">
        <p className="text-6xl md:text-7xl font-heading font-semibold text-gold text-glow-gold mb-3">
          {count}
          <span className="text-gold/60">{suffix}</span>
        </p>
        <p className="text-silver/70 text-sm leading-relaxed font-body">{label}</p>
      </div>
    </ScrollReveal>
  );
};

const ProblemSection = () => (
  <section id="program" className="relative bg-void slash-motif py-28 md:py-40">
    {/* Top edge glow */}
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

    <div className="container mx-auto px-6 md:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-semibold text-off-white leading-[1.05] mb-20">
            130 million Americans live with a condition that affects motor function.{" "}
            <span className="text-silver/50">The fitness industry serves almost none of them.</span>
          </h2>
        </ScrollReveal>
      </div>

      <LineDraw className="my-14 max-w-md mx-auto" />

      <div className="flex flex-col md:flex-row gap-14 md:gap-20 max-w-5xl mx-auto">
        {stats.map((stat, i) => (
          <StatCard key={i} {...stat} delay={i * 0.15} />
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;
