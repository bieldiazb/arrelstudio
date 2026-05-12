const passos = [
  { num: '01', title: 'Parlem', desc: 'Em dius com és el teu negoci i què necessites. Una trucada de 20 minuts és suficient.' },
  { num: '02', title: 'Dissenyo i publico', desc: 'En menys de dues setmanes tens la teva web en línia, revisada i aprovada per tu.' },
  { num: '03', title: 'Jo me\'n cuido', desc: 'Cada mes m\'encarrego que tot funcioni i estigui al dia. Tu no has de fer res.' },
]

export function ComFunciona() {
  return (
    <section id="com-funciona" className="py-28 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-verd-accent text-xs font-sans tracking-widest uppercase mb-4">Com funciona</div>
        <h2 className="font-serif text-5xl md:text-6xl text-crema mb-20">En tres passos</h2>

        <div className="grid md:grid-cols-3 gap-12">
          {passos.map((p) => (
            <div key={p.num} className="relative">
              <div className="font-serif text-[7rem] leading-none text-white/4 select-none absolute -top-6 -left-2">{p.num}</div>
              <div className="relative pt-10">
                <div className="w-8 h-px bg-verd-accent mb-6"></div>
                <h3 className="font-sans font-medium text-crema text-lg mb-3">{p.title}</h3>
                <p className="font-sans text-sm text-white/40 leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 rounded-2xl bg-nit-2 border border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="font-sans font-medium text-crema mb-1">Llest en menys de 2 setmanes</div>
            <div className="font-sans text-sm text-white/40">Des que parlem fins que el teu negoci apareix a internet.</div>
          </div>
          <a href="#contacte" className="flex-shrink-0 bg-verd-accent text-nit font-sans font-medium px-6 py-3 rounded-full hover:bg-verd-clar transition-colors text-sm">
            Comencem →
          </a>
        </div>
      </div>
    </section>
  )
}

export function SobreMi() {
  return (
    <section id="sobre-mi" className="py-28 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        <div>
          <div className="text-verd-accent text-xs font-sans tracking-widest uppercase mb-6">Sobre mi</div>
          <h2 className="font-serif text-5xl text-crema mb-8 leading-tight">
            Hola,<br />soc en Biel
          </h2>
          <p className="font-sans text-white/50 leading-relaxed mb-4 text-sm">
            Soc dissenyador web i desenvolupador del Bages. Faig webs professionals per a negocis locals perquè crec que tota empresa, gran o petita, mereix tenir una bona presència a internet.
          </p>
          <p className="font-sans text-white/50 leading-relaxed mb-8 text-sm">
            Quan treballes amb Arrel Studio, treballes directament amb mi — sense intermediaris. Si necessites alguna cosa, m'escrius i te la resolc jo.
          </p>
          <a href="#contacte" className="inline-flex items-center gap-2 text-verd-accent font-sans text-sm hover:gap-3 transition-all">
            Parlem sense compromís
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <div className="w-72 h-72 rounded-2xl bg-nit-2 border border-white/8 flex items-center justify-center">
              <div className="text-center">
                <div className="font-serif text-6xl text-verd-accent mb-3">BD</div>
                <div className="font-sans text-xs text-white/40 tracking-widest uppercase">Biel Díaz Basullas</div>
                <div className="font-sans text-xs text-white/25 mt-1">Sant Fruitós de Bages</div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-verd-accent text-nit font-sans text-xs font-medium px-4 py-2 rounded-full">
              +3 anys d'experiència
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
    <section className="py-28 px-6 border-t border-white/5">
      <div className="max-w-3xl mx-auto">
        <div className="text-verd-accent text-xs font-sans tracking-widest uppercase mb-4">FAQ</div>
        <h2 className="font-serif text-5xl text-crema mb-16">Dubtes habituals</h2>
        <div className="divide-y divide-white/5">
          {faqs.map((faq, i) => (
            <details key={i} className="group py-5">
              <summary className="flex items-center justify-between cursor-pointer list-none gap-4">
                <span className="font-sans text-sm font-medium text-crema/80 group-open:text-crema transition-colors">{faq.q}</span>
                <svg className="w-4 h-4 text-verd-accent flex-shrink-0 transition-transform group-open:rotate-45" viewBox="0 0 16 16" fill="none">
                  <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                </svg>
              </summary>
              <p className="font-sans text-sm text-white/40 leading-relaxed mt-4 pr-8">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Contacte() {
  return (
    <section id="contacte" className="py-28 px-6 border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-verd-mig/8 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-2xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-verd-accent text-xs font-sans tracking-widest uppercase mb-4">Contacte</div>
          <h2 className="font-serif text-5xl md:text-6xl text-crema mb-4">Parlem sense compromís</h2>
          <p className="font-sans text-white/40 text-sm">Et respoc en menys de 24 hores.</p>
        </div>

        <form
          action="https://formspree.io/f/YOUR_FORM_ID"
          method="POST"
          className="bg-nit-2 rounded-2xl p-8 border border-white/8 grid gap-4"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block font-sans text-xs text-white/30 mb-2 uppercase tracking-wide">Nom</label>
              <input type="text" name="nom" required placeholder="El teu nom"
                className="w-full bg-nit border border-white/8 rounded-xl px-4 py-3 font-sans text-sm text-crema placeholder-white/20 focus:outline-none focus:border-verd-accent/50 transition-colors"/>
            </div>
            <div>
              <label className="block font-sans text-xs text-white/30 mb-2 uppercase tracking-wide">Negoci</label>
              <input type="text" name="negoci" placeholder="El teu negoci"
                className="w-full bg-nit border border-white/8 rounded-xl px-4 py-3 font-sans text-sm text-crema placeholder-white/20 focus:outline-none focus:border-verd-accent/50 transition-colors"/>
            </div>
          </div>
          <div>
            <label className="block font-sans text-xs text-white/30 mb-2 uppercase tracking-wide">Email o telèfon</label>
            <input type="text" name="contacte" required placeholder="Com et puc contactar?"
              className="w-full bg-nit border border-white/8 rounded-xl px-4 py-3 font-sans text-sm text-crema placeholder-white/20 focus:outline-none focus:border-verd-accent/50 transition-colors"/>
          </div>
          <div>
            <label className="block font-sans text-xs text-white/30 mb-2 uppercase tracking-wide">Missatge</label>
            <textarea name="missatge" rows={4} placeholder="Explica'm una mica com és el teu negoci..."
              className="w-full bg-nit border border-white/8 rounded-xl px-4 py-3 font-sans text-sm text-crema placeholder-white/20 focus:outline-none focus:border-verd-accent/50 transition-colors resize-none"></textarea>
          </div>
          <div className="flex items-start gap-2">
            <input type="checkbox" required id="privacy" className="mt-1 accent-verd-accent"/>
            <label htmlFor="privacy" className="font-sans text-xs text-white/30">
              He llegit i accepto la <a href="/privacitat" className="text-verd-accent hover:underline">política de privacitat</a>
            </label>
          </div>
          <button type="submit"
            className="w-full bg-verd-accent text-nit font-sans font-medium py-4 rounded-full hover:bg-verd-clar transition-all hover:scale-[1.01]">
            Enviar missatge →
          </button>
          <p className="text-center font-sans text-xs text-white/25">
            O escriu a <a href="mailto:hola@arrelstudio.cat" className="text-verd-accent hover:underline">hola@arrelstudio.cat</a>
          </p>
        </form>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-serif text-lg text-crema">
          Arrel<span className="text-verd-accent">.</span>
        </div>
        <div className="font-sans text-xs text-white/25 text-center">
          Sant Fruitós de Bages · hola@arrelstudio.cat
        </div>
        <div className="flex items-center gap-4 font-sans text-xs text-white/25">
          <a href="/avis-legal" className="hover:text-white/60 transition-colors">Avís legal</a>
          <span>·</span>
          <a href="/privacitat" className="hover:text-white/60 transition-colors">Privacitat</a>
          <span>·</span>
          <span>© 2025</span>
        </div>
      </div>
    </footer>
  )
}
