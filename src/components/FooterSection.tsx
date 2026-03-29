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
        {/* Social icons */}
        <div className="flex gap-4 mt-4">
          <a href="#" aria-label="Instagram" className="text-ewaste-muted/50 hover:text-ewaste-green transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
          </a>
          <a href="#" aria-label="WhatsApp" className="text-ewaste-muted/50 hover:text-ewaste-green transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          </a>
          <a href="#" aria-label="LinkedIn" className="text-ewaste-muted/50 hover:text-ewaste-green transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
        </div>
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
          <p className="text-ewaste-muted/60 mt-2">Rounak Prasad, Tushar Kadian, Rahul Panwar</p>
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
