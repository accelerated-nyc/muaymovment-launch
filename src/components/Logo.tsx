import { motion } from "framer-motion";

const Logo = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-3 group ${className}`}>
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" className="shrink-0">
      {/* Outer hexagon — draw animation */}
      <motion.path
        d="M18 2L30 9V23L18 30L6 23V9L18 2Z"
        stroke="hsl(var(--gold))"
        strokeWidth="1"
        fill="none"
        className="transition-all duration-500 group-hover:stroke-[1.5]"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.4, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      />
      {/* Inner hexagon fill */}
      <motion.path
        d="M18 9L24 12.5V19.5L18 23L12 19.5V12.5L18 9Z"
        fill="hsl(var(--gold))"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 0.6, delay: 1.0 }}
      />
      {/* Center circle with subtle pulse */}
      <motion.circle
        cx="18"
        cy="16"
        r="3"
        fill="hsl(var(--gold))"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2, ease: "backOut" }}
      />
    </svg>
    <div className="flex flex-col leading-none tracking-tight font-heading">
      <span className="text-xl font-semibold text-off-white">MUAY</span>
      <span className="text-xl font-light text-gold tracking-[0.15em]">MOVEMENT</span>
    </div>
  </div>
);

export default Logo;
