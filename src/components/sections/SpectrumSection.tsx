import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Armchair, HandHelping, Scale, Target, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const nodes: { label: string; detail: string; icon: LucideIcon }[] = [
  { label: "Seated Adaptive Work", detail: "Wheelchair-accessible", icon: Armchair },
  { label: "Assisted Standing", detail: "Supported balance", icon: HandHelping },
  { label: "Independent Balance", detail: "Weight transfer", icon: Scale },
  { label: "Controlled Striking", detail: "Precision power", icon: Target },
  { label: "Full Pad Combinations", detail: "Complete autonomy", icon: Zap },
];

const SpectrumSection = () => {
  const desktopRef = useRef(null);
  const mobileRef = useRef(null);
  const desktopInView = useInView(desktopRef, { once: true, margin: "-100px" });
  const mobileInView = useInView(mobileRef, { once: true, margin: "-100px" });

  return (
    <section className="relative bg-charcoal film-grain py-32 md:py-48 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent" />

      <div className="container mx-auto px-6 md:px-8">
        <ScrollReveal>
          <p className="text-gold/70 text-[13px] tracking-[0.3em] uppercase mb-4 font-body text-center">The Spectrum</p>
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-semibold text-off-white mb-24 text-center">
            One Program. <span className="text-gold">Every Body.</span>
          </h2>
        </ScrollReveal>

        {/* Desktop horizontal timeline */}
        <div ref={desktopRef} className="hidden md:block relative max-w-5xl mx-auto">
          {/* Track - positioned to align with dots */}
          <div className="absolute left-16 right-16 top-[74px] h-[2px] bg-white/[0.04]">
            <motion.div
              initial={{ width: "0%" }}
              animate={desktopInView ? { width: "100%" } : { width: "0%" }}
              transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-y-0 left-0"
              style={{
                background: "linear-gradient(90deg, hsl(var(--gold) / 0.3), hsl(var(--gold)), hsl(var(--gold) / 0.3))",
              }}
            />
          </div>

          {/* Nodes */}
          <div className="flex justify-between mx-8">
            {nodes.map((node, i) => {
              const Icon = node.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  animate={desktopInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.2, duration: 0.6 }}
                  className="flex flex-col items-center"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={desktopInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.2 + i * 0.2, duration: 0.5 }}
                    className="w-12 h-12 rounded-full border border-gold/20 bg-gold/5 flex items-center justify-center mb-4"
                  >
                    <Icon size={20} className="text-off-white" />
                  </motion.div>
                  <div className="w-5 h-5 rounded-full bg-gold pulse-gold mb-5 ring-4 ring-black/60" />
                  <p className="text-off-white font-heading text-sm font-medium text-center max-w-[120px] mb-1">
                    {node.label}
                  </p>
                  <p className="text-silver/55 text-[11px] text-center">{node.detail}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div ref={mobileRef} className="md:hidden relative max-w-xs mx-auto pl-6">
          <div className="absolute left-[11px] top-0 bottom-0 w-[2px] bg-white/[0.04]">
            <motion.div
              initial={{ height: "0%" }}
              animate={mobileInView ? { height: "100%" } : { height: "0%" }}
              transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-x-0 top-0"
              style={{
                background: "linear-gradient(to bottom, hsl(var(--gold) / 0.3), hsl(var(--gold)), hsl(var(--gold) / 0.3))",
              }}
            />
          </div>
          <div className="flex flex-col gap-12">
            {nodes.map((node, i) => {
              const Icon = node.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={mobileInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.2, duration: 0.5 }}
                  className="flex items-start gap-5"
                >
                  <div className="flex flex-col items-center gap-2 -ml-[14px]">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={mobileInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.3 + i * 0.2, duration: 0.5 }}
                      className="w-10 h-10 rounded-full border border-gold/20 bg-gold/5 flex items-center justify-center"
                    >
                      <Icon size={16} className="text-off-white" />
                    </motion.div>
                    <div className="w-5 h-5 rounded-full bg-gold pulse-gold shrink-0 ring-4 ring-charcoal" />
                  </div>
                  <div className="pt-1">
                    <p className="text-off-white font-heading text-sm font-medium">{node.label}</p>
                    <p className="text-silver/55 text-[11px]">{node.detail}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpectrumSection;
