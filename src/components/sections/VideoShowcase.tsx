import { ScrollReveal } from "@/components/ScrollReveal";
import VideoPlaceholder from "@/components/VideoPlaceholder";

const videos = [
  {
    label: "Kickboxing Pad Work",
    src: "/kickboxing-padwork.mov",
  },
  {
    label: "Training Session",
    src: "/718b8e9e9cd2401aa43b2f39fc806b94.MOV",
  },
  {
    label: "Mobility Drill",
    src: "/6004e3495201487c933d74215726fc2d.MOV",
  },
  {
    label: "Client Progress",
    src: "/02ab7f55b73b4aed977caeeb37490fc9.MOV",
  },
  {
    label: "Combination Training",
    src: "/16b27929-bcd5-443b-bb9c-063ca44617d3.mov",
  },
  {
    label: "Strength Assessment",
    src: "/6d6d4ed6ef14486dbe88b937a3d1b022.mov",
  },
  {
    label: "Full Session",
    src: "/6fd9d72efe644f0abfc5ac0d55da742f.mov",
  },
];

const VideoShowcase = () => (
  <section className="relative bg-void py-28 md:py-40">
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent" />

    <div className="container mx-auto px-6 md:px-8">
      <ScrollReveal>
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="text-gold/70 text-[13px] tracking-[0.3em] uppercase mb-4 font-body">Evidence</p>
            <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-semibold text-off-white">
              See It. <span className="text-gold">Believe It.</span>
            </h2>
          </div>
          <div className="hidden md:block w-24 h-px bg-gold/20" />
        </div>
      </ScrollReveal>

      {/* Asymmetric video grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-3">
        {/* Main featured video — spans 8 cols */}
        <ScrollReveal delay={0.1} className="lg:col-span-8">
          <VideoPlaceholder
            label={videos[0].label}
            videoSrc={videos[0].src}
            aspect="16/9"
          />
        </ScrollReveal>

        {/* Stacked pair — spans 4 cols */}
        <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-3">
          <ScrollReveal delay={0.2}>
            <VideoPlaceholder
              label={videos[1].label}
              videoSrc={videos[1].src}
              aspect="16/9"
            />
          </ScrollReveal>
          <ScrollReveal delay={0.28}>
            <VideoPlaceholder
              label={videos[2].label}
              videoSrc={videos[2].src}
              aspect="16/9"
            />
          </ScrollReveal>
        </div>

        {/* Bottom row — 4 equal cards */}
        {videos.slice(3, 7).map((vid, i) => (
          <ScrollReveal key={i} delay={0.3 + i * 0.06} className="lg:col-span-3">
            <VideoPlaceholder
              label={vid.label}
              videoSrc={vid.src}
              aspect="4/3"
            />
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default VideoShowcase;
