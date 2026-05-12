const paquets = [
  {
    nom: 'Llavor',
    preu: 29, setup: 199, popular: false,
    ideal: 'Bars, tallers, comerços petits',
    features: ['Web fins a 4 pàgines', 'Disseny responsive', 'Domini + hosting', '1 actualització/mes', 'SSL i còpies de seguretat'],
    no: ['SEO avançat', 'Informe mensual'],
  },
  {
    nom: 'Branca',
    preu: 49, setup: 349, popular: true,
    ideal: 'Clíniques, acadèmies, restaurants',
    features: ['Web fins a 8 pàgines', 'Disseny a mida', 'Domini + hosting', '3 actualitzacions/mes', 'SEO bàsic optimitzat', 'Formulari de contacte'],
    no: ['Informe mensual'],
  },
  {
    nom: 'Alzina',
    preu: 59, setup: 549, popular: false,
    ideal: 'Empreses i professionals',
    features: ['Pàgines il·limitades', 'Disseny premium a mida', 'Domini + hosting', 'Actualitzacions il·limitades', 'SEO avançat + Analytics', 'Informe mensual'],
    no: [],
  },
]

export default function Paquets() {
  return (
    <section id="paquets" className="py-28 px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-verd-mig/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <div className="text-verd-accent text-xs font-sans tracking-widest uppercase mb-4">Paquets</div>
          <h2 className="font-serif text-5xl md:text-6xl text-crema mb-4">
            Tria el teu paquet
          </h2>
          <p className="font-sans text-white/40 text-sm">Sense permanència mínima. Si no estàs content, ho deixem.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {paquets.map((p) => (
            <div key={p.nom} className={`rounded-2xl p-8 flex flex-col relative border transition-all ${
              p.popular
                ? 'bg-verd-accent border-verd-accent'
                : 'bg-nit-2 border-white/8 hover:border-white/20'
            }`}>
              {p.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-nit text-verd-accent text-xs font-sans font-medium px-4 py-1 rounded-full border border-verd-accent/40">
                    El més triat
                  </span>
                </div>
              )}

              <div className="mb-8">
                <div className={`font-sans text-xs tracking-widest uppercase mb-3 ${p.popular ? 'text-nit/60' : 'text-white/30'}`}>
                  {p.nom}
                </div>
                <div className={`font-serif text-6xl mb-2 ${p.popular ? 'text-nit' : 'text-crema'}`}>
                  {p.preu}<span className="text-2xl font-sans font-light">/mes</span>
                </div>
                <div className={`font-sans text-sm mb-1 ${p.popular ? 'text-nit/60' : 'text-white/30'}`}>
                  + {p.setup}€ posada en marxa
                </div>
                <div className={`font-sans text-xs mt-3 pt-3 border-t ${p.popular ? 'text-nit/50 border-nit/10' : 'text-white/25 border-white/5'}`}>
                  {p.ideal}
                </div>
              </div>

              <ul className="flex flex-col gap-3 flex-1 mb-8">
                {p.features.map((f) => (
                  <li key={f} className={`flex items-center gap-2.5 text-sm font-sans ${p.popular ? 'text-nit' : 'text-white/60'}`}>
                    <svg className={`w-4 h-4 flex-shrink-0 ${p.popular ? 'text-nit' : 'text-verd-accent'}`} viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {f}
                  </li>
                ))}
                {p.no.map((f) => (
                  <li key={f} className={`flex items-center gap-2.5 text-sm font-sans opacity-30 ${p.popular ? 'text-nit' : 'text-white/40'}`}>
                    <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 16 16" fill="none">
                      <path d="M4 8h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <a href="#contacte" className={`text-center text-sm font-sans font-medium py-3.5 rounded-full transition-all ${
                p.popular
                  ? 'bg-nit text-verd-accent hover:bg-nit-3'
                  : 'border border-white/15 text-crema hover:border-verd-accent hover:text-verd-accent'
              }`}>
                Escull {p.nom} →
              </a>
            </div>
          ))}
        </div>

        <p className="text-center font-sans text-xs text-white/25 mt-8">
          Tens un projecte especial? <a href="#contacte" className="text-verd-accent hover:underline">Escriu-me i ho estudiem.</a>
        </p>
      </div>
    </section>
  )
}
