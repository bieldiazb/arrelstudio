const passos = [
  {
    num: '01',
    title: 'Parlem',
    desc: 'Em dius com és el teu negoci, què vols transmetre i quines pàgines necessites. Una trucada de 20 minuts és suficient.',
  },
  {
    num: '02',
    title: 'Dissenyo i publico',
    desc: 'En menys de dues setmanes tens la teva web en línia, revisada i aprovada per tu.',
  },
  {
    num: '03',
    title: 'Jo me\'n cuido',
    desc: 'Cada mes m\'encarrego que tot funcioni i estigui al dia. Tu no has de fer res.',
  },
]

export function ComFunciona() {
  return (
    <section id="com-funciona" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 text-verd-mig text-xs font-sans font-medium mb-4">
            <span className="w-8 h-px bg-verd-mig inline-block"></span>
            Com funciona
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-verd-fosc">
            En tres passos
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {passos.map((p) => (
            <div key={p.num} className="relative">
              <div className="font-serif text-8xl text-verd-pale font-semibold mb-4 leading-none select-none">
                {p.num}
              </div>
              <h3 className="font-sans font-medium text-verd-fosc text-lg mb-3">{p.title}</h3>
              <p className="font-sans text-stone-500 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function SobreMi() {
  return (
    <section id="sobre-mi" className="py-24 px-6 bg-verd-pale/40">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 text-verd-mig text-xs font-sans font-medium mb-6">
            <span className="w-8 h-px bg-verd-mig inline-block"></span>
            Sobre mi
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-verd-fosc mb-6">
            Hola, soc en Biel
          </h2>
          <p className="font-sans text-stone-600 leading-relaxed mb-4">
            Soc dissenyador web i desenvolupador del Bages. Faig webs professionals per a negocis locals perquè crec que tota empresa, gran o petita, mereix tenir una bona presència a internet.
          </p>
          <p className="font-sans text-stone-600 leading-relaxed mb-4">
            Tinc més de 3 anys d'experiència fent webs i aplicacions. Sé el que funciona i el que no.
          </p>
          <p className="font-sans text-stone-600 leading-relaxed mb-8">
            Quan treballes amb Arrel Studio, treballes directament amb mi — no hi ha intermediaris. Si necessites alguna cosa, m'escrius i te la resolc jo.
          </p>
          <a href="#contacte" className="inline-flex items-center gap-2 text-verd-fosc font-sans font-medium border-b border-verd-fosc pb-0.5 hover:text-verd-mig hover:border-verd-mig transition-colors">
            Parlem-ne →
          </a>
        </div>

        <div className="flex justify-center">
          <div className="w-64 h-64 rounded-full bg-verd-pale border-4 border-verd-mig/20 flex items-center justify-center">
            <div className="text-center">
              <div className="font-serif text-5xl text-verd-fosc mb-2">BD</div>
              <div className="font-sans text-xs text-verd-mig tracking-widest uppercase">Biel Díaz</div>
              <div className="font-sans text-xs text-stone-400 mt-1">Bages, Catalunya</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const faqs = [
  { q: 'Puc cancel·lar quan vulgui?', a: 'Sí. No hi ha permanència mínima. Si en algun moment vols deixar el servei, m\'ho dius amb 30 dies d\'antelació i ja està.' },
  { q: 'El domini és meu?', a: 'Sí. El domini és teu i sempre ho serà. Si deixes el servei, te\'l transfereixo sense cap cost.' },
  { q: 'En quant de temps tinc la web llesta?', a: 'Normalment en 10 a 15 dies des que comencem a treballar, depenent de la complexitat i del contingut que em facilitis.' },
  { q: 'Necessito saber res de tecnologia?', a: 'No. Jo m\'encarrego de tot el tècnic. Tu només has de dir-me com vols la web i revisar el resultat.' },
  { q: 'Fas webs en castellà?', a: 'Sí, la web pot estar en català, castellà o les dues, com prefereixis.' },
  { q: 'Que passa si vull canviar contingut?', a: 'Depèn del paquet. Al Llavor tens 1 canvi al mes, al Branca 3 i a l\'Alzina els que necessitis. M\'envies el que vols canviar i ho faig jo.' },
]

export function FAQ() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 text-verd-mig text-xs font-sans font-medium mb-4">
            <span className="w-8 h-px bg-verd-mig inline-block"></span>
            Preguntes freqüents
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-verd-fosc">Dubtes habituals</h2>
        </div>

        <div className="divide-y divide-terra/40">
          {faqs.map((faq, i) => (
            <details key={i} className="group py-5">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <span className="font-sans font-medium text-verd-fosc">{faq.q}</span>
                <svg className="w-4 h-4 text-verd-mig flex-shrink-0 transition-transform group-open:rotate-45" viewBox="0 0 16 16" fill="none">
                  <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                </svg>
              </summary>
              <p className="font-sans text-sm text-stone-500 leading-relaxed mt-3 pr-8">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Contacte() {
  return (
    <section id="contacte" className="py-24 px-6 bg-verd-fosc">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 text-verd-clar text-xs font-sans font-medium mb-6">
          <span className="w-8 h-px bg-verd-clar inline-block"></span>
          Contacte
        </div>
        <h2 className="font-serif text-4xl md:text-5xl text-crema mb-4">
          Parlem sense compromís
        </h2>
        <p className="font-sans text-verd-pale text-lg mb-12 max-w-md mx-auto">
          Tens preguntes o vols saber si Arrel Studio és el que necessites? Escriu-me.
        </p>

        <form
          action="https://formspree.io/f/YOUR_FORM_ID"
          method="POST"
          className="bg-crema rounded-2xl p-8 text-left grid gap-4"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block font-sans text-xs font-medium text-stone-500 mb-1.5 uppercase tracking-wide">Nom</label>
              <input type="text" name="nom" required placeholder="El teu nom" className="w-full bg-white border border-terra/60 rounded-xl px-4 py-3 font-sans text-sm text-stone-700 focus:outline-none focus:border-verd-mig transition-colors"/>
            </div>
            <div>
              <label className="block font-sans text-xs font-medium text-stone-500 mb-1.5 uppercase tracking-wide">Negoci</label>
              <input type="text" name="negoci" placeholder="El teu negoci" className="w-full bg-white border border-terra/60 rounded-xl px-4 py-3 font-sans text-sm text-stone-700 focus:outline-none focus:border-verd-mig transition-colors"/>
            </div>
          </div>
          <div>
            <label className="block font-sans text-xs font-medium text-stone-500 mb-1.5 uppercase tracking-wide">Email o telèfon</label>
            <input type="text" name="contacte" required placeholder="Com et puc contactar?" className="w-full bg-white border border-terra/60 rounded-xl px-4 py-3 font-sans text-sm text-stone-700 focus:outline-none focus:border-verd-mig transition-colors"/>
          </div>
          <div>
            <label className="block font-sans text-xs font-medium text-stone-500 mb-1.5 uppercase tracking-wide">Missatge</label>
            <textarea name="missatge" rows={4} placeholder="Explica'm una mica com és el teu negoci i el que necessites..." className="w-full bg-white border border-terra/60 rounded-xl px-4 py-3 font-sans text-sm text-stone-700 focus:outline-none focus:border-verd-mig transition-colors resize-none"></textarea>
          </div>
          <div className="flex items-start gap-2">
            <input type="checkbox" required id="privacy" className="mt-1 accent-verd-mig"/>
            <label htmlFor="privacy" className="font-sans text-xs text-stone-500">
              He llegit i accepto la <a href="/privacitat" className="text-verd-fosc underline">política de privacitat</a>
            </label>
          </div>
          <button type="submit" className="w-full bg-verd-fosc text-crema font-sans font-medium py-3.5 rounded-full hover:bg-verd-mig transition-colors">
            Enviar missatge →
          </button>
          <p className="text-center font-sans text-xs text-stone-400">
            O escriu directament a <a href="mailto:hola@arrelstudio.cat" className="text-verd-fosc hover:underline">hola@arrelstudio.cat</a>
          </p>
        </form>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-terra/40">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-serif text-lg text-verd-fosc">
          Arrel <span className="text-verd-mig">Studio</span>
        </div>
        <div className="font-sans text-xs text-stone-400 text-center">
          Sant Fruitós de Bages, Catalunya · hola@arrelstudio.cat
        </div>
        <div className="flex items-center gap-4 font-sans text-xs text-stone-400">
          <a href="/avis-legal" className="hover:text-verd-fosc transition-colors">Avís legal</a>
          <span>·</span>
          <a href="/privacitat" className="hover:text-verd-fosc transition-colors">Privacitat</a>
          <span>·</span>
          <span>© 2025 Arrel Studio</span>
        </div>
      </div>
    </footer>
  )
}
