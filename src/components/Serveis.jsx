import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { fadeUp, slideLeft, stagger, staggerFast, useScrollReveal } from '../hooks/useAnimation'

const icons = [
  'M2 3h20v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3zM8 21h8M12 17v4',
  'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
  'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
  'M5 2h14a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zM12 18h.01',
  'M21 21l-4.35-4.35M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16z',
  'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z',
]

export default function Serveis() {
  const { t } = useTranslation()
  const items = t('serveis.items', { returnObjects: true })
  const { ref: headerRef, isInView: headerInView } = useScrollReveal()
  const { ref: gridRef, isInView: gridInView } = useScrollReveal()

  return (
    <section id="serveis" className="py-28 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">

        <motion.div
          ref={headerRef}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20"
          variants={stagger}
          initial="hidden"
          animate={headerInView ? 'visible' : 'hidden'}
        >
          <div>
            <motion.div variants={fadeUp} className="text-verd-accent text-xs font-sans tracking-widest uppercase mb-5 font-medium">{t('serveis.label')}</motion.div>
            <motion.h2 variants={slideLeft} className="font-display font-black text-5xl md:text-6xl text-crema leading-[0.95] tracking-tight uppercase">
              {t('serveis.titol1')}<br />{t('serveis.titol2')}<br /><span className="text-verd-accent">{t('serveis.titol3')}</span>
            </motion.h2>
          </div>
          <motion.p variants={fadeUp} className="font-sans font-light text-white/40 max-w-xs md:text-right text-sm leading-relaxed">{t('serveis.desc')}</motion.p>
        </motion.div>

        <motion.div
          ref={gridRef}
          className="grid md:grid-cols-3 gap-px bg-white/5 rounded-3xl overflow-hidden border border-white/5"
          variants={staggerFast}
          initial="hidden"
          animate={gridInView ? 'visible' : 'hidden'}
        >
          {items.map((item, i) => (
            <motion.div key={i} variants={fadeUp} className="bg-nit p-8 hover:bg-nit-3 transition-colors group cursor-default">
              <div className="w-10 h-10 rounded-xl bg-verd-mig/10 border border-verd-mig/20 flex items-center justify-center mb-6 group-hover:bg-verd-mig/20 transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#A8E040" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d={icons[i]}/>
                </svg>
              </div>
              <h3 className="font-display font-bold text-crema mb-2 text-sm tracking-wide uppercase">{item.title}</h3>
              <p className="font-sans font-light text-xs text-white/40 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
