export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 px-6 overflow-hidden">

      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-verd-mig/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-verd-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-verd-clar/8 rounded-full blur-2xl"></div>
      </div>

      {/* Grid lines decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-5"
        style={{backgroundImage: 'linear-gradient(#639922 1px, transparent 1px), linear-gradient(90deg, #639922 1px, transparent 1px)', backgroundSize: '80px 80px'}}>
      </div>

      <div className="relative max-w-6xl mx-auto w-full py-24">

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-12">

          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 border border-verd-mig/30 text-verd-accent text-xs font-sans px-3 py-1.5 rounded-full mb-10 bg-verd-mig/5">
              <span className="w-1.5 h-1.5 bg-verd-accent rounded-full animate-pulse"></span>
              Disseny web · Bages · Catalunya
            </div>

            <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl text-crema leading-[1.05] mb-8">
              Webs que<br />
              <span className="italic text-verd-accent">funcionen</span><br />
              de debò.
            </h1>

            <p className="font-sans text-white/50 text-lg leading-relaxed mb-10 max-w-lg">
              Dissenyem i mantenim la teva web perquè puguis dedicar-te al teu negoci. 
              Domini, hosting i manteniment inclòs. <span className="text-crema/80">Des de 29€/mes.</span>
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a href="#paquets" className="bg-verd-accent text-nit font-sans font-medium px-7 py-3.5 rounded-full hover:bg-verd-clar transition-all hover:scale-[1.02]">
                Veure paquets
              </a>
              <a href="#contacte" className="text-crema/70 font-sans text-sm hover:text-crema transition-colors flex items-center gap-2">
                Parlem-ne
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
          </div>

          {/* Stats vertical */}
          <div className="flex md:flex-col gap-8 md:gap-6 md:text-right pb-2">
            {[
              { val: '29€', sub: 'des de / mes' },
              { val: '+3 anys', sub: "d'experiència" },
              { val: '100%', sub: 'tot inclòs' },
            ].map((s, i) => (
              <div key={i}>
                <div className="font-serif text-3xl text-verd-accent">{s.val}</div>
                <div className="font-sans text-xs text-white/40 mt-1">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-20 pt-8 border-t border-white/8 flex flex-wrap gap-6 items-center">
          {['Sense permanència mínima', 'Domini i hosting inclòs', 'Suport directe per WhatsApp', 'Web llesta en 2 setmanes'].map((t, i) => (
            <div key={i} className="flex items-center gap-2 text-xs font-sans text-white/40">
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M3 8l3.5 3.5L13 4.5" stroke="#A8E040" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
              {t}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
