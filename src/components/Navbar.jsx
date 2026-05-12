import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#serveis', label: 'Serveis' },
    { href: '#paquets', label: 'Paquets' },
    { href: '#com-funciona', label: 'Com funciona' },
    { href: '#sobre-mi', label: 'Sobre mi' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-nit/90 backdrop-blur-md border-b border-white/5' : ''}`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#" className="font-serif text-xl text-crema tracking-tight">
          Arrel<span className="text-verd-accent">.</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-sm text-white/50 hover:text-crema transition-colors font-sans tracking-wide">
              {l.label}
            </a>
          ))}
          <a href="#contacte" className="text-sm bg-verd-accent text-nit px-5 py-2 rounded-full hover:bg-verd-clar transition-colors font-sans font-medium">
            Contacta
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
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm text-white/60 font-sans">{l.label}</a>
          ))}
          <a href="#contacte" onClick={() => setOpen(false)} className="text-sm bg-verd-accent text-nit px-4 py-2.5 rounded-full text-center font-sans font-medium">Contacta</a>
        </div>
      )}
    </nav>
  )
}
