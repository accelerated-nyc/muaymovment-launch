interface VideoPlaceholderProps {
  label: string;
  aspect?: "16/9" | "9/16" | "1/1" | "4/3";
  className?: string;
  showLabel?: boolean;
  poster?: string;
}

const VideoPlaceholder = ({ label, aspect = "16/9", className = "", showLabel = true, poster }: VideoPlaceholderProps) => {
  return (
    <div className={`group relative overflow-hidden ${className}`}>
      <div
        className="relative w-full bg-black/60 border border-white/[0.06] transition-all duration-500 group-hover:border-gold/30 group-hover:shadow-[0_0_40px_hsl(var(--gold)/0.08)]"
        style={{ aspectRatio: aspect }}
      >
        {poster ? (
          <img
            src={poster}
            alt={label}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent" />
        )}
      </div>
      {showLabel && (
        <p className="mt-3 text-[11px] text-silver/60 tracking-[0.2em] uppercase font-body">{label}</p>
      )}
    </div>
  );
};

export default VideoPlaceholder;
