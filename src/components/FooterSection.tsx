const sources = [
  "UN Global E-Waste Monitor 2024",
  "MeitY India E-Waste Report 2024",
  "CPCB Annual Report 2023",
  "WHO E-Waste Health Impact 2023",
  "NITI Aayog Circular Economy 2024",
  "IIT Delhi Seelampur Study 2022",
];

const FooterSection = () => (
  <footer className="bg-ewaste-darker pt-16 pb-6 px-4 border-t border-white/5">
    <div className="max-w-6xl mx-auto grid sm:grid-cols-3 gap-10 mb-12">
      <div>
        <p className="text-ewaste-green font-heading font-bold text-xl mb-2">⚡ E-Waste India</p>
        <p className="text-sm text-ewaste-muted">Electronic Waste — Where Do We Stand?</p>
        <p className="text-xs text-ewaste-muted/60 mt-2">An awareness initiative by students of LPU</p>
        <p className="text-xs text-ewaste-muted/40 mt-3">#EWasteIndia #CircularEconomy #LPU #CHE110</p>
      </div>

      <div>
        <p className="font-heading font-bold text-sm mb-3 text-foreground">All Data From:</p>
        <ul className="space-y-1">
          {sources.map((s) => (
            <li key={s} className="text-xs text-ewaste-muted/70">{s}</li>
          ))}
        </ul>
      </div>

      <div>
        <p className="font-heading font-bold text-sm mb-3 text-foreground">Project Info</p>
        <div className="text-xs text-ewaste-muted/70 space-y-1">
          <p>CHE-110 | Environmental Studies</p>
          <p>Lovely Professional University</p>
          <p>Academic Year 2024–25 | CA1 Project</p>
          <p className="text-ewaste-muted/40 mt-2">[Student names here]</p>
        </div>
      </div>
    </div>

    <div className="border-t border-white/5 pt-4">
      <p className="text-center text-[11px] text-ewaste-muted/40">
        © 2025 E-Waste India | For educational purposes | All statistics from peer-reviewed and government sources
      </p>
    </div>
  </footer>
);

export default FooterSection;
