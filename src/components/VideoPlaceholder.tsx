import { Play } from "lucide-react";
import { useState, useRef } from "react";

interface VideoPlaceholderProps {
  label: string;
  aspect?: "16/9" | "9/16" | "1/1" | "4/3";
  className?: string;
  showLabel?: boolean;
  videoSrc?: string;
  poster?: string;
}

const VideoPlaceholder = ({ label, aspect = "16/9", className = "", showLabel = true, videoSrc, poster }: VideoPlaceholderProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <div className={`group relative overflow-hidden ${className}`}>
      <div
        className="relative w-full bg-black/60 border border-white/[0.06] transition-all duration-500 group-hover:border-gold/30 group-hover:shadow-[0_0_40px_hsl(var(--gold)/0.08)]"
        style={{ aspectRatio: aspect }}
      >
        {videoSrc ? (
          <>
            <video
              ref={videoRef}
              src={videoSrc}
              poster={poster}
              className="absolute inset-0 w-full h-full object-cover"
              loop
              muted
              playsInline
              preload="metadata"
              onEnded={() => setIsPlaying(false)}
            />
            {/* Dark overlay when not playing */}
            <div
              className={`absolute inset-0 bg-black/40 transition-opacity duration-500 ${
                isPlaying ? "opacity-0 pointer-events-none" : "opacity-100"
              }`}
            />
            {/* Play/pause button */}
            <button
              onClick={handlePlay}
              className={`absolute inset-0 flex items-center justify-center z-10 transition-opacity duration-300 ${
                isPlaying ? "opacity-0 hover:opacity-100" : "opacity-100"
              }`}
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-white/20 flex items-center justify-center transition-all duration-500 hover:border-gold/50 hover:scale-110 hover:shadow-[0_0_30px_hsl(var(--gold)/0.15)] bg-black/30 backdrop-blur-sm">
                <Play className={`w-5 h-5 text-white/70 transition-all duration-500 ${isPlaying ? "" : "ml-0.5"}`} />
              </div>
            </button>
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-white/10 flex items-center justify-center transition-all duration-500 group-hover:border-gold/40 group-hover:scale-110 group-hover:shadow-[0_0_30px_hsl(var(--gold)/0.15)]">
                <Play className="w-5 h-5 text-white/30 group-hover:text-gold transition-all duration-500 ml-0.5" />
              </div>
            </div>
          </>
        )}
      </div>
      {showLabel && (
        <p className="mt-3 text-[11px] text-silver/60 tracking-[0.2em] uppercase font-body">{label}</p>
      )}
    </div>
  );
};

export default VideoPlaceholder;
