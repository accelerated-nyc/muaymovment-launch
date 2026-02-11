import { motion } from "framer-motion";
import { ScrollReveal, LineDraw } from "@/components/ScrollReveal";

const FooterSection = () => (
  <footer className="relative bg-void py-28 md:py-40 overflow-hidden">
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent" />

    {/* Ambient gold glow at bottom — pulsing */}
    <motion.div
      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-gold/[0.03] blur-[120px] pointer-events-none"
      animate={{ opacity: [0.4, 1, 0.4] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    />

    <div className="container mx-auto px-6 md:px-8 text-center relative z-10">
      <ScrollReveal>
        <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl font-semibold text-off-white leading-[0.95] mb-8">
          Movement is a right.
          <br />
          <span className="text-gold text-glow-gold">Not a privilege.</span>
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <p className="text-silver/60 text-lg mb-12 font-body">
          Partner with MuayMovment. Let's scale this.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-20">
          <button className="px-10 py-4 bg-gold text-black font-heading font-semibold text-sm uppercase tracking-[0.15em] btn-shimmer transition-all duration-500 hover:shadow-[0_0_40px_hsl(var(--gold)/0.25)]">
            Schedule a Demo
          </button>
          <button className="px-10 py-4 border border-white/10 text-off-white font-heading font-medium text-sm uppercase tracking-[0.15em] transition-all duration-400 hover:border-gold/40 hover:text-gold">
            Contact Us
          </button>
        </div>
      </ScrollReveal>

      <LineDraw className="max-w-sm mx-auto mb-12" />

      {/* Staggered social links */}
      <div className="flex items-center justify-center gap-8 mb-8">
        {["Twitter", "LinkedIn", "Instagram"].map((social, i) => (
          <ScrollReveal key={social} delay={0.3 + i * 0.08}>
            <a
              href="#"
              className="nav-link-sweep text-[12px] text-silver/40 tracking-[0.2em] uppercase hover:text-gold transition-colors duration-300"
            >
              {social}
            </a>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.55}>
        <div className="text-white/15 text-[11px] space-y-1 tracking-wide">
          <p>info@muaymovment.com</p>
          <p>&copy; 2025 MuayMovment Fitness. All rights reserved.</p>
        </div>
      </ScrollReveal>
    </div>
  </footer>
);

export default FooterSection;
