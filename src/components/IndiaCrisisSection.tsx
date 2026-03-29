import AnimatedSection from "./AnimatedSection";

const stats = [
  { value: "3rd Largest", sub: "e-waste producer globally", color: "border-ewaste-orange/50 text-ewaste-orange" },
  { value: "17% Growth", sub: "annual increase — fastest among major economies", color: "border-red-500/50 text-red-400" },
  { value: "90% Informal", sub: "sector handles India's e-waste with no protection", color: "border-red-500/50 text-red-400" },
  { value: "500,000+", sub: "workers exposed to toxic chemicals daily", color: "border-ewaste-orange/50 text-ewaste-orange" },
];

const cities = [
  { name: "Mumbai", value: 120000, max: 120000 },
  { name: "Delhi", value: 98000, max: 120000 },
  { name: "Bengaluru", value: 92000, max: 120000 },
  { name: "Chennai", value: 67000, max: 120000 },
  { name: "Kolkata", value: 53000, max: 120000 },
  { name: "Hyderabad", value: 45000, max: 120000 },
];

const IndiaCrisisSection = () => (
  <section id="india" className="py-20 sm:py-28 px-4 relative">
    {/* Subtle texture */}
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

    <div className="max-w-6xl mx-auto relative z-10">
      <AnimatedSection className="text-center mb-12">
        <p className="section-label mb-3">INDIA'S SITUATION</p>
        <h2 className="section-headline text-3xl sm:text-4xl md:text-5xl">A Nation at a Crossroads</h2>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <AnimatedSection className="space-y-4">
          {stats.map((s, i) => (
            <div key={i} className={`glass-card p-5 border-l-2 hover-lift ${s.color.split(" ")[0]}`}>
              <p className={`text-xl sm:text-2xl font-bold font-heading ${s.color.split(" ")[1]}`}>{s.value}</p>
              <p className="text-sm text-ewaste-muted mt-1">{s.sub}</p>
            </div>
          ))}
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="glass-card p-6">
            <h3 className="font-heading font-bold text-lg mb-5">Top E-Waste Cities in India</h3>
            <div className="space-y-4">
              {cities.map((c) => (
                <div key={c.name}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-ewaste-muted">{c.name}</span>
                    <span className="text-foreground font-semibold">{(c.value / 1000).toFixed(0)}K T/yr</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-ewaste-orange to-red-500"
                      style={{ width: `${(c.value / c.max) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-ewaste-muted/50 mt-4">Source: MeitY 2024</p>
          </div>
        </AnimatedSection>
      </div>

      <AnimatedSection delay={0.3}>
        <div className="glass-card p-6 sm:p-8 border-l-4 border-ewaste-orange">
          <h3 className="font-heading font-bold text-lg text-ewaste-orange mb-3">⚠️ Seelampur, Delhi — Asia's Largest Informal E-Waste Market</h3>
          <p className="text-sm text-ewaste-muted leading-relaxed">
            In the crowded lanes of Seelampur, over 50,000 workers dismantle electronics with bare hands — no gloves, no masks, no protection. Circuit boards are burned in open fires. Gold is extracted using acid baths. Children here have blood lead levels 10 to 50 times above the WHO safe limit. This is where your old phone ends up.
          </p>
          <p className="text-[11px] text-ewaste-muted/50 mt-3">Source: IIT Delhi Study, 2022 | WHO</p>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

// Need to import motion for the bar animation
import { motion } from "framer-motion";

export default IndiaCrisisSection;
