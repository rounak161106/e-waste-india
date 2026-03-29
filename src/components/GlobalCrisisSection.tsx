import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, PieChart, Pie, Tooltip } from "recharts";

const tabs = ["Top Producers", "Recycling Gap", "Hidden Treasure"] as const;

const barData = [
  { name: "China", value: 12.0, color: "#EF4444" },
  { name: "USA", value: 6.9, color: "#3B82F6" },
  { name: "India", value: 6.19, color: "#FF6B35" },
  { name: "Brazil", value: 2.4, color: "#EAB308" },
  { name: "Russia", value: 1.6, color: "#6B7280" },
];

const pieData = [
  { name: "Europe", value: 42.8, color: "#00FF88" },
  { name: "Global Avg", value: 22.3, color: "#EAB308" },
  { name: "Asia", value: 11.8, color: "#FF6B35" },
  { name: "India", value: 10, color: "#EF4444" },
  { name: "Africa", value: 0.9, color: "#991B1B" },
];

const treasureCards = [
  { value: "$91 Billion", label: "In e-waste materials annually", icon: "🪙", color: "text-yellow-400" },
  { value: "$19 Billion", label: "Actually recovered", icon: "✅", color: "text-ewaste-green" },
  { value: "$72 Billion", label: "Wasted every year", icon: "🔥", color: "text-ewaste-orange" },
];

const GlobalCrisisSection = () => {
  const [active, setActive] = useState<(typeof tabs)[number]>("Top Producers");

  return (
    <section id="crisis" className="py-20 sm:py-28 px-4">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-12">
          <p className="section-label mb-3">THE GLOBAL PICTURE</p>
          <h2 className="section-headline text-3xl sm:text-4xl md:text-5xl">The World's Fastest-Growing Waste Problem</h2>
          <p className="text-ewaste-muted mt-4 max-w-xl mx-auto">E-waste is growing 5× faster than our ability to recycle it.</p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="flex justify-center gap-2 mb-8">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setActive(t)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  active === t ? "bg-ewaste-green/20 text-ewaste-green border border-ewaste-green/30" : "glass-card text-ewaste-muted hover:text-foreground"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {active === "Top Producers" && (
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-2 glass-card p-6">
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={barData} layout="vertical" margin={{ left: 20 }}>
                        <XAxis type="number" hide />
                        <YAxis dataKey="name" type="category" tick={{ fill: "#A0A0B0", fontSize: 13 }} width={60} />
                        <Tooltip
                          contentStyle={{ background: "#1a1a2e", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, color: "white" }}
                          formatter={(v: number) => [`${v} MT`, "E-waste"]}
                        />
                        <Bar dataKey="value" radius={[0, 6, 6, 0]} barSize={28}>
                          {barData.map((d, i) => (
                            <Cell key={i} fill={d.color} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                    <p className="text-[11px] text-ewaste-muted/50 mt-2">Source: UN Global E-Waste Monitor 2024</p>
                  </div>
                  <div className="glass-card p-6 border-l-2 border-ewaste-orange/40 flex flex-col justify-center">
                    <p className="text-ewaste-orange font-heading font-bold text-xl mb-2">🇮🇳 That's us</p>
                    <p className="text-ewaste-muted text-sm leading-relaxed">
                      India's e-waste is growing at <span className="text-foreground font-semibold">17% annually</span> — one of the fastest rates on Earth.
                    </p>
                  </div>
                </div>
              )}

              {active === "Recycling Gap" && (
                <div className="glass-card p-6 text-center">
                  <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                    <ResponsiveContainer width={280} height={280}>
                      <PieChart>
                        <Pie
                          data={pieData}
                          cx="50%"
                          cy="50%"
                          innerRadius={70}
                          outerRadius={120}
                          dataKey="value"
                          stroke="none"
                        >
                          {pieData.map((d, i) => (
                            <Cell key={i} fill={d.color} />
                          ))}
                        </Pie>
                        <Tooltip
                          contentStyle={{ background: "#1a1a2e", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, color: "white" }}
                          formatter={(v: number) => [`${v}%`, "Recycling Rate"]}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                    <div className="text-left space-y-2">
                      {pieData.map((d) => (
                        <div key={d.name} className="flex items-center gap-3">
                          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: d.color }} />
                          <span className="text-sm text-ewaste-muted">{d.name}: <span className="text-foreground font-semibold">{d.value}%</span></span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6 glass-card p-4 border border-ewaste-orange/30 inline-block">
                    <p className="text-ewaste-orange font-semibold text-sm">⚠️ India recycles only ~10% — less than half the global average</p>
                  </div>
                  <p className="text-[11px] text-ewaste-muted/50 mt-4">Source: UN Global E-Waste Monitor 2024</p>
                </div>
              )}

              {active === "Hidden Treasure" && (
                <div>
                  <div className="grid sm:grid-cols-3 gap-4 mb-6">
                    {treasureCards.map((c) => (
                      <div key={c.value} className="glass-card p-6 text-center hover-lift">
                        <span className="text-3xl">{c.icon}</span>
                        <p className={`text-2xl sm:text-3xl font-bold font-heading mt-3 ${c.color}`}>{c.value}</p>
                        <p className="text-sm text-ewaste-muted mt-2">{c.label}</p>
                      </div>
                    ))}
                  </div>
                  <div className="glass-card p-5 border-l-2 border-yellow-400/40">
                    <p className="text-sm text-ewaste-muted">
                      <span className="text-yellow-400 font-semibold">"</span> 1 tonne of circuit boards contains 250g of gold — 50× more than gold ore <span className="text-yellow-400 font-semibold">"</span>
                    </p>
                    <p className="text-[11px] text-ewaste-muted/50 mt-2">Source: UN Global E-Waste Monitor 2024 | UNEP</p>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default GlobalCrisisSection;
