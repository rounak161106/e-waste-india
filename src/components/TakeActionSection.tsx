import AnimatedSection from "./AnimatedSection";

const actions = [
  { num: 1, text: "DON'T throw electronics in regular trash", bg: "from-red-600 to-red-800", icon: "🚫" },
  { num: 2, text: "FIND your nearest e-waste collection point at ewasteindia.com", bg: "from-green-600 to-green-800", icon: "📍" },
  { num: 3, text: "EXTEND your device life — repair before replacing", bg: "from-blue-600 to-blue-800", icon: "🔧" },
  { num: 4, text: "DONATE working devices to schools and NGOs", bg: "from-purple-600 to-purple-800", icon: "🎁" },
  { num: 5, text: "SHARE this page — awareness is the first step to change", bg: "from-orange-600 to-orange-800", icon: "📢" },
];

const TakeActionSection = () => (
  <section id="action" className="py-20 sm:py-28 px-4">
    <div className="max-w-6xl mx-auto">
      <AnimatedSection className="text-center mb-12">
        <p className="section-label mb-3">YOUR ROLE</p>
        <h2 className="section-headline text-3xl sm:text-4xl md:text-5xl">You Are Part of the Solution</h2>
        <p className="text-ewaste-muted mt-4">Every old phone matters. Every action counts.</p>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          {actions.map((a) => (
            <div key={a.num} className={`bg-gradient-to-br ${a.bg} rounded-lg p-5 text-center hover-lift`}>
              <span className="text-2xl">{a.icon}</span>
              <p className="text-xs font-bold uppercase tracking-wider text-white/60 mt-2">Step {a.num}</p>
              <p className="text-sm font-semibold text-foreground mt-2 leading-snug">{a.text}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.3}>
        <div className="glass-card p-8 sm:p-10 text-center border border-ewaste-orange/20">
          <p className="text-lg sm:text-xl md:text-2xl font-heading font-bold leading-relaxed">
            India is on track to generate <span className="text-ewaste-orange">14 million tonnes</span> of e-waste by 2030.
          </p>
          <p className="text-ewaste-muted mt-3 text-sm sm:text-base">
            That's the equivalent of <span className="text-foreground font-semibold">4,000 Eiffel Towers</span> of toxic electronics — every single year.
          </p>
          <p className="text-ewaste-green font-heading font-bold text-xl mt-4">The choice is ours.</p>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.4}>
        <div className="glass-card p-6 sm:p-8 mt-8 border border-ewaste-green/10">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl">🎬</span>
            <div>
              <h3 className="font-heading font-bold text-xl">The Toxic Treasure Paradox</h3>
              <p className="text-xs text-ewaste-muted mt-0.5">Documentary | LPU CHE-110 CA1 | Environmental Studies</p>
            </div>
          </div>
          <p className="text-sm text-ewaste-muted mb-4">
            Our team-produced documentary explores the hidden crisis of electronic waste in India —
            from the toxic dumps of Delhi to the economic opportunity in responsible recycling.
          </p>
          <div className="relative rounded-xl overflow-hidden border border-white/10 bg-black">
            <video
              controls
              preload="metadata"
              className="w-full max-h-[520px] object-contain"
              poster=""
            >
              <source src="/e-waste-india/The_Toxic_Treasure_Paradox.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="text-[11px] text-ewaste-muted/40 mt-3 text-center">
            Produced by Rounak Prasad, Tushar Kadian &amp; Rahul Panwar · LPU CHE-110 CA1 · 2025
          </p>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default TakeActionSection;
