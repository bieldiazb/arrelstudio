import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { fadeUp, stagger, useScrollReveal } from '../hooks/useAnimation'

export default function Paquets() {
  const { t } = useTranslation()
  const paquets = t('paquets.items', { returnObjects: true })
  const { ref, isInView } = useScrollReveal()
  const { ref: cardsRef, isInView: cardsInView } = useScrollReveal()

  return (
    <section id="paquets" className="py-28 px-6 border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-verd-mig/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto">

        <motion.div
          ref={ref}
          className="mb-20"
          variants={stagger}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div variants={fadeUp} className="text-verd-accent text-xs font-sans tracking-widest uppercase mb-5 font-medium">{t('paquets.label')}</motion.div>
          <motion.h2 variants={fadeUp} className="font-display font-black text-5xl md:text-6xl text-crema leading-[0.95] tracking-tight uppercase">
            {t('paquets.titol1')}<br /><span className="text-verd-accent">{t('paquets.titol2')}</span>
          </motion.h2>
        </motion.div>

        <motion.div
          ref={cardsRef}
          className="grid md:grid-cols-3 gap-4"
          variants={stagger}
          initial="hidden"
          animate={cardsInView ? 'visible' : 'hidden'}
        >
          {paquets.map((p, i) => (
            <motion.div
              key={p.nom}
              variants={fadeUp}
              custom={i}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={`rounded-2xl p-8 flex flex-col relative border transition-colors ${
                p.popular ? 'bg-verd-accent border-verd-accent' : 'bg-nit-2 border-white/8 hover:border-white/20'
              }`}
            >
              {p.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-nit text-verd-accent text-xs font-sans font-semibold px-4 py-1 rounded-full border border-verd-accent/40 tracking-widest uppercase">
                    {t('paquets.popular')}
                  </span>
                </div>
              )}

              <div className="mb-8">
                <div className={`font-display font-black text-xs tracking-widest uppercase mb-4 ${p.popular ? 'text-nit/50' : 'text-white/25'}`}>{p.nom}</div>
                <div className={`font-display font-black text-6xl tracking-tight leading-none mb-2 ${p.popular ? 'text-nit' : 'text-crema'}`}>
                  {p.preu}<span className="text-2xl font-sans font-light">/mes</span>
                </div>
                <div className={`font-sans text-sm font-light ${p.popular ? 'text-nit/60' : 'text-white/30'}`}>
                  {t('paquets.setup', { preu: p.setup })}
                </div>
                <div className={`font-sans text-xs font-light mt-3 pt-3 border-t ${p.popular ? 'text-nit/50 border-nit/10' : 'text-white/25 border-white/5'}`}>{p.ideal}</div>
              </div>

              <ul className="flex flex-col gap-3 flex-1 mb-8">
                {p.features.map((f) => (
                  <li key={f} className={`flex items-center gap-2.5 text-sm font-sans font-light ${p.popular ? 'text-nit' : 'text-white/60'}`}>
                    <svg className={`w-4 h-4 flex-shrink-0 ${p.popular ? 'text-nit' : 'text-verd-accent'}`} viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {f}
                  </li>
                ))}
                {p.no.map((f) => (
                  <li key={f} className={`flex items-center gap-2.5 text-sm font-sans font-light opacity-30 ${p.popular ? 'text-nit' : 'text-white/40'}`}>
                    <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 16 16" fill="none">
                      <path d="M4 8h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <a href="#contacte" className={`text-center text-xs font-sans font-semibold py-3.5 rounded-full transition-all tracking-widest uppercase ${
                p.popular ? 'bg-nit text-verd-accent hover:bg-nit-3' : 'border border-white/15 text-crema hover:border-verd-accent hover:text-verd-accent'
              }`}>
                {t('paquets.escull', { nom: p.nom })} →
              </a>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          className="text-center font-sans text-xs text-white/25 mt-8 font-light"
          initial={{ opacity: 0 }}
          animate={cardsInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5 }}
        >
          {t('paquets.projecte')}{' '}
          <a href="#contacte" className="text-verd-accent hover:underline">{t('paquets.escriuMe')}</a>
        </motion.p>
      </div>
    </section>
  )
}
