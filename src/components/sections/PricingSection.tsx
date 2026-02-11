import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";

const tiers = [
  {
    name: "Single Session",
    price: "$X",
    period: "/ session",
    features: ["45 minutes, Zoom or In-Person", "Personalized assessment", "Adaptive program design"],
    featured: false,
  },
  {
    name: "Monthly Package",
    price: "$XX",
    period: "/ month",
    features: [
      "4 sessions (45 min each)",
      "Weekly progressive programming",
      "Video review between sessions",
      "Priority scheduling",
    ],
    featured: true,
  },
  {
    name: "Intensive Program",
    price: "$XXX",
    period: "/ 3 months",
    features: [
      "12 sessions (45 min each)",
      "Full motor function assessment",
      "Custom progression roadmap",
      "Dedicated Slack/text support",
    ],
    featured: false,
  },
];

const PricingCard = ({ tier, delay }: { tier: typeof tiers[0]; delay: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: tier.featured ? 0.95 : 1 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className={`group relative flex flex-col h-full p-8 md:p-10 transition-all duration-500 border-glow hover:-translate-y-1 ${
          tier.featured
            ? "bg-black/60 border border-gold/30 shadow-[0_0_40px_hsl(var(--gold)/0.06)]"
            : "bg-black/30 border border-white/[0.06]"
        }`}
      >
        {tier.featured && (
          <span className="absolute -top-3 left-8 bg-gold text-black text-[11px] font-heading font-semibold px-4 py-1 uppercase tracking-[0.15em] badge-shimmer">
            Most Popular
          </span>
        )}

        <h3 className="font-heading text-lg font-medium text-off-white mb-6">{tier.name}</h3>

        <p className="font-heading text-5xl font-semibold text-off-white mb-1">
          {tier.price}
          <span className="text-sm font-body font-normal text-silver/60 ml-2">{tier.period}</span>
        </p>

        <ul className="mt-8 mb-10 flex-1 space-y-4">
          {tier.features.map((f, j) => (
            <li key={j} className="flex items-start gap-3 text-sm text-silver/70">
              <span className="w-1 h-1 rounded-full bg-gold/60 mt-2 shrink-0" />
              {f}
            </li>
          ))}
        </ul>

        <button
          className={`w-full py-4 text-sm font-heading font-semibold uppercase tracking-[0.15em] btn-shimmer transition-all duration-500 ${
            tier.featured
              ? "bg-gold text-black hover:shadow-[0_0_30px_hsl(var(--gold)/0.2)]"
              : "bg-white/[0.04] text-off-white border border-white/[0.08] hover:border-gold/30 hover:text-gold"
          }`}
        >
          Book Now
        </button>
      </div>
    </motion.div>
  );
};

const PricingSection = () => (
  <section id="pricing" className="relative bg-charcoal slash-motif py-28 md:py-40">
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent" />

    <div className="container mx-auto px-6 md:px-8">
      <ScrollReveal>
        <p className="text-gold/70 text-[13px] tracking-[0.3em] uppercase mb-4 font-body text-center">Investment</p>
        <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-semibold text-off-white mb-20 text-center">
          Train <span className="text-gold">Your Way</span>
        </h2>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {tiers.map((tier, i) => (
          <PricingCard key={i} tier={tier} delay={i * 0.1} />
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
