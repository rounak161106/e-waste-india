import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

const cards = [
  {
    icon: "🌱",
    title: "Soil Contamination",
    color: "border-green-500/40",
    back: "Cadmium and lead from e-waste sites in Delhi: 20× above safe limits. Once contaminated, agricultural soil can take 50–100 years to recover. Toxic metals enter food crops — and our food chain.",
    source: "CPCB 2023",
  },
  {
    icon: "💧",
    title: "Water Poisoning",
    color: "border-blue-500/40",
    back: "Copper levels in rivers near informal e-waste sites: 100× WHO drinking water standards. Half a million people near these areas drink contaminated groundwater. Mercury kills aquatic life.",
    source: "WHO 2023",
  },
  {
    icon: "🌬️",
    title: "Air Pollution",
    color: "border-gray-400/40",
    back: "Open burning of e-waste releases dioxins and furans — among the most toxic compounds known. Burning 1 tonne of circuit boards releases 80g of dioxins. Major contributor to PM2.5 in areas like Seelampur.",
    source: "UNEP 2023",
  },
  {
    icon: "🧬",
    title: "Human Health Crisis",
    color: "border-red-500/40",
    back: "Children near e-waste sites: developmental delays, lower IQ, blood lead levels up to 50× safe limits. Workers: 40% higher rates of respiratory disease and kidney inflammation. Cancer rates significantly elevated near informal processing areas.",
    source: "IIT Delhi 2022 | WHO 2023",
  },
];

const FlipCard = ({ card }: { card: (typeof cards)[0] }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`flip-card cursor-pointer h-64 ${flipped ? "flipped" : ""}`}
      onClick={() => setFlipped(!flipped)}
    >
      <div className="flip-card-inner">
        <div className={`flip-card-front glass-card border-t-2 ${card.color} flex flex-col items-center justify-center p-6`}>
          <span className="text-5xl mb-4">{card.icon}</span>
          <p className="font-heading font-bold text-lg text-center">{card.title}</p>
          <p className="text-xs text-ewaste-muted/50 mt-2">Click to reveal</p>
        </div>
        <div className={`flip-card-back glass-card border-t-2 ${card.color} flex flex-col justify-center p-5 overflow-y-auto`}>
          <p className="text-sm text-ewaste-muted leading-relaxed">{card.back}</p>
          <p className="text-[10px] text-ewaste-muted/50 mt-3">Source: {card.source}</p>
        </div>
      </div>
    </div>
  );
};

const ImpactsSection = () => (
  <section id="impacts" className="py-20 sm:py-28 px-4">
    <div className="max-w-6xl mx-auto">
      <AnimatedSection className="text-center mb-12">
        <p className="section-label mb-3">THE HIDDEN TOLL</p>
        <h2 className="section-headline text-3xl sm:text-4xl md:text-5xl">Poison in Our Soil, Water, Air — and Bodies</h2>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {cards.map((c) => (
            <FlipCard key={c.title} card={c} />
          ))}
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default ImpactsSection;
