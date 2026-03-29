import AnimatedSection from "./AnimatedSection";

const poisons = [
  { icon: "🔴", name: "Lead", desc: "Damages nervous system and kidneys. Found in solder and CRT screens." },
  { icon: "🔴", name: "Mercury", desc: "Causes neurological damage. Found in LCD backlights and batteries." },
  { icon: "🔴", name: "Cadmium", desc: "Accumulates in liver and kidneys. Found in rechargeable batteries." },
  { icon: "🔴", name: "Dioxins", desc: "Released when burned. WHO Class 1 carcinogens. 80g released per tonne of burned boards." },
  { icon: "🔴", name: "Brominated Compounds", desc: "Cause thyroid disruption and cancer risk. Found in flame retardants." },
];

const treasures = [
  { icon: "🟡", name: "Gold", desc: "250g per tonne of circuit boards — 50× richer than gold ore" },
  { icon: "⚪", name: "Silver", desc: "19,000 tonnes in India's annual e-waste" },
  { icon: "🟠", name: "Copper", desc: "2.1 million tonnes in India's annual e-waste" },
  { icon: "🔵", name: "Lithium & Cobalt", desc: "Critical for India's EV revolution — currently being wasted" },
  { icon: "💎", name: "Total Value", desc: "₹35,000–40,000 crore recoverable from India's e-waste every year" },
];

const DeviceContentsSection = () => (
  <section className="py-20 sm:py-28 px-4">
    <div className="max-w-6xl mx-auto">
      <AnimatedSection className="text-center mb-12">
        <p className="section-label mb-3">THE TOXIC TREASURE CHEST</p>
        <h2 className="section-headline text-3xl sm:text-4xl md:text-5xl">Your Old Phone Contains Both Poison and Gold</h2>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-6">
        <AnimatedSection>
          <div className="glass-card p-6 border-t-2 border-ewaste-orange/40 h-full">
            <h3 className="font-heading font-bold text-lg text-ewaste-orange mb-5">☠️ The Poisons</h3>
            <div className="space-y-4">
              {poisons.map((p) => (
                <div key={p.name} className="flex gap-3 items-start">
                  <span className="text-lg mt-0.5">{p.icon}</span>
                  <div>
                    <p className="font-semibold text-sm text-ewaste-orange">{p.name}</p>
                    <p className="text-xs text-ewaste-muted mt-0.5">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="glass-card p-6 border-t-2 border-ewaste-green/40 h-full">
            <h3 className="font-heading font-bold text-lg text-ewaste-green mb-5">💰 The Treasure</h3>
            <div className="space-y-4">
              {treasures.map((t) => (
                <div key={t.name} className="flex gap-3 items-start">
                  <span className="text-lg mt-0.5">{t.icon}</span>
                  <div>
                    <p className="font-semibold text-sm text-ewaste-green">{t.name}</p>
                    <p className="text-xs text-ewaste-muted mt-0.5">{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default DeviceContentsSection;
