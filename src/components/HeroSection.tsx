import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface CounterProps {
  end: number;
  suffix: string;
  prefix?: string;
  label: string;
  source: string;
  color: "green" | "orange";
  duration?: number;
}

const Counter = ({ end, suffix, prefix = "", label, source, color, duration = 2000 }: CounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = Date.now();
          const tick = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(tick);
            else setCount(end);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  const accent = color === "green" ? "text-ewaste-green" : "text-ewaste-orange";
  const borderColor = color === "green" ? "border-ewaste-green/30" : "border-ewaste-orange/30";

  return (
    <div ref={ref} className={`glass-card p-5 sm:p-6 text-center border-t-2 ${borderColor}`}>
      <div className={`text-2xl sm:text-3xl md:text-4xl font-bold font-heading ${accent}`}>
        {prefix}{count}{suffix}
      </div>
      <p className="text-xs sm:text-sm text-ewaste-muted mt-2">{label}</p>
      <p className="text-[10px] text-ewaste-muted/50 mt-1">{source}</p>
    </div>
  );
};

const Particle = ({ i }: { i: number }) => {
  const size = Math.random() * 4 + 1;
  const x = Math.random() * 100;
  const y = Math.random() * 100;
  const delay = Math.random() * 5;
  const dur = Math.random() * 8 + 6;
  const color = i % 3 === 0 ? "#00FF88" : i % 3 === 1 ? "#FF6B35" : "rgba(255,255,255,0.2)";

  return (
    <div
      className="absolute rounded-full"
      style={{
        width: size,
        height: size,
        left: `${x}%`,
        top: `${y}%`,
        backgroundColor: color,
        animation: `float-particle ${dur}s ${delay}s ease-in-out infinite`,
        opacity: 0.4,
      }}
    />
  );
};

const HeroSection = () => (
  <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
    {/* Particles */}
    <div className="absolute inset-0 pointer-events-none">
      {Array.from({ length: 60 }).map((_, i) => (
        <Particle key={i} i={i} />
      ))}
    </div>

    {/* Radial glow */}
    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-ewaste-green/5 blur-[120px] pointer-events-none" />

    <div className="relative z-10 text-center max-w-5xl mx-auto">
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-xs tracking-[0.3em] text-ewaste-muted/60 uppercase mb-8"
      >
        LPU | CHE-110 | Environmental Studies CA1
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="section-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl !leading-[1.1]"
      >
        Electronic Waste
        <br />
        Where Do We
        <br />
        <span className="text-ewaste-green glow-green">Stand?</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-ewaste-muted text-sm sm:text-base md:text-lg max-w-2xl mx-auto mt-6 leading-relaxed"
      >
        62 million tonnes generated in 2022. Only 22.3% recycled.
        <br />
        India is the world's 3rd largest producer. The crisis is now.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-10 max-w-4xl mx-auto"
      >
        <Counter end={62} suffix="M" label="Tonnes of global e-waste (2022)" source="UN, 2024" color="green" />
        <Counter end={22} suffix=".3%" label="Formally recycled globally" source="UN, 2024" color="orange" />
        <Counter end={6} suffix=".19M MT" label="India's e-waste in 2024" source="MeitY, 2024" color="orange" />
        <Counter end={30} suffix=",000Cr" prefix="₹" label="Value wasted annually in India" source="NITI Aayog" color="green" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
      >
        <a href="#crisis" className="btn-primary-green">Explore the Crisis ↓</a>
        <a href="#action" className="btn-outline-white">Watch Our Documentary</a>
      </motion.div>
    </div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ewaste-muted/50 animate-bounce-arrow"
    >
      <ChevronDown size={28} />
    </motion.div>
  </section>
);

export default HeroSection;
