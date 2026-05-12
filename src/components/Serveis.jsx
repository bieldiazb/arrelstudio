const items = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    title: 'Disseny a mida',
    desc: 'Cada web és diferent perquè cada negoci és diferent. Res de plantilles genèriques.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
      </svg>
    ),
    title: 'Domini + hosting inclòs',
    desc: 'No has de contractar res més. Ni dominis, ni servidors, ni certificats SSL.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Manteniment mensual',
    desc: 'Jo me\'n cuido que tot funcioni. Actualitzacions, còpies de seguretat i suport directe.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/>
      </svg>
    ),
    title: 'Adaptada a mòbil',
    desc: 'Més del 70% de visites venen del mòbil. La teva web quedarà perfecta a qualsevol pantalla.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
      </svg>
    ),
    title: 'SEO bàsic optimitzat',
    desc: 'Que et trobin a Google quan busquin el teu servei a la zona. Sense màgia, amb tècnica.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
    title: 'Suport per WhatsApp',
    desc: 'Tens un dubte o vols canviar alguna cosa? M\'escrius i t\'ho resolc jo directament.',
  },
]

export default function Serveis() {
  return (
    <section id="serveis" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 text-verd-mig text-xs font-sans font-medium mb-4">
            <span className="w-8 h-px bg-verd-mig inline-block"></span>
            Serveis
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-verd-fosc mb-4">
            Tot el que necessites,<br /><em>inclòs</em>
          </h2>
          <p className="font-sans text-stone-600 text-lg max-w-lg">
            La web de cada negoci és diferent. Però el que sempre inclou és el mateix: disseny, hosting, manteniment i tracte directe.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-terra/30 border border-terra/30 rounded-2xl overflow-hidden">
          {items.map((item, i) => (
            <div key={i} className="bg-crema p-8 hover:bg-verd-pale transition-colors group">
              <div className="text-verd-mig mb-4 group-hover:text-verd-fosc transition-colors">
                {item.icon}
              </div>
              <h3 className="font-sans font-medium text-verd-fosc mb-2">{item.title}</h3>
              <p className="font-sans text-sm text-stone-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
