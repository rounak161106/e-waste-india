import AnimatedSection from "./AnimatedSection";

const solutions = [
  { icon: "🏭", title: "Strengthen EPR", desc: "Hold producers legally accountable for end-of-life collection. Germany achieves 42.8% recycling through strict EPR. India's current compliance: only 22%." },
  { icon: "⛏️", title: "Urban Mining", desc: "India's e-waste contains ₹35,000 crore in recoverable metals. Urban mining uses 10–13× less energy than virgin mining. Treat e-waste as a goldmine." },
  { icon: "🔧", title: "Right to Repair", desc: "Extending average phone life by just 1 year reduces e-waste by 18%. Support right-to-repair legislation. Buy refurbished. Fix before replacing." },
  { icon: "👷", title: "Formalize Informal Workers", desc: "500,000 workers already collect e-waste. Train them. Protect them. Integrate them into formal, certified recycling chains — like Bengaluru's Hasirudala model." },
  { icon: "🗑️", title: "Build Collection Infrastructure", desc: "Japan-style e-waste collection points in every colony. E-waste ATMs in malls. Mobile collection vans. Make responsible disposal as easy as throwing trash." },
  { icon: "📱", title: "Consumer Action", desc: "Less than 10% of Indians know where to dispose e-waste responsibly. Use authorized drop-off points. Use trade-in programs. Donate working devices to NGOs." },
];

const SolutionsSection = () => (
  <section id="solutions" className="py-20 sm:py-28 px-4">
    <div className="max-w-6xl mx-auto">
      <AnimatedSection className="text-center mb-12">
        <p className="section-label mb-3">THE WAY FORWARD</p>
        <h2 className="section-headline text-3xl sm:text-4xl md:text-5xl">From Crisis to Circular Economy</h2>
        <p className="text-ewaste-muted mt-4 max-w-lg mx-auto">The solutions exist. What's missing is urgency.</p>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {solutions.map((s, i) => (
          <AnimatedSection key={s.title} delay={i * 0.08}>
            <div className="glass-card p-6 hover-lift h-full">
              <span className="text-3xl">{s.icon}</span>
              <h3 className="font-heading font-bold text-base mt-3 mb-2">{s.title}</h3>
              <p className="text-sm text-ewaste-muted leading-relaxed">{s.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default SolutionsSection;
