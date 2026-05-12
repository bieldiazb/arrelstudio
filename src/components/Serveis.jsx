const items = [
  { icon: 'M2 3h20v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3zM8 21h8M12 17v4', title: 'Disseny a mida', desc: 'Cada web és diferent perquè cada negoci és diferent. Res de plantilles genèriques.' },
  { icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5', title: 'Domini + hosting', desc: 'No has de contractar res més. Ni dominis, ni servidors, ni certificats SSL.' },
  { icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z', title: 'Manteniment inclòs', desc: 'Actualitzacions, còpies de seguretat i suport. Jo me\'n cuido cada mes.' },
  { icon: 'M5 2h14a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zM12 18h.01', title: 'Adaptada a mòbil', desc: 'Més del 70% de visites venen del mòbil. Perfecta a qualsevol pantalla.' },
  { icon: 'M21 21l-4.35-4.35M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16z', title: 'SEO optimitzat', desc: 'Que et trobin a Google quan busquin el teu servei a la zona.' },
  { icon: 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z', title: 'Suport directe', desc: 'M\'escrius per WhatsApp i t\'ho resolc jo. Sense tickets ni esperes.' },
]

export default function Serveis() {
  return (
    <section id="serveis" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20">
          <div>
            <div className="text-verd-accent text-xs font-sans tracking-widest uppercase mb-4">Serveis</div>
            <h2 className="font-serif text-5xl md:text-6xl text-crema leading-tight">
              Tot el que necessites,<br /><em>inclòs</em>
            </h2>
          </div>
          <p className="font-sans text-white/40 max-w-sm md:text-right text-sm leading-relaxed">
            Una quota mensual fixa que cobreix absolutament tot. Sense sorpreses a final de mes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-white/5 rounded-3xl overflow-hidden border border-white/5">
          {items.map((item, i) => (
            <div key={i} className="bg-nit p-8 hover:bg-nit-3 transition-colors group cursor-default">
              <div className="w-10 h-10 rounded-xl bg-verd-mig/10 border border-verd-mig/20 flex items-center justify-center mb-6 group-hover:bg-verd-mig/20 transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#A8E040" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d={item.icon}/>
                </svg>
              </div>
              <h3 className="font-sans font-medium text-crema mb-2 text-sm">{item.title}</h3>
              <p className="font-sans text-xs text-white/40 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
