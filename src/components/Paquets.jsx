const paquets = [
  {
    nom: 'Llavor',
    preu: 29,
    setup: 199,
    popular: false,
    ideal: 'Bars, tallers, comerços',
    features: [
      'Web fins a 4 pàgines',
      'Disseny responsive',
      'Domini + hosting inclòs',
      '1 actualització al mes',
      'SSL i còpies de seguretat',
    ],
    noFeatures: ['SEO avançat', 'Informe mensual'],
  },
  {
    nom: 'Branca',
    preu: 49,
    setup: 349,
    popular: true,
    ideal: 'Clíniques, acadèmies, restaurants',
    features: [
      'Web fins a 8 pàgines',
      'Disseny a mida',
      'Domini + hosting inclòs',
      '3 actualitzacions al mes',
      'SEO bàsic optimitzat',
      'Formulari de contacte',
    ],
    noFeatures: ['Informe mensual'],
  },
  {
    nom: 'Alzina',
    preu: 59,
    setup: 549,
    popular: false,
    ideal: 'Empreses i professionals',
    features: [
      'Pàgines il·limitades',
      'Disseny premium a mida',
      'Domini + hosting inclòs',
      'Actualitzacions il·limitades',
      'SEO avançat + Analytics',
      'Informe mensual de visites',
    ],
    noFeatures: [],
  },
]

export default function Paquets() {
  return (
    <section id="paquets" className="py-24 px-6 bg-verd-fosc">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 text-verd-clar text-xs font-sans font-medium mb-4">
            <span className="w-8 h-px bg-verd-clar inline-block"></span>
            Paquets
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-crema mb-4">
            Tria el que s'adapta<br /><em className="text-verd-clar">al teu negoci</em>
          </h2>
          <p className="font-sans text-verd-pale text-lg max-w-lg">
            Tots els paquets inclouen domini, hosting i manteniment. Sense permanència mínima.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {paquets.map((p) => (
            <div key={p.nom} className={`rounded-2xl p-8 flex flex-col relative ${p.popular ? 'bg-crema' : 'bg-verd-fosc border border-verd-mig/30'}`}>
              {p.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-verd-mig text-crema text-xs font-sans font-medium px-4 py-1 rounded-full">
                    El més triat
                  </span>
                </div>
              )}

              <div className="mb-6">
                <div className={`font-sans text-xs font-medium uppercase tracking-widest mb-1 ${p.popular ? 'text-verd-mig' : 'text-verd-clar/60'}`}>
                  {p.nom}
                </div>
                <div className={`font-serif text-5xl mb-1 ${p.popular ? 'text-verd-fosc' : 'text-crema'}`}>
                  {p.preu}<span className="text-2xl font-sans font-light">€</span>
                  <span className={`text-base font-sans font-light ${p.popular ? 'text-stone-500' : 'text-verd-pale/60'}`}>/mes</span>
                </div>
                <div className={`font-sans text-sm ${p.popular ? 'text-stone-500' : 'text-verd-pale/50'}`}>
                  + {p.setup}€ posada en marxa
                </div>
              </div>

              <div className={`text-xs font-sans mb-6 pb-6 border-b ${p.popular ? 'text-stone-500 border-terra/40' : 'text-verd-pale/50 border-verd-mig/20'}`}>
                Ideal per: {p.ideal}
              </div>

              <ul className="flex flex-col gap-3 flex-1 mb-8">
                {p.features.map((f) => (
                  <li key={f} className={`flex items-start gap-2.5 text-sm font-sans ${p.popular ? 'text-stone-700' : 'text-verd-pale'}`}>
                    <svg className="w-4 h-4 text-verd-mig flex-shrink-0 mt-0.5" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {f}
                  </li>
                ))}
                {p.noFeatures.map((f) => (
                  <li key={f} className={`flex items-start gap-2.5 text-sm font-sans opacity-40 ${p.popular ? 'text-stone-500' : 'text-verd-pale'}`}>
                    <svg className="w-4 h-4 flex-shrink-0 mt-0.5" viewBox="0 0 16 16" fill="none">
                      <path d="M4 8h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <a href="#contacte" className={`text-center text-sm font-sans font-medium py-3 rounded-full transition-colors ${p.popular ? 'bg-verd-fosc text-crema hover:bg-verd-mig' : 'border border-verd-mig/40 text-verd-pale hover:border-verd-clar hover:text-crema'}`}>
                Escull {p.nom}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center font-sans text-sm text-verd-pale/50 mt-8">
          Tens un projecte especial? <a href="#contacte" className="text-verd-clar hover:underline">Escriu-me i ho estudiem.</a>
        </p>
      </div>
    </section>
  )
}
