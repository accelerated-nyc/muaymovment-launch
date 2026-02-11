import { useRef } from "react";
import { ChevronDown } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";


const wordLines = [
  { text: "Rewiring", className: "text-off-white" },
  { text: "Movement.", className: "text-off-white" },
  { text: "Reclaiming", className: "text-gold text-glow-gold" },
  { text: "Power.", className: "text-off-white" },
];

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex flex-col bg-void film-grain overflow-hidden">
      {/* Parallax background hero image */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <img
          src="/IMG_9931.JPG"
          alt="MuayMovment group kickboxing class with heavy bags"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black/60" />
      </motion.div>

      {/* Animated diagonal gold accent line */}
      <motion.div
        className="absolute top-0 right-[15%] w-px origin-top opacity-[0.12]"
        style={{
          background: "linear-gradient(to bottom, hsl(var(--gold)), transparent)",
          transform: "rotate(15deg)",
        }}
        initial={{ height: 0 }}
        animate={{ height: "60vh" }}
        transition={{ duration: 1.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Spacer for fixed nav */}
      <div className="h-16" />

      {/* Hero content — centered */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.p
              className="text-gold/80 text-[13px] tracking-[0.3em] uppercase mb-6 font-body"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              Adaptive Muay Thai Training
            </motion.p>

            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-semibold leading-[0.95] mb-8">
              {wordLines.map((line, i) => (
                <motion.span
                  key={i}
                  className={`block ${line.className}`}
                  initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    duration: 0.7,
                    delay: 0.2 + i * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {line.text}
                </motion.span>
              ))}
            </h1>

            <motion.p
              className="text-silver text-lg md:text-xl max-w-xl mx-auto leading-relaxed mb-12 font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              Muay Thai-inspired mobility training engineered for bodies the fitness industry forgot.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
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
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom edge fade + scroll indicator */}
      <div className="relative z-10 flex justify-center pb-12">
        <ChevronDown className="w-5 h-5 text-gold/50 bounce-arrow" />
      </div>
    </section>
  );
};

export default HeroSection;
