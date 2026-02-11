import { ScrollReveal, LineDraw } from "@/components/ScrollReveal";

const AboutSection = () => (
  <section className="relative bg-void py-28 md:py-40 overflow-hidden">
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent" />

    {/* Diagonal accent */}
    <div
      className="absolute top-0 right-[12%] w-px h-[40vh] origin-top opacity-[0.06]"
      style={{
        background: "linear-gradient(to bottom, hsl(var(--gold)), transparent)",
        transform: "rotate(12deg)",
      }}
    />

    <div className="container mx-auto px-6 md:px-8">
      <div className="grid md:grid-cols-12 gap-12 md:gap-8 items-start max-w-6xl mx-auto">
        {/* Portrait — offset frame, real photo */}
        <ScrollReveal className="md:col-span-5">
          <div className="relative max-w-md mx-auto md:mx-0">
            <div className="absolute inset-0 translate-x-4 translate-y-4 border border-gold/20" />
            <div className="relative overflow-hidden">
              <img
                src="/35dd4145-88c7-4963-8bfe-0a9fbbfb5e26.JPG"
                alt="MuayMovment founder with students in fighting stance at the gym"
                className="w-full aspect-[3/4] object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          </div>
        </ScrollReveal>

        {/* Bio */}
        <div className="md:col-span-7 md:pl-8">
          <ScrollReveal>
            <p className="text-gold/70 text-[13px] tracking-[0.3em] uppercase mb-3 font-body">Founder</p>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold text-off-white mb-2">[Trainer Name]</h2>
            <p className="text-silver/60 text-sm tracking-wide mb-8">Founder, MuayMovment Fitness</p>
          </ScrollReveal>

          <LineDraw className="my-8 max-w-xs" />

          <ScrollReveal delay={0.1}>
            <div className="space-y-5 text-silver/70 leading-relaxed mb-10">
              <p>
                A decorated Muay Thai practitioner with over fifteen years of competitive and coaching experience. After witnessing the transformative potential of martial arts-based movement in clinical rehabilitation settings, they dedicated three years to developing MuayMovment's adaptive methodology.
              </p>
              <p>
                Certified in adaptive fitness, neurological rehabilitation protocols, and trauma-informed coaching, they bring the discipline of a fighter and the precision of a clinician to every session.
              </p>
              <p className="text-off-white/80 font-heading text-lg leading-relaxed border-l-2 border-gold/30 pl-6">
                "I built this program because I watched people get left behind. Muay Thai taught me that power starts from the ground up — and that principle is universal, regardless of ability."
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
