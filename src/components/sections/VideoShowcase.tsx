import { ScrollReveal } from "@/components/ScrollReveal";
import VideoPlaceholder from "@/components/VideoPlaceholder";
import videoThumb1 from "@/assets/video-thumb-1.jpg";
import videoThumb2 from "@/assets/video-thumb-2.jpg";
import videoThumb3 from "@/assets/video-thumb-3.jpg";
import videoThumb4 from "@/assets/video-thumb-4.jpg";
import videoThumb5 from "@/assets/video-thumb-5.jpg";
import videoThumb6 from "@/assets/video-thumb-6.jpg";
import videoThumb7 from "@/assets/video-thumb-7.jpg";

const videos = [
  { label: "Kickboxing Pad Work", src: "/kickboxing-padwork.mov", poster: videoThumb1 },
  { label: "Training Session", src: "/718b8e9e9cd2401aa43b2f39fc806b94.MOV", poster: videoThumb2 },
  { label: "Mobility Drill", src: "/6004e3495201487c933d74215726fc2d.MOV", poster: videoThumb3 },
  { label: "Client Progress", src: "/02ab7f55b73b4aed977caeeb37490fc9.MOV", poster: videoThumb4 },
  { label: "Combination Training", src: "/16b27929-bcd5-443b-bb9c-063ca44617d3.mov", poster: videoThumb5 },
  { label: "Strength Assessment", src: "/6d6d4ed6ef14486dbe88b937a3d1b022.mov", poster: videoThumb6 },
  { label: "Full Session", src: "/6fd9d72efe644f0abfc5ac0d55da742f.mov", poster: videoThumb7 },
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

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-3">
        <ScrollReveal delay={0.1} className="lg:col-span-8">
          <div className="ambient-float" style={{ animationDelay: "0s" }}>
            <VideoPlaceholder label={videos[0].label} videoSrc={videos[0].src} poster={videos[0].poster} aspect="16/9" />
          </div>
        </ScrollReveal>

        <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-3">
          <ScrollReveal delay={0.2}>
            <div className="ambient-float" style={{ animationDelay: "1.2s" }}>
              <VideoPlaceholder label={videos[1].label} videoSrc={videos[1].src} poster={videos[1].poster} aspect="16/9" />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.28}>
            <div className="ambient-float" style={{ animationDelay: "2.4s" }}>
              <VideoPlaceholder label={videos[2].label} videoSrc={videos[2].src} poster={videos[2].poster} aspect="16/9" />
            </div>
          </ScrollReveal>
        </div>

        {videos.slice(3, 7).map((vid, i) => (
          <ScrollReveal key={i} delay={0.3 + i * 0.06} className="lg:col-span-3">
            <div className="ambient-float" style={{ animationDelay: `${3.6 + i * 1.2}s` }}>
              <VideoPlaceholder label={vid.label} videoSrc={vid.src} poster={vid.poster} aspect="4/3" />
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default VideoShowcase;
