export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-16 px-6">
      <div className="max-w-5xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center py-24">

        <div>
          <div className="inline-flex items-center gap-2 bg-verd-pale text-verd-fosc text-xs font-sans font-medium px-3 py-1.5 rounded-full mb-8">
            <span className="w-1.5 h-1.5 bg-verd-mig rounded-full"></span>
            Disseny web per a negocis locals
          </div>

          <h1 className="font-serif text-5xl md:text-6xl text-verd-fosc leading-tight mb-6">
            Webs amb arrels.<br />
            <em className="text-verd-mig not-italic">Per créixer</em><br />
            de veritat.
          </h1>

          <p className="font-sans text-stone-600 text-lg leading-relaxed mb-10 max-w-md">
            Dissenyem i mantenim la teva web perquè puguis dedicar-te al teu negoci. 
            Tot inclòs, sense sorpreses.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a href="#paquets" className="bg-verd-fosc text-crema font-sans font-medium px-6 py-3 rounded-full hover:bg-verd-mig transition-colors">
              Veure paquets
            </a>
            <a href="#contacte" className="text-verd-fosc font-sans font-medium px-6 py-3 rounded-full border border-verd-fosc/30 hover:border-verd-fosc transition-colors">
              Parlem-ne →
            </a>
          </div>

          <div className="flex items-center gap-8 mt-14 pt-8 border-t border-terra/40">
            <div>
              <div className="font-serif text-3xl text-verd-fosc">29€</div>
              <div className="font-sans text-xs text-stone-500 mt-0.5">des de / mes</div>
            </div>
            <div className="w-px h-10 bg-terra/40"></div>
            <div>
              <div className="font-serif text-3xl text-verd-fosc">+3 anys</div>
              <div className="font-sans text-xs text-stone-500 mt-0.5">d'experiència</div>
            </div>
            <div className="w-px h-10 bg-terra/40"></div>
            <div>
              <div className="font-serif text-3xl text-verd-fosc">Bages</div>
              <div className="font-sans text-xs text-stone-500 mt-0.5">i Catalunya</div>
            </div>
          </div>
        </div>

        <div className="hidden md:flex justify-center items-center">
          <div className="relative w-80 h-80">
            <svg viewBox="0 0 320 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <circle cx="160" cy="160" r="140" fill="#EAF3DE" />
              <line x1="160" y1="220" x2="160" y2="90" stroke="#3B6D11" strokeWidth="3" strokeLinecap="round"/>
              <line x1="160" y1="160" x2="110" y2="120" stroke="#3B6D11" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="160" y1="140" x2="210" y2="100" stroke="#3B6D11" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="160" y1="180" x2="95" y2="155" stroke="#639922" strokeWidth="2" strokeLinecap="round"/>
              <line x1="160" y1="170" x2="225" y2="145" stroke="#639922" strokeWidth="2" strokeLinecap="round"/>
              <line x1="160" y1="200" x2="120" y2="185" stroke="#97C459" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="160" y1="195" x2="200" y2="180" stroke="#97C459" strokeWidth="1.5" strokeLinecap="round"/>
              <circle cx="160" cy="88" r="7" fill="#27500A"/>
              <circle cx="108" cy="118" r="5" fill="#639922"/>
              <circle cx="212" cy="98" r="5" fill="#639922"/>
              <circle cx="93" cy="153" r="4" fill="#97C459"/>
              <circle cx="227" cy="143" r="4" fill="#97C459"/>
              <circle cx="118" cy="183" r="3" fill="#C0DD97"/>
              <circle cx="202" cy="178" r="3" fill="#C0DD97"/>
              <line x1="130" y1="222" x2="190" y2="222" stroke="#27500A" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="138" y1="222" x2="125" y2="248" stroke="#3B6D11" strokeWidth="2" strokeLinecap="round"/>
              <line x1="160" y1="222" x2="160" y2="248" stroke="#3B6D11" strokeWidth="2" strokeLinecap="round"/>
              <line x1="182" y1="222" x2="195" y2="248" stroke="#3B6D11" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
        </div>

      </div>
    </section>
  )
}
