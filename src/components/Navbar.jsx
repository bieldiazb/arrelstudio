import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { t, i18n } = useTranslation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'ca' ? 'es' : 'ca')
  }

  const links = [
    { href: '#serveis', label: t('nav.serveis') },
    { href: '#paquets', label: t('nav.paquets') },
    { href: '#com-funciona', label: t('nav.comFunciona') },
    { href: '#sobre-mi', label: t('nav.sobreMi') },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-nit/90 backdrop-blur-md border-b border-white/5' : ''}`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#" className="flex items-baseline gap-0">
          <img src="/logo-white.png" alt="Arrel Studio" className="w-20 h-20" />
          {/* <span className="font-serif italic text-verd-accent text-2xl leading-none">.</span> */}
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-xs text-white/40 hover:text-crema transition-colors font-sans tracking-widest uppercase font-medium">
              {l.label}
            </a>
          ))}

          {/* Toggle idioma */}
          <button
            onClick={toggleLang}
            className="flex items-center gap-0 text-xs font-sans font-semibold tracking-widest border border-white/15 rounded-full overflow-hidden hover:border-white/30 transition-colors"
            aria-label="Canviar idioma"
          >
            <span className={`px-3 py-2 transition-colors ${i18n.language === 'ca' ? 'bg-verd-accent text-nit' : 'text-white/30 hover:text-white/60'}`}>CA</span>
            <span className={`px-3 py-2 transition-colors ${i18n.language === 'es' ? 'bg-verd-accent text-nit' : 'text-white/30 hover:text-white/60'}`}>ES</span>
          </button>

          <a href="#contacte" className="text-xs bg-verd-accent text-nit px-5 py-2.5 rounded-full hover:bg-verd-clar transition-colors font-sans font-semibold tracking-widest uppercase">
            {t('nav.contacta')}
          </a>
        </div>

        <button className="md:hidden text-crema" onClick={() => setOpen(!open)} aria-label="Menú">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            {open ? <><path d="M18 6L6 18"/><path d="M6 6l12 12"/></> : <><path d="M3 8h18"/><path d="M3 16h18"/></>}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-nit border-t border-white/5 px-6 py-5 flex flex-col gap-5">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-xs text-white/50 font-sans tracking-widest uppercase">{l.label}</a>
          ))}
          <div className="flex items-center gap-3">
            <button onClick={toggleLang} className="flex items-center gap-0 text-xs font-sans font-semibold tracking-widest border border-white/15 rounded-full overflow-hidden">
              <span className={`px-3 py-2 transition-colors ${i18n.language === 'ca' ? 'bg-verd-accent text-nit' : 'text-white/30'}`}>CA</span>
              <span className={`px-3 py-2 transition-colors ${i18n.language === 'es' ? 'bg-verd-accent text-nit' : 'text-white/30'}`}>ES</span>
            </button>
          </div>
          <a href="#contacte" onClick={() => setOpen(false)} className="text-xs bg-verd-accent text-nit px-4 py-3 rounded-full text-center font-sans font-semibold tracking-widest uppercase">
            {t('nav.contacta')}
          </a>
        </div>
      )}
    </nav>
  )
}