import AnimatedSection from "./AnimatedSection";

const cases = [
  {
    emoji: "🟢",
    country: "Japan",
    tag: "WHAT INDIA MUST DO",
    tagColor: "bg-ewaste-green/10 text-ewaste-green",
    borderColor: "border-t-ewaste-green",
    body: "Japan recycles 79% of large appliances through its Home Appliance Recycling Law. Manufacturers are legally required to recycle products at end-of-life. The 'urban mine' concept was born here — Japan's e-waste contains more gold than all its remaining gold mines combined.",
    stat: "79% recycling rate",
    statColor: "text-ewaste-green",
  },
  {
    emoji: "🔴",
    country: "Ghana",
    tag: "WHAT HAPPENS WITHOUT REGULATION",
    tagColor: "bg-red-500/10 text-red-400",
    borderColor: "border-t-red-500",
    body: "Agbogbloshie in Accra receives 215,000 MT of e-waste yearly — most of it illegally shipped from wealthy nations. Children burn circuit boards with bare hands. Soil lead levels: 18,000 ppm (safe limit: 400 ppm). Air dioxin levels: 220× safe limit.",
    stat: "18,000 ppm lead in soil",
    statColor: "text-red-400",
  },
  {
    emoji: "🔵",
    country: "Germany",
    tag: "THE POLICY MODEL",
    tagColor: "bg-blue-500/10 text-blue-400",
    borderColor: "border-t-blue-500",
    body: "Germany's ElektroG law mandates free take-back of e-waste at all electronics stores. Result: 42.8% recycling rate. Over 2,000 public collection points. Consumers can return any device for free, anywhere.",
    stat: "42.8% recycling rate",
    statColor: "text-blue-400",
  },
  {
    emoji: "🟡",
    country: "Bengaluru",
    tag: "INDIA SUCCESS STORY",
    tagColor: "bg-yellow-500/10 text-yellow-400",
    borderColor: "border-t-yellow-400",
    body: "Hasirudala NGO formalized 25,000 waste pickers in Bengaluru — trained them, provided PPE, and created a formal channel to licensed recyclers. Result: 30% increase in formal e-waste collection in pilot areas.",
    stat: "30% increase in formal collection",
    statColor: "text-yellow-400",
  },
];

const CaseStudiesSection = () => (
  <section id="cases" className="py-20 sm:py-28 px-4">
    <div className="max-w-6xl mx-auto">
      <AnimatedSection className="text-center mb-12">
        <p className="section-label mb-3">LESSONS FROM THE WORLD</p>
        <h2 className="section-headline text-3xl sm:text-4xl md:text-5xl">Success, Warning, and Hope</h2>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 gap-5">
        {cases.map((c, i) => (
          <AnimatedSection key={c.country} delay={i * 0.1}>
            <div className={`glass-card border-t-2 ${c.borderColor} p-6 hover-lift h-full flex flex-col`}>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{c.emoji}</span>
                <h3 className="font-heading font-bold text-lg">{c.country}</h3>
              </div>
              <span className={`text-[10px] font-semibold tracking-wider uppercase px-2 py-1 rounded-full w-fit ${c.tagColor}`}>{c.tag}</span>
              <p className="text-sm text-ewaste-muted leading-relaxed mt-4 flex-1">{c.body}</p>
              <p className={`font-heading font-bold text-lg mt-4 ${c.statColor}`}>{c.stat}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default CaseStudiesSection;
