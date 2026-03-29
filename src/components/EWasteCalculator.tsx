import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const items = [
  { label: "Phones replaced (last 3 years)", weight: 0.18, max: 10 },
  { label: "Laptops replaced", weight: 2.5, max: 5 },
  { label: "Earphones / headphones", weight: 0.05, max: 15 },
  { label: "Other electronics (TVs, appliances)", weight: 8.0, max: 10 },
];

const INDIA_AVG = 3.4;

const EWasteCalculator = () => {
  const [values, setValues] = useState<number[]>(items.map(() => 0));

  const total = values.reduce((sum, v, i) => sum + v * items[i].weight, 0);
  const ratio = INDIA_AVG > 0 ? total / INDIA_AVG : 0;

  return (
    <AnimatedSection delay={0.4}>
      <div className="glass-card p-6 sm:p-8 mt-8">
        <h3 className="font-heading font-bold text-lg text-ewaste-green mb-2">📊 How Much E-Waste Do You Generate?</h3>
        <p className="text-xs text-ewaste-muted mb-6">Move the sliders to estimate your personal e-waste footprint.</p>

        <div className="space-y-5">
          {items.map((item, i) => (
            <div key={item.label}>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-ewaste-muted">{item.label}</span>
                <span className="text-foreground font-semibold">{values[i]}</span>
              </div>
              <input
                type="range"
                min={0}
                max={item.max}
                value={values[i]}
                onChange={(e) => {
                  const next = [...values];
                  next[i] = Number(e.target.value);
                  setValues(next);
                }}
                className="w-full h-2 rounded-full appearance-none cursor-pointer bg-white/10 accent-[hsl(155,100%,50%)]"
                style={{
                  background: `linear-gradient(to right, hsl(155 100% 50%) ${(values[i] / item.max) * 100}%, rgba(255,255,255,0.1) ${(values[i] / item.max) * 100}%)`,
                }}
              />
            </div>
          ))}
        </div>

        <motion.div
          key={total.toFixed(1)}
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="mt-6 glass-card p-5 text-center border border-ewaste-green/20"
        >
          <p className="text-xs text-ewaste-muted uppercase tracking-wider mb-1">Your estimated e-waste</p>
          <p className="text-3xl sm:text-4xl font-heading font-bold text-ewaste-green">{total.toFixed(1)} kg</p>
          <div className="mt-3">
            <p className="text-xs text-ewaste-muted">
              India average: <span className="text-foreground font-semibold">{INDIA_AVG} kg/person/year</span>
            </p>
            <div className="h-2 rounded-full bg-white/5 mt-2 max-w-xs mx-auto overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-500 ${ratio > 1 ? "bg-ewaste-orange" : "bg-ewaste-green"}`}
                style={{ width: `${Math.min(ratio * 100, 100)}%` }}
              />
            </div>
            <p className="text-xs mt-1">
              {ratio > 1 ? (
                <span className="text-ewaste-orange">{ratio.toFixed(1)}× above average</span>
              ) : total > 0 ? (
                <span className="text-ewaste-green">Below average — good!</span>
              ) : (
                <span className="text-ewaste-muted">Adjust sliders above</span>
              )}
            </p>
          </div>
        </motion.div>

        <p className="text-xs text-ewaste-muted/60 mt-4 text-center">
          📍 Find your nearest e-waste drop-off at{" "}
          <a href="https://ewasteindia.com" target="_blank" rel="noopener noreferrer" className="text-ewaste-green underline">
            ewasteindia.com
          </a>
        </p>
      </div>
    </AnimatedSection>
  );
};

export default EWasteCalculator;
